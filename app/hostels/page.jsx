// DistrictPage.jsx
"use client"
import store from 'store2';
import NavBar from '../_components/NavBar';
import HostelList from '../_components/HostelList';
import { hostelsData } from '../data/hostels';
import { districts } from '../data/districts';

export default function DistrictPage() {
  const selectedDistrict = store.get('selectedDistrict');
  const selectedUniversity = store.get('selectedUniversity');
  const selectedHostel = store.get('selectedHostel');

  const districtData = districts.find(d => d.name === selectedDistrict);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar selectedDistrict={selectedDistrict} onDistrictSelect={(district) => store.set('selectedDistrict', district)} />
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {selectedDistrict} - {selectedUniversity} - {selectedHostel}
        </h1>
        <HostelList hostels={hostelsData} />
      </div>
    </div>
  );
}
