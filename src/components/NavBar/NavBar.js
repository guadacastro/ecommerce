import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import logo from './assets/black circle.png';

const NavBar = () => {
    return (
        <nav className='xl-auto flex flex-row justify-evenly items-center gap-1 my-6'>
            <NavLink to='/' className='flex flex-row items-center gap-2'>
                <img src={logo} alt="Logo" className='w-8' />
                <p>T-Shirt.AI</p>
            </NavLink>
            <div className='flex flex-row gap-8 font-sans text-xl'>
                <NavLink to={`/`} activeClassName='active' className='py-1 px-4 rounded-md hover:bg-gray-50'>Home</NavLink>
                <NavLink to={`/category/women's clothing`} activeClassName='active' className='py-1 px-4 rounded-md hover:bg-gray-50'>Women's Clothing</NavLink>
                <NavLink to={`/category/men's clothing`} activeClassName='active' className='py-1 px-4 rounded-md hover:bg-gray-50'>Men's Clothing</NavLink>
                <NavLink to={`/category/jewelery`} activeClassName='active' className='py-1 px-4 rounded-md hover:bg-gray-50'>Jewelery</NavLink>
                <NavLink to={`/design`} activeClassName="active" className='py-1 px-4 rounded-md hover:bg-gray-50'>Design</NavLink>
                {/* Agrega más NavLink según tus categorías */}
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;