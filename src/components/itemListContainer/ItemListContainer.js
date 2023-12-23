import { useState, useEffect } from "react";
import { getProductById, getProducts, getProductByCategory } from "../../data";
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";

import { getDocs,  collection, query, where, getDocFromServer } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemListContainer = ({ greeting }) => { 
    const [products, setProducts] = useState([])
    const [ loading, setLoading ] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
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