import { CartContext } from "../../context/CartContext";
import React from "react";
import { useContext } from "react";



const CartItem = ({title, price, id, quantity, image}) => {

    const { removeItem } = useContext(CartContext);

    return (
        <div className=" flex flex-row items-center m-3 justify-between gap-3" >
        
                <img className='w-16' src={image} alt={title}/>
                <h2 className=" w-36">{title}</h2>
                <p>{quantity}</p>
                <p>$ {price * quantity}</p>
                <button onClick={()=> removeItem(id)}>x</button>
        


        </div>
    
    )

}



export default CartItem;