import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import CartItem from "./CartItem";

const Cart = () => {
  const carts = useLoaderData();

  const user = useContext(AuthContext);
  const email = user?.user?.email;
  const cart = carts.filter((cart) => cart.email === email);
  const [items, setItems] = useState(cart);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5">
      {cart.map((crt) => (
        <CartItem
          key={crt._id}
          items={items}
          setItems={setItems}
          crt={crt}
        ></CartItem>
      ))}
    </div>
  );
};

export default Cart;
