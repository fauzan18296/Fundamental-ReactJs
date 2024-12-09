import PropTypes from "prop-types"

const Button = ({ classname = "bg-black", children = "..." }) => {
  return (
    <button
      className={`${classname} text-white rounded-md p-2 text-md font-semibold`}
      type="submit">
     {children}
    </button>
  )
}
Button.propTypes = {
  classname: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
}
export default Button;