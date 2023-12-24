import React, { useContext, useState } from 'react';
import { db } from '../../services/firebase/firebaseConfig';
import { CartContext } from '../../context/CartContext';
import { Timestamp, collection } from 'firebase/firestore';
import { getDocs, writeBatch, query, where, documentId, addDoc } from 'firebase/firestore';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  const { cart, total, clearCart } = useContext(CartContext);

  

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      

      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, 'products');
      const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
      console.log('Documents from Firestore:', productsAddedFromFirestore.docs.map(doc => doc.data()));

      const { docs } = productsAddedFromFirestore;


 

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        console.log('dataDoc:', dataDoc); 
        const stockDb = dataDoc.stockDb;
        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        console.log('productAddedToCart:', productAddedToCart); 
        const prodQuantity = productAddedToCart ? productAddedToCart.prodQuantity : 0;
        console.log('ProdQuantity: ', prodQuantity)

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });



      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, 'orders');
        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error('There are products that are out of stock');
      }
      console.log('Cart:', cart);
      console.log('IDs:', ids);
      console.log('Out of Stock Products:', outOfStock);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }


  };

  if (loading) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 border rounded-md shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Procesando...</h2>
        <p className="text-gray-600">Estamos generando su orden. Por favor, espere un momento.</p>
      </div>
    );
  }

  if (orderId) {
    
    return <h1 className="text-2xl font-semibold">El id de su orden es: {orderId}</h1>;
  }

  

  return (
    <div >
      
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
