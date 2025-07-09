export interface IDoctor {
  id: string;
  name: string;
  phone: string;
  department: string;
  avatar: string;
  weeklySchedule: Record<string, boolean>;
  dutyHours: string;
  todayOnDuty: boolean;
  bookings: number;
}