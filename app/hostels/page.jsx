// DistrictPage.jsx
"use client"
import store from 'store2';
import NavBar from '../_components/NavBar';
import HostelList from '../_components/HostelList';
import { hostelsData } from '../data/hostels';
import { districts } from '../data/districts';
import Link from 'next/link';

export default function DistrictPage() {
  const selectedDistrict = store.get('selectedDistrict');
  const selectedUniversity = store.get('selectedUniversity');
  const selectedHostel = store.get('selectedHostel');

  const districtData = districts.find(d => d.name === selectedDistrict);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {store.get("selectedDistrict")} - {store.get("selectedUniversity")} - {store.get("selectedHostel")}
        </h1>

        <Link href={"/hostels/hostel"}>
          <HostelList hostels={hostelsData} />
        </Link>
      </div>
    </div>
  );
}
