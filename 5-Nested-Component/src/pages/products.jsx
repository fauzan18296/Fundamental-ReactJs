import CardProduct from '../components/Fragments/CardProduct'
const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/public/image/shoes1.jpg"></CardProduct.Header>
        <CardProduct.Body title="Sepatu Baru">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet id tempora porro natus vitae quae expedita maiores aliquam possimus? Nemo error veritatis pariatur beatae necessitatibus accusantium natus quod sequi.</CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000" />
    </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/public/image/shoes1.jpg"></CardProduct.Header>
        <CardProduct.Body title="Sepatu Baru">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet id tempora porro natus vitae quae expedita maiores aliquam possimus? Nemo error veritatis pariatur beatae necessitatibus accusantium natus quod sequi.</CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000" />
    </CardProduct>
    </div>
  )
}

export default ProductsPage