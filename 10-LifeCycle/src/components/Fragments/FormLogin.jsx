import InputForm from "../Ui/InputForm"
import Button from "../Ui/Button"

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault()
    localStorage.setItem("email", event.target.email.value)
    localStorage.setItem("password", event.target.password.value)
    window.location.href = "/products"
  }
  return (
     <form onSubmit={handleLogin}>
        <InputForm label="Email" name="email" type="email" placeholder="example@gmail.com" />
        <InputForm label="Password" name="password" type="password" placeholder="****" />
          <Button classname="bg-blue-400 w-full" type="submit">Login</Button>
        </form>
  )
}

export default FormLogin;