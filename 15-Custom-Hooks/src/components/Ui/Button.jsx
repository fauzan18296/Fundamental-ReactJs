import PropTypes from "prop-types"

const Button = ({ classname = "bg-black", children = "...", onClick = () => {}, type = "button" }) => {
  return (
    <button
      className={`${classname} text-white rounded-md p-2 text-md font-semibold`}
      type={type}
      onClick={onClick}>
     {children}
    </button>
  )
}
Button.propTypes = {
  classname: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  onClick: PropTypes.object.isRequired,
  type: PropTypes.object.isRequired,
}
export default Button;