"use client"
import { useState, useEffect } from 'react';
import store from 'store2';
import { useRouter } from 'next/navigation';

export default function BookingForm({ onClose }) {
  const router = useRouter();
  const [email, setEmail] = useState(store.get('email') || '');
  const [phone, setPhone] = useState(store.get('phone') || '');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const nights = store.get('nights') || 1;
  const price = store.get('price') || 100;

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (emailRegex.test(email) && phoneRegex.test(phone)) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [email, phone]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!phoneRegex.test(phone)) {
      setErrorMessage('Please enter a valid 10-digit phone number.');
      return;
    }

    store.set('email', email);
    store.set('phone', phone);
    setErrorMessage('');
    // Proceed to payment page
    router.push('/hostels/hostel/room/payment');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 relative" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>×</button>
        <h2 className="text-xl font-bold mb-4 text-gray-900">Booking Information</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <p className="text-red-500 mb-2">It is important to provide your email and phone number for all communications.</p>
            <input 
              type="email" 
              className="w-full px-4 py-2 border rounded-lg" 
              placeholder="Email" 
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <input 
              type="tel" 
              className="w-full px-4 py-2 border rounded-lg" 
              placeholder="Phone Number" 
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <div className="text-gray-800">
            Booking for 1 person per bed for {nights} nights
          </div>
          <div className="text-gray-800 font-bold">
            Total Price: MWK {price}
          </div>
          <button 
            type="submit" 
            className={`px-6 py-2 rounded-lg text-white text-lg font-bold ${isFormValid ? 'bg-orange-700' : 'bg-gray-300 cursor-not-allowed'}`} 
            disabled={!isFormValid}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
