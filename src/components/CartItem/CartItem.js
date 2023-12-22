import { CartContext } from "../../context/CartContext";
import React from "react";
import { useContext } from "react";



const CartItem = ({title, price, id, quantity, image}) => {

    const { removeItem } = useContext(CartContext);

    return (
        <div className=" flex flex-col items-center" >
        
                <img className='w-16' src={image} alt={title}/>
                <h2>{title}</h2>
                <p>Quantity: {quantity}</p>
                <p>Subtotal: {price * quantity}</p>
                <button onClick={()=> removeItem(id)}>Eliminar</button>
        


        </div>
    
    )

}



export default CartItem;