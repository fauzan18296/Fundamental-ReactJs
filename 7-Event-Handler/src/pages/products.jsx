import CardProduct from '../components/Fragments/CardProduct'
import Button from '../components/Ui/Button'
import products from '../data/products'

const email = localStorage.getItem("email")

const ProductsPage = () => {
  const handleLogout = () => { 
    localStorage.removeItem("email")
    localStorage.removeItem("password")
    window.location.href = "/user/login"
   }

  return (
    <>
      <div className="flex justify-end bg-blue-600 h-20 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
      </div>
    <div className="flex justify-center py-5">
      {
        products.map((product) => {
          return (
      <CardProduct key={product.id}>
        <CardProduct.Header image={product.image} />
        <CardProduct.Body title={product.name}>
          {product.description}
        </CardProduct.Body>
        <CardProduct.Footer price={product.price} />
            </CardProduct>
            )
        })
      }
      </div>
      </>
  )
}

export default ProductsPage