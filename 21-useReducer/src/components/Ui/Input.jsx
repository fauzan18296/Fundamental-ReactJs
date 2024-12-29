import PropTypes from  "prop-types"
import { forwardRef } from "react";
const Input = forwardRef((props, ref) =>  {
  const { types, placeholder, name } = props;
  return (
    <input type={types} className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50" placeholder={placeholder} name={name} id={name} ref={ref} />
  );
})

Input.displayName = "input"
Input.propTypes = {
  types: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
}
export default Input;