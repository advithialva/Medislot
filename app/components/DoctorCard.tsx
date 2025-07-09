import { IDoctor } from '../types/doctor';
import Image from 'next/image';
import { FaTimesCircle } from 'react-icons/fa';

export default function DoctorCard({ doctor }: { doctor: IDoctor }) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="bg-white rounded-xl shadow-md p-5 w-full max-w-sm mx-auto">
      <div className="flex items-center gap-4">
        <Image
          src={doctor.avatar}
          alt={doctor.name}
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
        <div>
          <h3 className="text-base font-semibold text-gray-900">{doctor.name}</h3>
          <p className="text-sm text-gray-600">{doctor.phone}</p>
          <p className="text-sm font-semibold text-red-500">{doctor.department}</p>
        </div>
      </div>

      {/* Weekly Schedule */}
      <div className="grid grid-cols-7 gap-2 text-xs text-center mt-4">
        {days.map((day) => (
          <div key={day}>
            <div className="text-gray-500">{day}</div>
            {doctor.weeklySchedule[day] ? (
              <div className="w-3 h-3 mx-auto mt-1 rounded-full bg-green-500" />
            ) : (
              <FaTimesCircle className="text-red-400 text-[12px] mx-auto mt-1" />
            )}
          </div>
        ))}
      </div>

      {/* Today + Hours */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <div>
          <p>
            Today:{' '}
            <span
              className={`px-2 py-0.5 rounded-full text-white text-xs font-semibold ${
                doctor.todayOnDuty ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              {doctor.todayOnDuty ? 'On Duty' : 'Off Duty'}
            </span>
          </p>
          <p className="text-gray-500">{doctor.dutyHours}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600">Bookings:</p>
          <p className="font-semibold text-gray-800">{doctor.bookings}</p>
        </div>
      </div>
    </div>
  );
}
