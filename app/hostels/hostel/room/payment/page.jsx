"use client"
import { useState } from 'react';
import Image from 'next/image';
import copy from 'copy-to-clipboard';
import { CheckCircle, Copy } from 'lucide-react';
import landlordImage from '../../../../../public/a.jpeg';
import wap from '../../../../../public/wap.png';


export default function Payment() {
  const [copied, setCopied] = useState({});

  const phoneNumbers = ['+265991486005', '+265991486006'];

  const handleCopy = (number) => {
    copy(number);
    setCopied({ ...copied, [number]: true });
    setTimeout(() => setCopied({ ...copied, [number]: false }), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center">
      <div className="flex items-center mb-6">
        <div className="relative w-24 h-24 mr-4">
          <Image src={landlordImage} alt="Landlord" layout="fill" objectFit="cover" className="rounded-full" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Jane Doe</h2>
          <p className="text-gray-600">Zomba</p>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-4">Payment Details</h3>
      <div className="w-full max-w-md flex flex-col gap-4 mb-6">
        {phoneNumbers.map((number) => (
          <div key={number} className="flex justify-between items-center">
            <p className="text-gray-800">{number}</p>
            <button 
              className="flex items-center text-blue-600"
              onClick={() => handleCopy(number)}
            >
              {copied[number] ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              <span className="ml-1">{copied[number] ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        ))}
      </div>

      <p className="text-gray-800 font-bold mb-4">Please send proof of payment to Jane</p>
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
