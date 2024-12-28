import { useParams } from 'react-router'
import  { getDetailProduct } from '../services/product.service'
import { useEffect, useState  } from 'react'

const DetailProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data)
    })
  }, [id])
  console.log(product) 
  return (
    <div className='flex w-11/12 min-h-screen justify-center items-center'>
   {Object.keys(product).length > 0 && <div className="flex font-serif max-w-3xl">
  <div className="flex-none w-5/12 relative">
    <img src={product.image} alt={product.title} className="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
  </div>
  <form className="flex-auto p-6">
    <div className="flex flex-wrap items-baseline">
      <h1 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
       {product.title}
      </h1>
      <div className="flex-auto text-lg font-medium text-slate-500">
        {new Intl.NumberFormat("us-US", {style: "currency", currency: "USD", maximumFractionDigits: 0,}).format(product.price)}  
      </div>
      <div className="text-sm leading-6 font-medium uppercase text-slate-500">
              Review : { product.rating.rate }/5 ({ product.rating.count })
      </div>
    </div>
    <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div className="space-x-1 flex text-sm font-medium">
      { product.description }
      </div>
    </div>
    <div className="flex space-x-4 mb-5 text-sm font-medium">
      <div className="flex-auto flex space-x-4 pr-4">
        <button className="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white" type="submit">
          Buy now
        </button>
        <button className="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900" type="button">
          Add to bag
        </button>
      </div>
      <button className="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p className="text-sm text-slate-500">
      {product.category}
    </p>
  </form>
      </div>}
      </div>
  )
}

export default DetailProductPage