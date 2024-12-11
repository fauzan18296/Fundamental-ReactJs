import { useNavigate } from "react-router"

const WelcomePage = () => {
  const registerNavigation = useNavigate()
  return (
     <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-xl font-medium my-2">Hello Guys! Please register and login first in this web. Thank you 😊!</h1>
      <button className="font-bold bg-blue-300 rounded text-lg p-2 cursor-pointer text-slate-100" onClick={() => { registerNavigation("/user/register") }}>Klik This For Register!</button>
    </div>
  )
}

export default WelcomePage