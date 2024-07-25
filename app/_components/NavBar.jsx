import { useState } from 'react';
import store from 'store2';
import { districts } from '../data/districts';

export default function NavBar({ selectedDistrict, onDistrictSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 w-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Graduation Venues</h1>
        <button className="text-white md:hidden" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
        {districts.map((district) => (
          <button
            key={district.name}
            className={`block md:inline-block mt-2 md:mt-0 md:ml-4 px-4 py-2 rounded ${selectedDistrict === district.name ? 'bg-blue-800 text-white' : 'bg-blue-100 text-blue-800'}`}
            onClick={() => {
              store.set('selectedDistrict', district.name);
              onDistrictSelect(district.name);
            }}
          >
            {district.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
