import CardProduct from '../components/Fragments/CardProduct'
import products from '../data/products'

const ProductsPage = () => {
  return (
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
  )
}

export default ProductsPage