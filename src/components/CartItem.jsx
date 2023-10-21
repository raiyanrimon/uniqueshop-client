import PropTypes from "prop-types";
import { toast } from "react-toastify";

const CartItem = ({ crt, items, setItems }) => {
  const { _id, name, price, image } = crt;

  const handleDeleteCart = (_id) => {
    console.log(_id);
    fetch(
      `https://unique-shop-server-75yzugdl5-golam-raiyans-projects.vercel.app/cart/${_id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.warning("Removed from cart");
        }
        const remaining = items.filter((item) => item._id !== _id);
        console.log(remaining);
        setItems(remaining);
      });
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="h-64">
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="badge badge-secondary">{crt.brandName}</p>
        <p className="font-bold">${price}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleDeleteCart(_id)}
            className="btn btn-warning"
          >
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  crt: PropTypes.object,
  items: PropTypes.array,
  setItems: PropTypes.func,
};

export default CartItem;
