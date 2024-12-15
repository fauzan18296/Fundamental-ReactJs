import Input from "./Input"
import Label from "./Label"
import PropTypes from "prop-types"

const InputForm = ({ label, name, type, placeholder }) => {
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} types={type} placeholder={placeholder} />
          </div>
  )
}
InputForm.propTypes = {
  label: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  type: PropTypes.object.isRequired,
  placeholder: PropTypes.object.isRequired,
}
export default InputForm;