export type AppointmentStatus = 'Pending' | 'Approved';

export interface IAppointment {
  id: number;
  service: string;
  date: string;
  department: string;
  doctor: string;
  patient: string;
  timeslot: string;
  status: AppointmentStatus;
  createdOn: string;

}
