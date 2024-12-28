import PropTypes from "prop-types"
import { useContext } from "react"
import { Link } from "react-router"
import { DarkMode } from "../../context/DarkMode"

const AuthLayout = ({ children, title, type }) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
  console.log(isDarkMode)
  return (
    <div className={`flex justify-center items-center min-h-screen ${isDarkMode && "bg-slate-800"}`}>
      <div className="w-full max-w-xs">
        <button className="absolute right-2 top-2 bg-blue-600 rounded p-2 text-white" onClick={() => setIsDarkMode(!isDarkMode)}>
          { isDarkMode ? "Light" : "Dark" }
        </button>
      <h1 className="text-blue-600 font-bold text-3xl">{ title }</h1>
        <p className="font-medium text-slate-500 text-md">Welcome, Please enter your details</p>
        {children}
        { <Navigation type={type}/> }
      </div>
      </div>
  )
}

const Navigation = ({ type }) => {
  // Conditional rendering => if else
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Don`t have an account?{" "}
        <Link to="/register" className="font-bold text-blue-500">Register</Link>
      </p>
    )} else {
          return (
        <p className="text-sm mt-5 text-center">
          Already have an account?{" "}
             <Link to="/login" className="font-bold text-blue-500">Login</Link>
            </p>
          )}
  }

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  type: PropTypes.string,
}
Navigation.propTypes = {
  type: PropTypes.string,
}

export default AuthLayout