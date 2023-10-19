import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div className="space-y-5">
      <Banner></Banner>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 text-center">
        {brands.map((brand) => (
          <div className="card" key={brand._id}>
            {" "}
            <div className="text-center flex justify-center items-center">
              <img className="h-28 w-auto" src={brand.img} />{" "}
            </div>{" "}
            <div className="card-title justify-center items-center btn btn-link">
              <Link to={`/brand/${brand.name}`}>
                <h3>{brand.name}</h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
