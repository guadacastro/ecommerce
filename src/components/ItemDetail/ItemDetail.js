import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, title, image, category, description, price, stock}) => {


    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id, title, price, image
        };

        

        addItem(item, quantity)
    }

    return (
        <article className='flex flex-wrap justify-center items-start md:items-center'>
            <div className="flex justify-center w-full md:w-1/2 px-20 py-20 ">
                <img className='max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto' src={image} alt={title} />
            </div>
            <div className="w-full md:w-1/2 px-4">
                <section className='mb-6'>
                <p className='font-serif text-xl text-gray-700'>{description}</p>
                    <h2 className='text-2xl font-bold mb-3'>{title}</h2>
                    <p className='text-sm text-gray-500 uppercase tracking-wide'>{category}</p>
                    <p className='text-lg font-semibold mt-3 text-red-600'>USD$ {price}</p>
                </section>
                <div >
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className="bg-gray-200 font-sans text-black p-2 rounded hover:bg-gray-800">Terminar Compra</Link>
                        ) : (
                            <ItemCount  initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                     {/* <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('[+] Cantidad agregada', quantity )} /> */}
                </div>
            </div>
        </article>
    )
}

export default ItemDetail;