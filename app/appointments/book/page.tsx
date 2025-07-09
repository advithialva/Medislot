'use client';

import { useEffect, useState } from 'react';
import doctors from '../../data/mockDoctors';
import mockAppointments from '../../data/mockAppointments';
import CalendarGrid from '../../components/CalendarGrid';
import DoctorHeader from '../../components/DoctorHeader';
import PopupModal from '../../components/PopupModal';
import { IDoctor } from '../../types/doctor';
import { IAppointment } from '../../types/appointment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Rewind,
  FastForward,
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function AppointmentBookPage() {
  // Selected doctor for highlighting/booking
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(doctors[0].id);

  // Currently selected slot (doctor, date, time)
  const [selectedSlot, setSelectedSlot] = useState<{
    doctor: IDoctor;
    date: string;
    time: string;
  } | null>(null);

  // All appointments (fetched from localStorage or mock data)
  const [appointments, setAppointments] = useState<IAppointment[]>([]);

  // Current day shown in calendar
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  // Load appointments from localStorage on initial render
  useEffect(() => {
    const stored = localStorage.getItem('appointments');
    if (stored) {
      setAppointments(JSON.parse(stored));
    } else {
      setAppointments(mockAppointments);
      localStorage.setItem('appointments', JSON.stringify(mockAppointments));
    }
  }, []);

  // Format date to show in header (e.g., "Tue, Jul 9, 2025")
  const formattedDateHeader = currentDate.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  // Handle clicking on an empty slot in the calendar
  const handleSlotClick = (doctor: IDoctor, date: string, time: string) => {
    setSelectedSlot({ doctor, date, time });
  };

  // Handle booking confirmation from modal
  const handleBookingConfirm = (data: {
    doctorId: string;
    date: string;
    time: string;
    patientName: string;
    service?: string;
    email: string;
  }) => {
    const doctor = doctors.find((d) => d.id === data.doctorId)!;

    const newAppointment: IAppointment = {
      id: Date.now(),
      service: data.service || 'General Consultation',
      date: data.date,
      department: doctor.department,
      doctor: doctor.name,
      patient: data.patientName,
      timeslot: data.time,
      status: 'Approved',
      createdOn: new Date().toISOString().split('T')[0],
    };

    setAppointments((prev) => {
      const updated = [...prev, newAppointment];
      localStorage.setItem('appointments', JSON.stringify(updated));
      return updated;
    });

    setSelectedSlot(null);
    toast.success(`Appointment booked with ${doctor.name} at ${data.time}`);
  };

  // Navigate calendar by number of days
  const shiftDateBy = (days: number) => {
    setCurrentDate((prev) => new Date(prev.setDate(prev.getDate() + days)));
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen">
      {/* Page heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Book Appointment</h1>

      {/* Doctor selection */}
      <DoctorHeader
        doctors={doctors}
        selectedDoctorId={selectedDoctorId}
        onDoctorSelect={setSelectedDoctorId}
      />

     {/* Modern Date Navigation Bar */}
      <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm px-4 py-3 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          {/* Left: Navigation Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => shiftDateBy(-7)}
              className="text-sm text-gray-700 hover:text-blue-600 transition flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-100"
            >
              <Rewind className="w-4 h-4" />
              <span className="hidden sm:inline">Prev Week</span>
            </button>
            <button
              onClick={() => shiftDateBy(-1)}
              className="text-sm text-gray-700 hover:text-blue-600 transition flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-100"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Prev Day</span>
            </button>
            <button
              onClick={() => setCurrentDate(new Date())}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded-md transition shadow-sm"
            >
              Today
            </button>
            <button
              onClick={() => shiftDateBy(1)}
              className="text-sm text-gray-700 hover:text-blue-600 transition flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-100"
            >
              <span className="hidden sm:inline">Next Day</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => shiftDateBy(7)}
              className="text-sm text-gray-700 hover:text-blue-600 transition flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-100"
            >
              <span className="hidden sm:inline">Next Week</span>
              <FastForward className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Date Picker */}
          <div className="relative">
            <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            <DatePicker
              selected={currentDate}
              onChange={(date: Date | null) => date && setCurrentDate(date)}
              dateFormat="MMM d, yyyy"
              className="pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              popperPlacement="bottom-start"
              popperClassName="z-30"
            />
          </div>
        </div>
      </div>

      {/* Current date display */}
      <div className="text-xl font-semibold text-gray-800 mb-4 text-center sm:text-left">
        {formattedDateHeader}
      </div>

      {/* Calendar */}
      <CalendarGrid
        doctors={doctors}
        appointments={appointments}
        selectedDoctorId={selectedDoctorId}
        currentDate={currentDate}
        onSlotClick={handleSlotClick}
      />

      {/* Booking modal */}
      {selectedSlot && (
        <PopupModal
          doctor={selectedSlot.doctor}
          date={selectedSlot.date}
          time={selectedSlot.time}
          onClose={() => setSelectedSlot(null)}
          onConfirm={handleBookingConfirm}
        />
      )}
    </div>
  );
}
