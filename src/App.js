
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemCount from './components/ItemCount/ItemCount.js';
import Layout from './components/Layout.js';
import Home from './pages/Home.js';
import Category from './pages/Category.js';
import Product from './pages/Product.js';
import Design from './pages/Design.js';
import { CartProvider } from './context/CartContext.js';
import Cart from './components/Cart/Cart.js';

function App () {
    return (
        <div>
            {/* <NavBar />
            <ItemListContainer greeting={'Welcome!'} />
            <ItemDetailContainer /> */}
            <BrowserRouter>
                <CartProvider>
                    <Routes>
                        <Route path="/" element={ <Home/> } />
                        <Route index element={ <Home/> }/>
                        <Route path='/category/:categoryId' element={ <Category/> }/>
                        <Route path='/item/:itemId' element={<Product />} />
                        <Route path="/design" element={<Design />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>


    )
}

export default App;