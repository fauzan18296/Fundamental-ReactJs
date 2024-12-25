/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react'
import CardProduct from '../components/Fragments/CardProduct'
import Button from '../components/Ui/Button'
// import data dummy from '../data/products'
// import products from '../data/products'
// import data API from '../services/'
import { getProducts } from '../services/product.service'
import { useLogin } from '../hooks/useLogin'

const ProductsPage = () => {
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [products, setProducts] = useState([])
  const username = useLogin()

  // Penggunaan Data API dari Fake Store API -> "https://fakestoreapi.com/"
  useEffect(() => {
    getProducts((data) => {
      setProducts(data)
    })
  }, [])


// useEffect pertama: Digunakan untuk menginisialisasi state `cart` saat komponen pertama kali dirender
useEffect(() => {
  setCart(JSON.parse(localStorage.getItem('cart'))  || []);
}, []); // Dependensi array kosong: efek ini hanya dijalankan sekali saat komponen pertama kali dimuat

// useEffect kedua: Digunakan untuk menghitung total harga berdasarkan isi `cart`
// Efek ini dijalankan setiap kali isi `cart` berubah
useEffect(() => {
  if (products.length > 0 && cart.length > 0) {
    const sum = cart.reduce((acc, item) => {
    const product = products.find(product => product.id === item.id);
    return acc + (product.price * item.quantity);
  }, 0);
    setTotalPrice(sum); // Memperbarui state `totalPrice` dengan nilai yang telah dihitung
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}, [cart, products]); // Efek ini akan dijalankan ulang setiap kali `cart` berubah & akan dijalankan ulang setiap kali `products/data API` berubah


  const handleLogout = () => { 
    localStorage.removeItem("token")
    window.location.href = "/login"
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
        { username }
        <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
      </div>
    <div className="flex justify-center py-5">
        <div className="w-full h-full flex flex-wrap max-w-screen-2xl">
      {
       products.length > 0 &&  products.map(product => {
          return (
      <CardProduct key={product.id}>
        <CardProduct.Header image={product.image} id={product.id} />
        <CardProduct.Body title={product.title}>
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
        <div className="w-3/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-4 mb-2">Cart</h1>
          <table className='border-separate table-auto text-left border-spacing-x-4'>
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
              products.length > 0 && cart.map(item => {
                  const product = products.find(product => product.id === item.id)
                  const formatProductPrice = new Intl.NumberFormat("us-US", {style: "currency", currency: "USD", maximumFractionDigits: 0, }).format(product.price) 
                  return (
                    <tr key={item.id}>
                      <td>{product.title}</td>
                      <td>{formatProductPrice}</td>
                      <td>{item.quantity}</td>
                      <td>{ (item.quantity  * product.price).toLocaleString("us-US", {style: "currency", currency: "USD", maximumFractionDigits: 0}) }</td>
                    </tr>
                  )
                })
              }
              <tr ref={totalPriceRef}>
                <td colSpan={3}><b>Total Price</b></td>
                <td>
                  <b>{
                 new Intl.NumberFormat("us-US", {style: "currency", currency: "USD", maximumFractionDigits: 0, }).format(totalPrice) 
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