import InputForm from "../Ui/InputForm"
import Button from "../Ui/Button"

const FormRegister = () => {
  return (
     <form action="">
        <InputForm label="Fullname" name="Fullname" type="text" placeholder="Insert your name here..." />
        <InputForm label="Email" name="email" type="email" placeholder="example@gmail.com" />
        <InputForm label="Password" name="password" type="password" placeholder="****" />
        <InputForm label="Confirm Password" name="password" type="password" placeholder="Confirm Password" />
          <Button classname="bg-blue-400 w-full">Register</Button>
        </form>
  )
}

export default FormRegister;