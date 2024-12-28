/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react'
import CardProduct from '../components/Fragments/CardProduct'
import Navbar from '../components/Layouts/Navbar'
// import data dummy from '../data/products'
// import products from '../data/products'
// import data API from '../services/'
import { getProducts } from '../services/product.service'
import { useLogin } from '../hooks/useLogin'
import TableCart from '../components/Fragments/TableCart'

const ProductsPage = () => {
  const [products, setProducts] = useState([])
   useLogin()

  // Penggunaan Data API dari Fake Store API -> "https://fakestoreapi.com/"
  useEffect(() => {
    getProducts((data) => {
      setProducts(data)
    })
  }, [])

  return (
    <>
      <Navbar />
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
              />
            </CardProduct>
            )
        })
        }
        </div>
        <div className="w-3/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-4 mb-2">Cart</h1>
          <TableCart products={ products } />
        </div>
      </div>
      </>
  )
}

export default ProductsPage