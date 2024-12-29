/* eslint-disable react/prop-types */
import { useEffect, useRef, useContext } from 'react';
import { useSelector } from 'react-redux'
import { DarkMode } from '../../context/DarkMode'
import { useTotalPriceDispatch } from '../../hooks/useTotalPriceDispatch'
import { useTotalPrice } from '../../hooks/useTotalPrice'

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data)
  const { isDarkMode } = useContext(DarkMode)
  const dispatch = useTotalPriceDispatch()
  const { total } = useTotalPrice()

  // useEffect kedua: Digunakan untuk menghitung total harga berdasarkan isi `cart`
// Efek ini dijalankan setiap kali isi `cart` berubah
useEffect(() => {
  if (products.length > 0 && cart.length > 0) {
    const sum = cart.reduce((acc, item) => {
    const product = products.find(product => product.id === item.id);
    return acc + (product.price * item.quantity);
    }, 0);
    dispatch({
      type: 'UPDATE',
      payload: {
        total: sum,
      }
    })
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}, [cart, dispatch, products]); // Efek ini akan dijalankan ulang setiap kali `cart` berubah & akan dijalankan ulang setiap kali `products/data API` berubah
  
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
                 new Intl.NumberFormat("us-US", {style: "currency", currency: "USD", maximumFractionDigits: 0, }).format(total) 
                  }
                </b>
                </td>
              </tr>
            </tbody>
          </table>
  )
}
export default TableCart