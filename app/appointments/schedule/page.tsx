'use client';

import { useState } from 'react';
import DoctorCard from '../../components/DoctorCard';
import doctors from '../../data/mockDoctors';

export default function DoctorSchedule() {
  // Search state to filter doctors by name or department
  const [search, setSearch] = useState('');

  // Filtered list of doctors based on search input
  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase()) ||
    doc.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen">
      {/* Main Content Area */}
      <div>
        {/* Page Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Doctor's Schedule</h1>

        {/* Search Input */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search by Dr Name and Department"
            className="w-full max-w-md p-2 border border-gray-300 rounded-md shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
}
