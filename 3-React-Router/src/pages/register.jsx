import AuthLayout from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router"

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="text-sm mt-5 text-center">Have an account?<Link to="/user/login" className="font-bold text-blue-500">Login</Link></p>
    </AuthLayout>
  )
}

export default RegisterPage;