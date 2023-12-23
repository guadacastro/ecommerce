import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' >Productos</Link>
            </div>
        )
    }

    return (
        <div className="flex flex-col grid-cols-1">
        
                {cart.map( p => <CartItem key={p.id} {...p} />)}
                <div className=" m-10 flex flex-row justify-between" >
                    <h3>Total: ${total()}</h3>
                    <button onClick={() => clearCart()} >Limpiar Carrito</button>
                    <Link to='./checkout'>Checkout</Link>
                </div>

    

        </div>
    )
}

export default Cart;