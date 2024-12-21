import InputForm from "../Ui/InputForm"
import Button from "../Ui/Button"
import { useRef, useEffect, useState } from "react"
import {login} from '../../services/auth.service'

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState('')
  const handleLogin = (event) => {
    event.preventDefault()
    // localStorage.setItem("email", event.target.email.value)
    // localStorage.setItem("password", event.target.password.value)
    // window.location.href = "/products"
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res)
        window.location.href = "/products"
      } else {
        setLoginFailed(res.response.data)
        console.log(res.response.data)
      }
    })
  }
  const usernameRef = useRef(null)

  useEffect(() => {
    usernameRef.current.focus()
  }, [])
  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Username" name="username" type="text" placeholder="Jhon Doe" ref={usernameRef} />
       {loginFailed && <p className="text-red-500">{ loginFailed }</p>}
        <InputForm label="Password" name="password" type="password" placeholder="****" />
          <Button classname="bg-blue-400 w-full" type="submit">Login</Button>
        </form>
  )
}

export default FormLogin;