import { CartContext } from "../../context/CartContext";
import React, { useContext } from "react";

const CartItem = ({ title, price, id, quantity, image }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="flex items-center border-b border-gray-300 py-2">
      <div className="flex-shrink-0">
        <img className="w-24 h-24 object-cover rounded" src={image} alt={title} />
      </div>
      <div className="ml-4 flex-1">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">Quantity: {quantity}</p>
        <p className="text-red-600 font-bold text-lg"><span className="text-black">Total: </span> USD$ {price * quantity}</p>
      </div>
      <button
        onClick={() => removeItem(id)}
        className="text-red-600 text-lg hover:text-red-800 focus:outline-none mr-10"
      >
        Delete
      </button>
    </div>
  );
};

export default CartItem;
