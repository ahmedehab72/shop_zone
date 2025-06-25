import Message from "../../components/Message";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moment from "moment";
import {
  FaBox,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaStore,
} from "react-icons/fa";
import { useGetProductsQuery } from "../../redux/api/productApiSlice";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ProductCarousel = () => {
  const { keyword } = useParams();

  const { data: products, isLoading, error } = useGetProductsQuery({ keyword });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  console.log(products);

  return (
    <div className="w-full max-w-7xl mx-auto my-10">
      {/* <h3 className=" text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-purple-700 mb-6 sm:mb-8 tracking-tight">
        Top Products
      </h3> */}
      {isLoading ? null : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div className="bg-gray-50 rounded-xl p-4">
          <Slider {...settings}>
            {products?.products.slice(5).map(
              ({
                image,
                _id,
                name,
                price,
                description,
                brand,
                createdAt,
                numReviews,
                rating,
                quantity,
                countInStock,
              }) => (
                <div key={_id} className="px-2">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                    {/* Image Section */}
                    <div className="relative bg-gray-100">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={name}
                        className="w-full h-48 object-cover object-center hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-4">
                      <div className="space-y-3">
                        {/* Product Info */}
                        <div className="space-y-2">
                          <h2 className="text-lg font-bold text-gray-800 hover:text-purple-600 transition-colors line-clamp-2">
                            {name.substring(0, 30)}
                          </h2>
                          <p className="text-xl font-bold text-purple-600">
                            ${price.toLocaleString()}
                          </p>
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                            {description.substring(0, 40)}...
                          </p>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="space-y-2">
                            <div className="flex items-center gap-1 text-gray-700">
                              <FaStore className="text-purple-600 flex-shrink-0" />
                              <span className="truncate">{brand}</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-700">
                              <FaStar className="text-purple-600 flex-shrink-0" />
                              <span>{Math.round(rating)} Rating</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-700">
                              <FaClock className="text-purple-600 flex-shrink-0" />
                              <span>{moment(createdAt).fromNow()}</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-1 text-gray-700">
                              <FaStar className="text-purple-600 flex-shrink-0" />
                              <span>{numReviews} Reviews</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-700">
                              <FaShoppingCart className="text-purple-600 flex-shrink-0" />
                              <span>{quantity} Items</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-700">
                              <FaBox className="text-purple-600 flex-shrink-0" />
                              <span>{countInStock} Stock</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Button */}
                        <div className="pt-2">
                          <Link to={`product/${_id}`} className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 w-full text-sm">
                            View Product
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
