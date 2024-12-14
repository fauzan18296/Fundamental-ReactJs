import CardProduct from '../components/Fragments/CardProduct'
import Button from '../components/Ui/Button'
import products from '../data/products'
import { useState } from 'react'

const email = localStorage.getItem("email")

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      quantity: 1,
  }
])


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
                  const product = products.find(
                    product => product.id === item.id
                  )
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
            </tbody>
          </table>
        </div>
      </div>
      </>
  )
}

export default ProductsPage