import { useState } from 'react';
import store from 'store2';
import { districts } from '../data/districts';
import { navLinks } from '../_constants/NavLinks';
import Link from 'next/link';

export default function NavBar({ selectedDistrict, onDistrictSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 w-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-sm font-bold">GRADUATION ACCOMODATION FINDER</h1>
        <button className="text-white md:hidden" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`flex text-sm md:text-lg justify-center md:items-center ${isOpen ? 'block' : 'hidden'}`}>
        {navLinks.map((nav_link) => (
          <Link
            href={nav_link.href}
            key={nav_link.label}
            className={`block md:inline-block mt-2 md:mt-0 md:ml-4 px-4 py-2 rounded  ${selectedDistrict === nav_link.label ? ' text-orange-500' : ' text-gray-50 hover:text-orange-500'}`}
          >
            <span className='hover:text-orange-500'> {nav_link.label}</span>
           
          </Link>
        ))}
      </div>
    </nav>
  );
}
