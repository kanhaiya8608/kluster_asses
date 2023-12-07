import React, { useState } from 'react';
import { RxCross2, RxTextAlignJustify } from 'react-icons/rx';
import { BsCart4 } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {
  let Links = [
    { name: 'Books', link: '/product' },
    { name: 'Authors', link: '/author' },
    { name: 'Basket', link: '/basket' },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full top-0 left-0'>
      <div className='md:grid grid-flow-col justify-stretch bg-white py-4 md:px-10 px-10'>
        <div className='font-bold text-2xl cursor-pointer flex items-center justify-between font-[Poppins] text-gray-800'>
          <Link id='logo' to='/'>Bookswala</Link>

          <div
            onClick={() => setOpen(!open)}
            className='cursor-pointer md:hidden text-xl'
          >
            {open ? <RxCross2 size={25} /> : <RxTextAlignJustify size={25} />}
          </div>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 shadow-md' : 'top-[-490px]' 
          }`}
        >
          {Links.map((link, index) => (
            <li key={link.name} className={`md:ml-8 text-xl md:my-0 my-7 ${index < Links.length - 1 ? 'md:mr-20' : ''}`}>
              <Link
                to={link.link}
                className='flex font-semibold md:pl-6 items-center text-gray-800 hover:text-gray-400 duration-500'
                onClick={() => setOpen(false)}
              >
                {link.name === 'Basket' ? (
                  <>
                    <BsCart4 size={20} className='mr-2' />
                    {link.name}
                  </>
                ) : (
                  link.name
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
