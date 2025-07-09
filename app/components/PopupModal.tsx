'use client';

import { useEffect, useRef, useState } from 'react';
import { IDoctor } from '../types/doctor';

interface PopupModalProps {
  doctor: IDoctor;
  date: string;
  time: string;
  onClose: () => void;
  onConfirm: (booking: {
    doctorId: string;
    date: string;
    time: string;
    patientName: string;
    service?: string;
    email: string;
  }) => void;
}

const PopupModal: React.FC<PopupModalProps> = ({ doctor, date, time, onClose, onConfirm }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [error, setError] = useState('');

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = () => {
    if (!firstName || !lastName || !email) {
      setError('Please fill all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const booking = {
      doctorId: doctor.id,
      date,
      time,
      patientName: `${firstName} ${lastName}`,
      service,
      email,
    };

    onConfirm(booking);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div ref={modalRef} className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative animate-fadeIn">
        <h2 className="text-xl font-bold text-green-700 mb-4">Book Appointment</h2>

        <div className="mb-4">
          <p className="font-medium text-gray-700">Doctor: <span className="text-gray-900">{doctor.name}</span></p>
          <p className="text-sm text-gray-500">Department: {doctor.department}</p>
          <p className="text-sm text-gray-500">Time: {time} | Date: {date}</p>
        </div>

        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

        <div className="grid gap-3 mb-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">First Name*</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter first name"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Last Name*</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter last name"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Email*</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Service (optional)</label>
            <input
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Eg: Skin Checkup"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
            onClick={handleSubmit}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
