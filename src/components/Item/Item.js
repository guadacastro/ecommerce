import { Link } from 'react-router-dom';
import './Item.css';


const Item = ({id, title, image, price, stock, description}) => {
    return (
        <Link to={`/item/${id}`} className='flex flex-col items-center'>
        
            <div className='flex flex-col gap-2 items-left'>
                <img className='w-96' src={image} alt={title} /> 
                <h2 className='font-serif text-lg text-justify'>{description}</h2>
                <h2 className='font-sans text-xl text-justify font-semibold'>{title}</h2>
                <p className='text-red-600 font-bold text-lg'>USD$ {price}</p>
                {/* <Link  className='bg-blue-500 p-2 rounded-lg hover:bg-white' >Ver Detalle</Link> */}
            </div>

        </Link>

    )
}

export default Item;