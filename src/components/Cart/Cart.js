import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import Layout from "../Layout";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="text-center mt-8">
        <h1 className="text-2xl font-bold mb-4">No hay items en el carrito</h1>
        <Link to="/" className="text-blue-500 hover:underline">
          Ir a Productos
        </Link>
      </div>
    );
  }

  return (
    <Layout >
        <div className="flex flex-col mt-40 ml-40 mr-40">
                {cart.map((product) => (
                <CartItem key={product.id} {...product} />
                ))}
            <div className="mt-10 flex flex-col md:flex-row items-center justify-between">
                <h3 className="text-2xl font-bold mb-4 md:mb-0">Total: ${total()}</h3>
                    <div className="flex gap-4">
                    <button
                        onClick={() => clearCart()}
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none"
                    >
                        Clean Cart
                    </button>
                    <Link
                        to="/checkout"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
                    >
                        Go To Checkout
                    </Link>
                    </div>
            </div>
        </div>
      
    </Layout>
  );
};

export default Cart;
