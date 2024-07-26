"use client"
import { useState, useEffect } from 'react';
import store from 'store2';

const pricePerNight = 15000; // Example price per night

export default function NightsSelector() {
  const [nights, setNights] = useState(store.get('nights') || 1);
  const [price, setPrice] = useState(pricePerNight * nights);

  const handleIncrement = () => {
    setNights(prevNights => {
      const newNights = prevNights + 1;
      store.set('nights', newNights);
      return newNights;
    });
  };

  const handleDecrement = () => {
    setNights(prevNights => {
      const newNights = prevNights > 1 ? prevNights - 1 : 1;
      store.set('nights', newNights);
      return newNights;
    });
  };

  useEffect(() => {
    setPrice(pricePerNight * nights);
    store.set('price', pricePerNight * nights);
  }, [nights]);

  return (
    <div className="flex flex-col items-center">
      <p className="text-gray-800 mb-2">How many nights are you going to spend?</p>
      <section className='flex flex-row justify-center items-center gap-16'>
      <div className="flex items-center mb-4 ">
        <button className="px-2 bg-orange-700 text-gray-100 rounded-full" onClick={handleDecrement}>-</button>
        <span className="px-5 py-2">{nights}</span>
        <button className="px-2 bg-orange-700 text-gray-100 rounded-full" onClick={handleIncrement}>+</button>
      </div>
      <p className="text-gray-800 mb-4">Price: <span className="font-bold">MWK {price}</span></p>
      
      </section>
      <p className="text-gray-800 mt-8">Booking for 1 person per bed for {nights} nights</p>
      <p className="text-gray-800 font-bold mb-8">Total Price: ${price}</p>
    </div>
  );
}
