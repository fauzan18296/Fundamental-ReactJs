import Button from '../Ui/Button'
import { useLogin } from '../../hooks/useLogin'
import { useState, useEffect  } from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
   const handleLogout = () => { 
    localStorage.removeItem("token")
    window.location.href = "/login"
  }
  const username = useLogin()
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data)
  
  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
     return acc + item.quantity
    }, 0);
    setTotalCart(sum)
  }, [cart])
  return (
    <div className="flex justify-end bg-blue-600 h-20 text-white items-center px-10 w-full min-h-full">
        { username }
      <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
        { totalCart }
        </div>
      </div>
  )
}

export default Navbar
