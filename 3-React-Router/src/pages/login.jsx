import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="text-sm mt-5 text-center">Don`t have an account? <Link to="/user/register" className="font-bold text-blue-500">Register</Link></p>
    </AuthLayout>
  )
}

export default LoginPage;