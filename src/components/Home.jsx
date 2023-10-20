import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brand from "./Brand";
import ReturnPolicy from "./ReturnPolicy";
import ShippingPolicy from "./ShippingPolicy";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div className="space-y-7">
      <Banner></Banner>
      <div className="text-center font-bold text-4xl">Our Brands</div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
        {brands.map((brand) => (
          <Brand key={brand._id} brand={brand}></Brand>
        ))}
      </div>
      <ShippingPolicy></ShippingPolicy>
      <ReturnPolicy></ReturnPolicy>
    </div>
  );
};

export default Home;
