import PropTypes from "prop-types"

const AuthLayout = ({children, title}) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
     <div className="w-full max-w-xs">
      <h1 className="text-blue-600 font-bold text-3xl">{ title }</h1>
        <p className="font-medium text-slate-500 text-md">Welcome, Please enter your details</p>
      { children }
      </div>
      </div>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
}

export default AuthLayout