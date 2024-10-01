import React from 'react'
import './Navigation.css';
import { Wishlist } from '../common/Wishlist';
import { AccountIcon } from '../common/AccountIcon';
import { CartIcon } from '../common/CartIcon';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="flex items-center py-6 px-16 justify-between gap-20 custom nav">
            <div className="flex items-center gap-6">
                {/* Logo */}
                <a className="text-3xl text-black font-bold gap-8" href="/">eShopper</a>
            </div>

            <div className="flex flex-wrap items-center gap-10">
                {/* Nav items */}
                <ul className="flex gap-14 text-gray-600 hover:text-black">
                    <li className=" text-red-600"><NavLink to="/ofertas" className={({isActive})=> isActive ? 'active-link':''}>Ofertas</NavLink></li>
                    <li className=""><NavLink to="/masculino" className={({isActive})=> isActive ? 'active-link':''}>Masculino</NavLink></li>
                    <li className=""><NavLink to="/feminino" className={({isActive})=> isActive ? 'active-link':''}>Feminino</NavLink></li>
                </ul>
            </div>
            <div className="flex justify-center">
                {/* Search bar */}
                <div className="border rounded flex overflow-hidden">
                    <div className="flex items-center justify-center px-4 border">
                            <svg className="h-4 w-4 text-gray-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
                            <input type="text" className="px-4 py-2 outline-none" placeholder="Buscar" />
                    </div>
                </div>


            </div>

            <div className="flex flex-wrap items-center gap-4">
                {/* Action items  icons */}
                <ul className="flex items-center gap-8">
                    <li><button href="/"><Wishlist /></button></li>
                    <li><button href="/"><AccountIcon /></button></li>
                    <li><NavLink to="/cart-items"><CartIcon /></NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation