import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Brand = ({ brand }) => {
  return (
    <div className="card  bg-base-100 shadow-xl text-center">
      <figure className="w-36 h-36">
        <img src={brand.img} alt="Shoes" />
      </figure>

      <div className="card-body">
        <Link to={`/products/${brand.name}`}>
          <h2 className="card-title btn btn-outline">{brand.name}</h2>
        </Link>
      </div>
    </div>
  );
};
Brand.propTypes = {
  brand: PropTypes.object,
};
export default Brand;
