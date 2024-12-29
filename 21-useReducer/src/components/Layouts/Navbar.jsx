import Button from '../Ui/Button'
import { useLogin } from '../../hooks/useLogin'
import { useState, useEffect, useContext } from 'react'
import { DarkMode } from "../../context/DarkMode"
import { useSelector } from 'react-redux'
import { useTotalPrice } from '../../hooks/useTotalPrice'

const Navbar = () => {
   const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
   const handleLogout = () => { 
    localStorage.removeItem("token")
    window.location.href = "/login"
  }
  const username = useLogin()
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data)
  const { total } = useTotalPrice()
  
  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
     return acc + item.quantity
    }, 0);
    setTotalCart(sum)
  }, [cart])
  return (
    <div className="flex justify-end bg-blue-600 h-20 text-white items-center px-10 w-full min-h-full">
      {username}
      <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
       item : { totalCart } | price : {total.toLocaleString("us-US", {style: "currency", currency: "USD", maximumFractionDigits: 0})}
      </div>
      <Button classname="bg-black rounded px-5 mx-5 text-white mr-5" onClick={() => setIsDarkMode(!isDarkMode)}>
          { isDarkMode ? "Light" : "Dark" }
        </Button>
      </div>
  )
}

export default Navbar
