import { useLoaderData, useParams } from "react-router-dom";

const SingleProduct = () => {
  const products = useLoaderData();
  const id = useParams();
  console.log(products, id);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={products.image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{products.name}</h1>
            <p className="badge badge-secondary">{products.brandName}</p>
            <p className="badge badge-neutral font-bold">{products.type}</p>
            <p className="py-6 font-semibold">{products.description}</p>
            <p className="font-bold">Price: ${products.price}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
