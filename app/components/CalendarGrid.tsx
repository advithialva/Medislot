'use client';

import { IDoctor } from '../types/doctor';
import { IAppointment } from '../types/appointment';
import { convertToMinutes } from '../utils/timeUtils';

interface CalendarGridProps {
  doctors: IDoctor[];
  appointments: IAppointment[];
  selectedDoctorId: string;
  currentDate: Date;
  onSlotClick: (doctor: IDoctor, date: string, time: string) => void;
}

const timeSlots = Array.from({ length: 24 }, (_, i) => {
  const hour = 8 + Math.floor(i / 2);
  const minute = i % 2 === 0 ? '00' : '30';
  const suffix = hour >= 12 ? 'pm' : 'am';
  const hour12 = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  return `${hour12}:${minute}${suffix}`;
});

export default function CalendarGrid({
  doctors,
  appointments = [],
  selectedDoctorId,
  currentDate,
  onSlotClick,
}: CalendarGridProps) {
  if (!currentDate) return null;

  const selectedDay = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
  const formattedDate = currentDate.toISOString().split('T')[0];

  return (
    <div className="flex-1 overflow-hidden border rounded shadow bg-gray-50">
      <div className="w-full overflow-x-auto">
        <div className="w-max min-w-fit max-h-[600px] overflow-y-auto">
          {/* Header */}
          <div className="flex sticky top-0 z-10 bg-white">
            <div className="w-[80px] border-r bg-gray-100 text-center font-semibold p-2 text-xs">
              Time
            </div>
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className={`min-w-[130px] border-r p-2 text-center font-semibold text-[13px] whitespace-nowrap
                  ${doc.id === selectedDoctorId ? 'bg-blue-200 text-blue-900' : 'bg-gray-100 text-gray-800'}`}
              >
                {doc.name}
              </div>
            ))}
          </div>

          {/* Body */}
          <div className="flex">
            {/* Time Column */}
            <div className="w-[80px] border-r bg-white">
              {timeSlots.map((slot) => (
                <div
                  key={slot}
                  className="h-12 border-b text-[11px] text-gray-700 flex items-center justify-center"
                >
                  {slot}
                </div>
              ))}
            </div>

            {/* Doctor Columns */}
            <div className="flex">
              {doctors.map((doc) => {
                const [start, end] = doc.dutyHours.split(' - ');
                const startMin = convertToMinutes(start);
                const endMin = convertToMinutes(end);
                const isAvailableToday =
                  doc.weeklySchedule[selectedDay as keyof typeof doc.weeklySchedule];

                return (
                  <div key={doc.id} className="min-w-[130px] border-r">
                    {timeSlots.map((slot) => {
                      const slotMin = convertToMinutes(slot);
                      const isWithinDuty = slotMin >= startMin && slotMin < endMin;

                      const appointment = appointments.find(
                        (a) =>
                          a.doctor === doc.name &&
                          a.date === formattedDate &&
                          a.timeslot.toLowerCase().replace(/\s/g, '') === slot.toLowerCase().replace(/\s/g, '') &&
                          a.status === 'Approved'
                      );

                      if (!isAvailableToday || !isWithinDuty) {
                        return <div key={slot} className="h-12 border-b bg-white" />;
                      }

                      return (
                        <div
                          key={slot}
                          className={`h-12 border-b text-[10px] px-1 text-center cursor-pointer flex flex-col items-center justify-center
                            ${appointment ? 'bg-yellow-100 text-yellow-800 cursor-not-allowed' : 'bg-green-100 hover:bg-green-200'}`}
                          onClick={() => {
                            if (!appointment) {
                              onSlotClick(doc, formattedDate, slot);
                            }
                          }}
                        >
                          {appointment ? (
                            <>
                              <div className="font-medium truncate w-full text-[11px]">{appointment.patient}</div>
                              <div className="italic text-[10px] truncate w-full">{appointment.service}</div>
                              <div className="text-[9px] text-green-700 font-semibold">
                                {appointment.timeslot}
                              </div>
                            </>
                          ) : (
                            slot
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}