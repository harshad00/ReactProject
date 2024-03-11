import React from 'react';
import Logo from '../img/logo1.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <>

            <div className="flex border items-center space-x-9 pl-3 py-2">
            <img  className='w-[30px] p-' src={Logo} alt="" />
            <Link className='text-blue-300  font-bold hover:text-blue-500' to="/">Home</Link>
            <Link  className='text-blue-300 font-bold hover:text-blue-500 ' to="/Watchlist">Watclist</Link>
            </div>
   </>

  );
}

export default Navbar;
