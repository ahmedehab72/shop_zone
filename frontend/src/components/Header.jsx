import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
import Loader from "./Loader";
import SmallProduct from "../pages/Products/SmallProduct";
import ProductCarousel from "../pages/Products/ProductCarousel";

const Header = () => {
  const { data, isLoading, error } = useGetTopProductsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1>ERROR</h1>;
  }

  return (
    <div className="flex flex-col justify-center p-3 mb-8">
      {/* Products Grid - 4 in a row */}
      <div className="max-w-7xl mx-auto w-full py-10">
        <h3 className=" text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-purple-700 mb-6 sm:mb-8 tracking-tight">
          Top Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {data.map((product) => (
            <SmallProduct key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
