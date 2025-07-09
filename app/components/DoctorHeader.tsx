'use client';

import { IDoctor } from '../types/doctor';
import { useState } from 'react';

interface DoctorHeaderProps {
  doctors: IDoctor[];
  selectedDoctorId: string;
  onDoctorSelect: (id: string) => void;
}

const DoctorHeader: React.FC<DoctorHeaderProps> = ({
  doctors,
  selectedDoctorId,
  onDoctorSelect,
}) => {
  const [selectedDept, setSelectedDept] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const departments = Array.from(new Set(doctors.map((doc) => doc.department)));

  const filteredDoctors =
    selectedDept === 'All'
      ? doctors
      : doctors.filter((doc) => doc.department === selectedDept);

  const firstRowDoctors = filteredDoctors.slice(0, 6);
  const remainingDoctors = filteredDoctors.slice(6);

  return (
    <div className="mb-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Doctors</h2>
        <select
          value={selectedDept}
          onChange={(e) => {
            setSelectedDept(e.target.value);
            setShowAll(false); // reset on filter change
          }}
          className="p-2 border border-gray-300 rounded-md text-sm"
        >
          <option value="All">All Departments</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      {/* First row of doctors */}
      <div className="flex flex-wrap gap-4 mb-2">
        {firstRowDoctors.map((doc) => (
          <div
            key={doc.id}
            className={`min-w-[140px] p-3 border rounded-lg text-center cursor-pointer shadow-sm transition ${
              doc.id === selectedDoctorId
                ? 'bg-green-100 border-green-500'
                : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => onDoctorSelect(doc.id)}
          >
            <img
              src={doc.avatar}
              alt={doc.name}
              className="w-12 h-12 rounded-full mx-auto mb-2"
            />
            <p className="text-sm font-medium text-gray-800">{doc.name}</p>
            <p className="text-xs text-gray-500">{doc.department}</p>
          </div>
        ))}
      </div>

      {/* See More button (below first row only if hidden doctors exist and not showing all) */}
      {remainingDoctors.length > 0 && !showAll && (
        <div className="ml-1 mt-1">
          <button
            onClick={() => setShowAll(true)}
            className="text-sm text-blue-500 hover:underline font-medium"
          >
            See More 
          </button>
        </div>
      )}

      {/* Extra doctors when 'showAll' is true */}
      {showAll && (
        <>
          <div className="flex flex-wrap gap-4 mt-3">
            {remainingDoctors.map((doc) => (
              <div
                key={doc.id}
                className={`min-w-[140px] p-3 border rounded-lg text-center cursor-pointer shadow-sm transition ${
                  doc.id === selectedDoctorId
                    ? 'bg-green-100 border-green-500'
                    : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => onDoctorSelect(doc.id)}
              >
                <img
                  src={doc.avatar}
                  alt={doc.name}
                  className="w-12 h-12 rounded-full mx-auto mb-2"
                />
                <p className="text-sm font-medium text-gray-800">{doc.name}</p>
                <p className="text-xs text-gray-500">{doc.department}</p>
              </div>
            ))}
          </div>

          {/* Show Less button placed below all cards */}
          <div className="ml-1 mt-3">
            <button
              onClick={() => setShowAll(false)}
              className="text-sm text-blue-500 hover:underline font-medium"
            >
              Show Less 
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DoctorHeader;
