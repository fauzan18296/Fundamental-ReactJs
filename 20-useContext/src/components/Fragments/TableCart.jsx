/* eslint-disable react/prop-types */
import { useState, useEffect, useRef, useContext } from 'react';
import { useSelector } from 'react-redux'
import { DarkMode } from '../../context/DarkMode'

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data)
  const [totalPrice, setTotalPrice] = useState(0)
   const { isDarkMode, setIsDarkMode } = useContext(DarkMode)

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
    <table className={`border-separate table-auto text-left border-spacing-x-4 ${isDarkMode && "text-white"}`}>
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
  )
}
export default TableCart