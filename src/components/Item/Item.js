import { Link } from 'react-router-dom';
import './Item.css';


const Item = ({id, title, image, price, stock}) => {
    return (
        <article className='flex flex-col justify-between rounded-xl items-center  p-5'>
            <img className='w-56' src={image} alt={title} />
            <div className='flex justify-center'>
                <h2 className='font-sans text-xl text-justify font-semibold m-5 '>{title}</h2>
            </div>
            <section className='flex flex-col justify-center'>
                <p>${price}</p>
            </section>
            <div>
                <Link to={`/item/${id}`} className='bg-blue-500 p-2 rounded-lg hover:bg-white' >Ver Detalle</Link>
            </div>
        </article>

    )
}

export default Item;