import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)
    
    return (
        <Link to='/cart' style={{display: totalQuantity() > 0 ? 'block' : 'none'}} className=" flex justify-center">
            <div className="relative  hover:bg-gray-50 hover:rounded-full p-2 px-3">
                <div className="t-0 absolute left-3">
                    <p class="flex h-2 w-2 mx-3 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{totalQuantity()}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </div>
        </Link>
    )
}

export default CartWidget;