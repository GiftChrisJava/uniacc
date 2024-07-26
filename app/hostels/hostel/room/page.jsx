"use client"
import Image from 'next/image';
import img1 from '../../../../public/a.jpeg';
import img2 from '../../../../public/b.jpeg';
import img3 from '../../../../public/c.jpeg';
import NightsSelector from './_components/NightSelector';
import { useState } from 'react';
import BookingForm from './_components/BookingForm';

export default function Booking() {
 const [isFormVisible, setIsFormVisible] = useState(false);

  const handleProceedToPayment = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center">
      <div className="grid grid-cols-3 gap-2 mb-8">
        <div className="relative w-24 h-28">
          <Image src={img1} alt="Image 1" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
        <div className="relative w-24 h-28">
          <Image src={img2} alt="Image 2" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
        <div className="relative w-24 h-28">
          <Image src={img3} alt="Image 3" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
      </div>
      <NightsSelector />
      <button onClick={handleProceedToPayment} className="mt-4 px-6 py-2 rounded-lg bg-orange-700 text-white text-lg font-bold">Proceed to payment</button>
       
       <section>
       {isFormVisible && <BookingForm onClose={handleCloseForm} />}
       </section>
    
    </div>

  );
}
