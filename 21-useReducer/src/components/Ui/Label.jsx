import PropTypes from  "prop-types"
const Label = ({htmlFor, children}) => {
  return (
    <label htmlFor={htmlFor} className="block text-slate-700 text-sm font-bold mb-2">{ children }</label>
  )
}
Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
export default Label;