/* eslint-disable react/prop-types */
import Button from '../Ui/Button';
const CardProduct = ({ children }) => {
  return (
      <div className="w-full max-w-sm bg-gray-800 border-grey-700 rounded-lg shadow mx-4">
      {children}
      </div>
  )
}

const Header = ({ image, }) => {
  return (
      <a href="#">
          <img src={image} alt="product" className="p-8 rounded-t-lg" />
      </a>
  )
}

const Body = ({ title, children }) => {
  return (
      <div className="px-5 pb-5">
          <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">{title}</h5>
          </a>
          <p className="text-sm text-white">{children}</p>
        </div>
  )
}

const Footer = ({ price }) => {
  return (
     <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price}</span>
          <Button classname='bg-blue-600'>Add to cart</Button>
       </div>
  )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct