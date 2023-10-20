import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ProductCard = ({ brand }) => {
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure className="w-72 h-40">
          <img src={brand.image} alt={brand.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {brand.name}
            <div className="badge badge-secondary">{brand.brandName}</div>
          </h2>
          <div className="badge badge-outline">{brand.type}</div>
          <p className="font-bold">${brand.price}</p>
          <div className="flex space-x-1 items-center">
            <span>{brand.rating}</span>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>

          <div className="card-actions "></div>
          <Link to={`/products/${brand.brandName}/${brand._id}`}>
            {" "}
            <button className="btn w-full bg-cyan-400">Details</button>
          </Link>
          <Link to={`/update/${brand._id}`}>
            <button className="btn w-full bg-green-300">Update Product</button>
          </Link>
        </div>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  brand: PropTypes.object,
};

export default ProductCard;
