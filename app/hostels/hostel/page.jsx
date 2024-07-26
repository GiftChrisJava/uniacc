"use client"
import Image from 'next/image';
import roomImage from '../../../public/a.jpeg';
import { ShowerHead } from 'lucide-react';

export default function Room() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Services Available</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <div className="flex flex-col items-center">
          <p className="text-gray-700">Kettle</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-700">Iron</p>
        </div>
        <div className="flex flex-col items-center">
          {/* <Mirror className="w-10 h-10 text-blue-600 mb-2" /> */}
          <p className="text-gray-700">Mirror</p>
        </div>
        <div className="flex flex-col items-center">
          {/* <ShowerHead className="w-10 h-10 text-blue-600 mb-2" />  */}
          <p className="text-gray-700">Shower</p>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-4">This is your bed</h2>
      <div className="relative w-full max-w-md h-64 mb-4">
        <Image src={roomImage} alt="Room" layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
      <h5 className='mt-2'>Price : $100</h5>

      <h3 className="text-lg font-bold text-gray-800 mb-2 mt-8">Room Rules</h3>
      <p className="text-gray-700 mb-4">
        This is a shared space; respect is a must. Losing keys will attract a fee of MWK 30,000. No drinking or smoking.
      </p>

      <button className="px-6 py-2 mt-8 rounded-lg bg-orange-600 text-white text-lg font-bold">I want to book this room</button>
    </div>
  );
}
