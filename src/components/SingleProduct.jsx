import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const SingleProduct = () => {
  const products = useLoaderData();
  const { name, brandName, price, type, description, image } = products;
  const user = useContext(AuthContext);
  const email = user?.user?.email;
  const cart = { email, name, brandName, price, image };
  const handleAddtoCart = () => {
    fetch(
      "https://unique-shop-server-cgne3mnfw-golam-raiyans-projects.vercel.app/cart",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cart),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Added to Cart Successfully");
        }
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="badge badge-secondary">{brandName}</p>
            <p className="badge badge-neutral font-bold">{type}</p>
            <p className="py-6 font-semibold">{description}</p>
            <p className="font-bold">Price: ${price}</p>
            <button onClick={handleAddtoCart} className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
