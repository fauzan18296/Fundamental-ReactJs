import { forwardRef } from "react"
import Input from "./Input"
import Label from "./Label"
import PropTypes from "prop-types"

const InputForm = forwardRef((props, ref) => {
  const { label, name, type, placeholder} = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} types={type} placeholder={placeholder} ref={ref} />
          </div>
  )
})

InputForm.displayName = 'FormInput'
InputForm.propTypes = {
  label: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  type: PropTypes.object.isRequired,
  placeholder: PropTypes.object.isRequired,
  ref: PropTypes.object.isRequired,
}
export default InputForm;