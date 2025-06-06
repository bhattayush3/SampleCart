import React from "react";
import { CartContext } from "../Context.jsx/Cart";
import { useContext } from "react";
function Items(props) {
  const cart = useContext(CartContext);
  console.log(cart)
  return (
    <div>
      <h3>{props.name}</h3>
      <p>price:${props.price}</p>
      <button
        onClick={() =>
          cart.setItems([
            ...cart.items,
            { name: props.name, price: props.price },
          ])
        }
      >
        Add To Cart
      </button>
    </div>
  );
}

export default Items;
