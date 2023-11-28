import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
    return (
        <div className='grid grid-cols-3 gap-5 m-5 '>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;