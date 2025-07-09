'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCalendarAlt, FaUserMd } from 'react-icons/fa';

const Sidebar = () => {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `flex items-center gap-2 p-2 rounded transition ${
      pathname === path
        ? 'bg-blue-600 text-white'
        : 'text-gray-700 hover:bg-blue-600 hover:text-white'
    }`;

  return (
    <aside className="w-64 h-screen bg-white shadow-md p-4 flex flex-col">
      <div className="text-xl font-bold text-blue-700 mb-6">Dashboard</div>

      <div className="text-gray-500 uppercase text-xs font-semibold mb-2">Appointments</div>
      <nav className="space-y-2">
        <Link href="/appointments/schedule" className={linkClasses('/appointments/schedule')}>
          <FaUserMd />
          Doctor Schedule
        </Link>
        <Link href="/appointments/book" className={linkClasses('/appointments/book')}>
          <FaCalendarAlt />
          Book Appointment
        </Link>
        <Link href="/appointments/all" className={linkClasses('/appointments/all')}>
          <FaCalendarAlt />
          All Appointments
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
