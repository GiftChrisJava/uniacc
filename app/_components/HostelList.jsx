// HostelList.jsx
import { useState } from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HostelList({ hostels }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {hostels.map((hostel) => (
        <div key={hostel.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <Slider {...sliderSettings}>
            {hostel.images.map((image, index) => (
              <div key={index} className="relative w-full h-48">
                <Image src={image} alt={`Hostel ${hostel.id} Image ${index + 1}`} layout="fill" objectFit="cover" />
              </div>
            ))}
          </Slider>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{hostel.name}</h2>
            <p className="text-gray-600 mb-2">Owner: {hostel.owner}</p>
            <p className="text-gray-600">Location: {hostel.location}</p>
            <p className="text-gray-600">Price: {hostel.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
