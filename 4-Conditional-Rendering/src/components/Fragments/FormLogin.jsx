import InputForm from "../Ui/InputForm"
import Button from "../Ui/Button"

const FormLogin = () => {
  return (
     <form action="">
        <InputForm label="Email" name="email" type="email" placeholder="example@gmail.com" />
        <InputForm label="Password" name="password" type="password" placeholder="****" />
          <Button classname="bg-blue-400 w-full">Login</Button>
        </form>
  )
}

export default FormLogin;