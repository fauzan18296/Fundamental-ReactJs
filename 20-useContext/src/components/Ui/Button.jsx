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
  classname: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

export default Button;