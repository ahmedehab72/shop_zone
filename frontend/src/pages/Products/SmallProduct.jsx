import { Link } from "react-router-dom"
import HeartIcon from "./HeartIcon"

const SmallProduct = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="relative bg-gray-100">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-48 object-cover object-center hover:scale-105 transition-transform duration-300"
        />
        <HeartIcon product={product} />
      </div>

      <div className="p-4">
        <Link to={`/product/${product._id}`}>
          <h2 className="flex justify-between items-center hover:text-purple-600 transition-colors">
            <div className="font-medium text-gray-900 truncate mr-2">{product.name}</div>
            <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap">
              ${product.price}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  )
}

export default SmallProduct
