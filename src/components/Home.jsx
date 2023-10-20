import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brand from "./Brand";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div className="space-y-5">
      <Banner></Banner>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
        {brands.map((brand) => (
          <Brand key={brand._id} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Home;
