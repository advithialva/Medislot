export interface Slot {
  doctorId: string;
  doctorName: string;
  department: string;
  date: string;
  time: string;
  endTime?: string; // new
  service?: string;
  patientName?: string;
  email?: string;
  phone?: string;
  status?: 'Approved' | 'Pending';
}
