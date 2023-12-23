import { useState, useEffect } from "react";
import { getProductById, getProducts, getProductByCategory } from "../../data";
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";

import { getDocs,  collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemListContainer = ({ greeting }) => { 
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProducts;

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div >
            <div className="text-center font-sans t text-6xl">
                <h1 className="p-8 font-semibold">{greeting}</h1>
            </div>
            <div>
                <ItemList products={products}/>
            </div>
        </div>

    )
}

export default ItemListContainer;