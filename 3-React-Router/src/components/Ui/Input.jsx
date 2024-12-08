import PropTypes from  "prop-types"
const Input = ({types, placeholder, name}) => {
  return (
    <input type={ types } className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50" placeholder={ placeholder } name={ name } id={ name } />
  )
}
Input.propTypes = {
  types: PropTypes.object.isRequired,
  placeholder: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
}
export default Input;