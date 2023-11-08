import CartWidget from '../cartWidget/CartWidget.js';
import logo from './assets/Aiko-logo.jpeg';
const NavBar = () => {
    return (
        <nav className=' xl-auto flex flex-row justify-evenly items-center gap-2 my-6 '>
            <div>
                <img src={logo} className='w-32'/>
            </div>
            <div className='flex flex-row gap-8 font-sans text-xl '>
                <button className=' py-1 px-4 rounded-md hover:bg-gray-50'>Home</button>
                <button className=' py-1 px-4 rounded-md hover:bg-gray-50'>Women</button>
                <button className=' py-1 px-4 rounded-md hover:bg-gray-50'>Men</button>
                <button className=' py-1 px-4 rounded-md hover:bg-gray-50'>Sale</button>
                <button className=' py-1 px-4 rounded-md hover:bg-gray-50'>Contact</button>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;