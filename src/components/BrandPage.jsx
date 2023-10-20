import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const BrandPage = () => {
  const brands = useLoaderData();
  if (brands.length === 0) {
    return (
      <div className="font-bold text-4xl text-center">
        No Products Available for this Brand
      </div>
    );
  }
  console.log(brands);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {brands.map((brand) => (
        <ProductCard key={brand._id} brand={brand}></ProductCard>
      ))}
    </div>
  );
};

export default BrandPage;
