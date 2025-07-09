'use client';

import { FaUserCircle, FaBars, FaTimes, FaCalendarPlus } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  onToggleSidebar?: () => void;
  sidebarOpen?: boolean;
}

export default function Navbar({ onToggleSidebar, sidebarOpen }: NavbarProps) {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 w-full flex items-center justify-between px-4 md:px-6 bg-white shadow-md border-b">
      <div className="flex items-center gap-3">
        {/* Toggle hamburger or X based on sidebar state */}
        <button className="md:hidden text-gray-700" onClick={onToggleSidebar}>
          {sidebarOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
        <div className="flex items-center gap-2 text-2xl font-semibold text-blue-700">
          <FaCalendarPlus className="text-blue-600" />
          MediSlot
        </div>
        
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => router.push('/appointments/book')}
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition text-sm"
        >
          + New Appointment
        </button>
        <div className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100 transition cursor-pointer">
          <FaUserCircle className="text-2xl text-gray-600" />
          <span className="text-sm text-gray-700 hidden sm:block">Profile</span>
        </div>
      </div>
    </header>
  );
}
