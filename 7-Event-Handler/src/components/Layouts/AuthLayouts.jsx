import PropTypes from "prop-types"
import { Link } from "react-router"

const AuthLayout = ({ children, title, type }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
     <div className="w-full max-w-xs">
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
        <Link to="/user/register" className="font-bold text-blue-500">Register</Link>
      </p>
    )} else {
          return (
        <p className="text-sm mt-5 text-center">
          Already have an account?{" "}
             <Link to="/user/login" className="font-bold text-blue-500">Login</Link>
            </p>
          )}
  }

AuthLayout.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
  type: PropTypes.object.isRequired,
}
Navigation.propTypes = {
  type: PropTypes.object.isRequired,
}

export default AuthLayout