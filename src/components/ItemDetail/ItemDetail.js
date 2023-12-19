import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, title, image, category, description, price, stock}) => {
    console.log('[*] Stock actual (count):', stock);

    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id, title, price
        }

        addItem(item, quantity)
    }

    return (
        <article className='flex flex-wrap justify-center items-start md:items-center py-10'>
            <div className="flex justify-center w-full md:w-1/2 px-4">
                <img className='max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto' src={image} alt={title} />
            </div>
            <div className="w-full md:w-1/2 px-4">
                <section className='mb-6'>
                    <h2 className='text-2xl font-bold mb-3'>{title}</h2>
                    <p className='text-sm text-gray-500 mb-1 uppercase tracking-wide'>{category}</p>
                    <p className='text-gray-700 mb-3'>{description}</p>
                    <p className='text-lg font-semibold'>${price}</p>
                </section>
                <div>
                    {
                        quantityAdded > 0 ? (
                            <Link to='./cart'>Terminar Compra</Link>
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