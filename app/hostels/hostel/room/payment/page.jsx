"use client"
import { useState } from 'react';
import Image from 'next/image';
import copy from 'copy-to-clipboard';
import { CheckCircle, Copy } from 'lucide-react';
import landlordImage from '../../../../../public/a.jpeg';
import wap from '../../../../../public/wap.png';


export default function Payment() {
  const [copied, setCopied] = useState({});

  const phoneNumbers = ['0990000000', '0880000000'];

  const handleCopy = (number) => {
    copy(number);
    setCopied({ ...copied, [number]: true });
    setTimeout(() => setCopied({ ...copied, [number]: false }), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center">
      <div className="flex items-center mb-6 gap-4">
        <div className="relative w-24 h-24 mr-4">
          <Image src={landlordImage} alt="Landlord" layout="fill" objectFit="cover" className="rounded-full" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Jane Doe</h2>
          <p className="text-gray-600">Zomba, Malawi</p>
        </div>
      </div>

      <div className='shadow-xl py-2 px-4 rounded-lg bg-gray-100 mb-10 mt-4'>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Payment Details</h3>
        <div className="w-sm max-w-md flex flex-col gap-4 mb-6">
          {phoneNumbers.map((number) => (
            <div key={number} className="flex justify-between items-center">
              
              <div className='mr-10'>
              <p className="text-gray-800">{number}</p>
              <p>Jane Doe</p>
              </div>
              <button 
                className="flex items-center text-orange-700"
                onClick={() => handleCopy(number)}
              >
                {copied[number] ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                <span className="ml-1">{copied[number] ? 'Copied' : 'Copy #'}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <p className="text-gray-800 font-bold mb-4">Please send proof of payment to Jane Via</p>
      <a 
        href="https://wa.me/265991486005" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center text-green-600"
      >
        <div className="relative w-10 h-10">
          <Image src={wap} alt="WhatsApp" layout="fill" objectFit="cover" className="rounded-full" />
        </div>
        <span className="ml-2 text-lg font-bold">WhatsApp</span>
      </a>
    </div>
  );
}
