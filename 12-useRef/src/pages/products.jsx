/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react'
import CardProduct from '../components/Fragments/CardProduct'
import Button from '../components/Ui/Button'
import products from '../data/products'

const email = localStorage.getItem("email")

const ProductsPage = () => {
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

// useEffect pertama: Digunakan untuk menginisialisasi state `cart` saat komponen pertama kali dirender
useEffect(() => {
  setCart(JSON.parse(localStorage.getItem('cart'))  || []);
}, []); // Dependensi array kosong: efek ini hanya dijalankan sekali saat komponen pertama kali dimuat

// useEffect kedua: Digunakan untuk menghitung total harga berdasarkan isi `cart`
// Efek ini dijalankan setiap kali isi `cart` berubah
useEffect(() => {
  if (cart.length > 0) {
    const sum = cart.reduce((acc, item) => {
    const product = products.find(product => product.id === item.id);
    return acc + (product.price * item.quantity);
  }, 0);
    setTotalPrice(sum); // Memperbarui state `totalPrice` dengan nilai yang telah dihitung
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}, [cart]); // Efek ini akan dijalankan ulang setiap kali `cart` berubah


  const handleLogout = () => { 
    localStorage.removeItem("email")
    localStorage.removeItem("password")
    window.location.href = "/user/login"
  }

  const handleAddToCart = (id) => {
    // Jika terdapat item dalam cart dengan id yang sama dengan id produk yang ditambahkan
    if (cart.find(item => item.id === id)) {
        // Maka, perbarui cart dengan menambahkan quantity pada item yang id-nya sama
        setCart(cart.map(item => item.id === id ? {
          ...item, // Salin properti item yang ada
          quantity: item.quantity + 1, // Tambahkan quantity sebanyak 1
        } : item));
    } else {
        // Jika tidak ada item dengan id yang sama di cart,
        // tambahkan item baru ke cart dengan quantity awal 1
        setCart([
          ...cart, // Salin item-item yang ada di cart
          {
              id, // Tetapkan id produk baru
              quantity: 1, // Inisialisasi quantity produk baru
          }
        ])
    }
}

  // useRef
  const cartRef = useRef(JSON.parse(localStorage.getItem('cart'))  || [])

  const handleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, quantity: 1 }]
    localStorage.setItem("cart", JSON.stringify(cartRef.current))
  }

  // Menggunakan UseRef Hook saat ingin memanipulasi DOM
  const totalPriceRef = useRef(null)
  console.log(totalPriceRef)
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row"
    } else {
      totalPriceRef.current.style.display = "none"
    }
  }, [cart])

  return (
    <>
      <div className="flex justify-end bg-blue-600 h-20 text-white items-center px-10 w-full min-h-full">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
      </div>
    <div className="flex justify-center py-5">
        <div className="w-full h-full flex flex-wrap max-w-screen-2xl">
           {
        products.map(product => {
          return (
      <CardProduct key={product.id}>
        <CardProduct.Header image={product.image} />
        <CardProduct.Body title={product.name}>
          {product.description}
        </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id} 
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
            )
        })
        }
        </div>
        <div className="w-2/3">
          <h1 className="text-3xl font-bold text-blue-600 ml-4 mb-2">Cart</h1>
          <table className='border-separate table-auto text-left border-spacing-x-5'>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map(item => {
                  const product = products.find(product => product.id === item.id)
                  const formatProductPrice = new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR", maximumFractionDigits: 0, }).format(product.price) 
                  return (
                    <tr key={item.id}>
                      <td>{product.name}</td>
                      <td>{formatProductPrice}</td>
                      <td>{item.quantity}</td>
                      <td>{ (item.quantity  * product.price).toLocaleString("id-ID", {style: "currency", currency: "IDR", maximumFractionDigits: 0}) }</td>
                    </tr>
                  )
                })
              }
              <tr ref={totalPriceRef}>
                <td colSpan={3}><b>Total Price</b></td>
                <td>
                  <b>{
                 new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR", maximumFractionDigits: 0, }).format(totalPrice) 
                  }
                </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </>
  )
}

export default ProductsPage