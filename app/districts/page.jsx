"use client"
import { useState } from 'react';
import store from 'store2';
import { districts } from '../data/districts';
import Link from 'next/link';
import NavBar from '../_components/NavBar';

export default function Home() {
  const [selectedDistrict, setSelectedDistrict] = useState(store.get('selectedDistrict') || null);
  const [selectedUniversity, setSelectedUniversity] = useState(store.get('selectedUniversity') || null);
  const [selectedHostel, setSelectedHostel] = useState(store.get('selectedHostel') || null);

  const handleDistrictSelection = (district) => {
    setSelectedDistrict(district);
    setSelectedUniversity(null);
    setSelectedHostel(null);
    store.set('selectedDistrict', district);
  };

  const handleUniversitySelection = (university) => {
    setSelectedUniversity(university);
    setSelectedHostel(null);
    store.set('selectedUniversity', university);
  };

  const handleHostelSelection = (hostel) => {
    setSelectedHostel(hostel);
    store.set('selectedHostel', hostel);
  };

  return (
    <div>
      <NavBar/>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <h1 className="text-2xl mb-10 font-bold text-gray-800">Hello, please select venue for your graduation</h1>
      <div className="w-full md:w-1/2 flex flex-col items-center gap-4 mb-4">
        {districts.map((district) => (
          <div key={district.name} className="w-full flex flex-col items-center">
            <button
              className={`w-3/4 md:w-1/3 px-4 py-3 rounded-lg ${selectedDistrict === district.name ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => handleDistrictSelection(district.name)}
            >
              {district.name}
            </button>
            {selectedDistrict === district.name && (
              <div className="w-full flex flex-col items-center mt-2">
                {district.universities.map((university) => (
                  <button
                    key={university.name}
                    className={`w-2/4 md:w-1/3 px-4 py-2 mt-1 rounded-lg ${selectedUniversity === university.name ? 'bg-gray-600 text-white' : 'bg-green-100 text-green-800'}`}
                    onClick={() => handleUniversitySelection(university.name)}
                  >
                    {university.name}
                  </button>
                ))}
                {selectedUniversity && (
                <div className="w-full flex flex-col items-center mt-2">
                  {/* Find the selected university */}
                  {district.universities.find(u => u.name === selectedUniversity)?.hostels.map((hostel) => (
                    <button
                      key={hostel}
                      className={`w-1.5/4 md:w-1/3 px-4 py-2 mt-1 rounded-lg ${selectedHostel === hostel ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                      onClick={() => handleHostelSelection(hostel)}
                    >
                      {hostel}
                    </button>

                  ))}
                  <div className='mt-6'>
                  {selectedHostel && (
                      <Link 
                        className="mt-4 px-4 py-2 rounded-lg bg-orange-700 text-white"
                        href = '/hostels'
                      >
                        <button className='rounded-sm px-6 hover:text-gray-800'>{"Continue With This Selection"}</button>
                      </Link>
                    )}
                  </div>
              
                </div>
              )}
              </div>
            )}
          </div>
        ))}
      </div>
      
    </div>
    </div>
  );
}
