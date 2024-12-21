import { useRouteError } from "react-router"

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error)

  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p className="my-5 text-xl">Sorry, an unexpected error has occured</p>
      <p className="my-5 text-lg">
        { error?.statusText || error?.message }
      </p>
    </div>
  )
}
export default ErrorPage;