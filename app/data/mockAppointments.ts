import { IAppointment } from '../types/appointment';

const appointments: IAppointment[] = [
    {
    id: 1,
    service: 'Skin Allergy Test',
    date: '2025-07-08',
    timeslot: '9:00am',
    department: 'Dermatology',
    doctor: 'Sarah Lee',
    patient: 'Diya Nair',
    status: 'Approved',
    createdOn: '2025-07-08'
  },
  {
    id: 2,
    service: 'Cardio Checkup',
    date: '2025-07-10',
    timeslot: '8:00am',
    department: 'Cardiology',
    doctor: 'John Mayers',
    patient: 'Arjun Rao',
    status: 'Pending',
    createdOn: '2025-07-08'
  },
  {
    id: 3,
    service: 'Child Growth Review',
    date: '2025-07-10',
    timeslot: '10:00am',
    department: 'Pediatrics',
    doctor: 'David Kumar',
    patient: 'Kabir Das',
    status: 'Approved',
    createdOn: '2025-07-08'
  },
  {
    id: 4,
    service: 'Women\'s Health Consultation',
    date: '2025-07-10',
    timeslot: '11:00am',
    department: 'Gynecology',
    doctor: 'Priya Sharma',
    patient: 'Anjali Rao',
    status: 'Pending',
    createdOn: '2025-07-08'
  },
  {
    id: 5,
    service: 'Joint Pain Consultation',
    date: '2025-07-10',
    timeslot: '12:00pm',
    department: 'Orthopedic',
    doctor: 'Alex Mathews',
    patient: 'Nikhil Shetty',
    status: 'Approved',
    createdOn: '2025-07-08'
  },
  {
    id: 6,
    service: 'Migraine Evaluation',
    date: '2025-07-10',
    timeslot: '1:00pm',
    department: 'Neurology',
    doctor: 'Meera Iyer',
    patient: 'Sneha Patil',
    status: 'Pending',
    createdOn: '2025-07-08'
  },
  {
    id: 7,
    service: 'ENT Checkup',
    date: '2025-07-10',
    timeslot: '2:00pm',
    department: 'ENT',
    doctor: 'Arjun Reddy',
    patient: 'Rahul Jain',
    status: 'Approved',
    createdOn: '2025-07-08'
  },
  {
    id: 8,
    service: 'Foot Injury Review',
    date: '2025-07-10',
    timeslot: '11:00am',
    department: 'Orthopedic',
    doctor: 'Dr. Alex Mathews',
    patient: 'Ayaan Ghosh',
    status: 'Approved',
    createdOn: '2025-07-08'
  },
  {
    id: 9,
    service: 'General Pediatrics Checkup',
    date: '2025-07-11',
    timeslot: '10:00am',
    department: 'Pediatrics',
    doctor: 'Dr. David Kumar',
    patient: 'Kabir Jain',
    status: 'Approved',
    createdOn: '2025-07-09'
  },
  {
    id: 10,
    service: 'Gynecology Review',
    date: '2025-07-11',
    timeslot: '11:00am',
    department: 'Gynecology',
    doctor: 'Dr. Priya Sharma',
    patient: 'Sneha Rao',
    status: 'Pending',
    createdOn: '2025-07-09'
  },
  {
    id: 11,
    service: 'Ortho Check',
    date: '2025-07-11',
    timeslot: '11:30am',
    department: 'Orthopedic',
    doctor: 'Dr. Alex Mathews',
    patient: 'Vikas Shetty',
    status: 'Approved',
    createdOn: '2025-07-09'
  },
  {
    id: 12,
    service: 'Gynecology Advice',
    date: '2025-07-10',
    timeslot: '12:00pm',
    department: 'Gynecology',
    doctor: 'Dr. Priya Sharma',
    patient: 'Komal Rathi',
    status: 'Approved',
    createdOn: '2025-07-09'
  },
  {
    id: 13,
    service: 'Back Pain Therapy',
    date: '2025-07-11',
    timeslot: '12:30pm',
    department: 'Orthopedic',
    doctor: 'Dr. Alex Mathews',
    patient: 'Aman Das',
    status: 'Pending',
    createdOn: '2025-07-09'
  },
  {
    id: 14,
    service: 'Seizure Follow-Up',
    date: '2025-07-11',
    timeslot: '01:00pm',
    department: 'Neurology',
    doctor: 'Dr. Meera Iyer',
    patient: 'Rahul Sen',
    status: 'Pending',
    createdOn: '2025-07-09'
  },
  {
    id: 15,
    service: 'Ear Pain Diagnosis',
    date: '2025-07-10',
    timeslot: '01:00pm',
    department: 'ENT',
    doctor: 'Dr. Arjun Reddy',
    patient: 'Zoya Fernandes',
    status: 'Approved',
    createdOn: '2025-07-09'
  },
  {
    id: 16,
    service: 'Skin Rash Review',
    date: '2025-07-11',
    timeslot: '11:00am',
    department: 'Dermatology',
    doctor: 'Dr. Sarah Lee',
    patient: 'Tanya Mehta',
    status: 'Approved',
    createdOn: '2025-07-09'
  },
  {
    id: 17,
    service: 'Brain Scan',
    date: '2025-07-11',
    timeslot: '02:30pm',
    department: 'Neurology',
    doctor: 'Dr. Meera Iyer',
    patient: 'Om DSouza',
    status: 'Pending',
    createdOn: '2025-07-09'
  },
  {
    id: 18,
    service: 'ENT Follow-up',
    date: '2025-07-11',
    timeslot: '03:30pm',
    department: 'ENT',
    doctor: 'Dr. Arjun Reddy',
    patient: 'Harshita Iyer',
    status: 'Pending',
    createdOn: '2025-07-09'
  },
  {
    id: 19,
    service: 'Child Health Consult',
    date: '2025-07-11',
    timeslot: '04:00pm',
    department: 'Pediatrics',
    doctor: 'Dr. David Kumar',
    patient: 'Aryan Bhat',
    status: 'Pending',
    createdOn: '2025-07-09'
  },

  {
    id: 20,
    service: 'Heart Rate Monitoring',
    date: '2025-07-10',
    timeslot: '08:00am',
    department: 'Cardiology',
    doctor: 'Dr. John Mayers',
    patient: 'Neeraj Kulkarni',
    status: 'Approved',
    createdOn: '2025-07-10'
  },
  {
    id: 21,
    service: 'Heart Check',
    date: '2025-07-10',
    timeslot: '09:00am',
    department: 'Cardiology',
    doctor: 'Dr. John Mayers',
    patient: 'Rajiv Nambiar',
    status: 'Approved',
    createdOn: '2025-07-10'
  },
  {
    id: 22,
    service: 'Child Cold Review',
    date: '2025-07-11',
    timeslot: '10:00am',
    department: 'Pediatrics',
    doctor: 'Dr. David Kumar',
    patient: 'Advait Pillai',
    status: 'Pending',
    createdOn: '2025-07-10'
  },
  {
    id: 23,
    service: 'Fracture Checkup',
    date: '2025-07-12',
    timeslot: '11:00am',
    department: 'Orthopedic',
    doctor: 'Dr. Alex Mathews',
    patient: 'Preeti Shekhar',
    status: 'Approved',
    createdOn: '2025-07-10'
  },
  {
    id: 24,
    service: 'Bone Strength Evaluation',
    date: '2025-07-12',
    timeslot: '12:00pm',
    department: 'Orthopedic',
    doctor: 'Dr. Alex Mathews',
    patient: 'Lavanya Joshi',
    status: 'Pending',
    createdOn: '2025-07-10'
  },
  {
    id: 25,
    service: 'Migraine Review',
    date: '2025-07-11',
    timeslot: '01:00pm',
    department: 'Neurology',
    doctor: 'Dr. Meera Iyer',
    patient: 'Sanya Reddy',
    status: 'Pending',
    createdOn: '2025-07-10'
  },
  {
    id: 26,
    service: 'Neuro Pain Check',
    date: '2025-07-11',
    timeslot: '01:30pm',
    department: 'Neurology',
    doctor: 'Dr. Meera Iyer',
    patient: 'Ishaan Rao',
    status: 'Pending',
    createdOn: '2025-07-10'
  },
  {
    id: 27,
    service: 'Routine Child Checkup',
    date: '2025-07-12',
    timeslot: '03:00pm',
    department: 'Pediatrics',
    doctor: 'Dr. David Kumar',
    patient: 'Tara Sharma',
    status: 'Pending',
    createdOn: '2025-07-10'
  },
  {
    id: 28,
    service: 'Post-Fracture Consultation',
    date: '2025-07-11',
    timeslot: '01:00pm',
    department: 'Orthopedic',
    doctor: 'Dr. Alex Mathews',
    patient: 'Devika Kamath',
    status: 'Approved',
    createdOn: '2025-07-10'
  },
  {
    id: 29,
    service: 'Child Nutrition Advice',
    date: '2025-07-11',
    timeslot: '12:00pm',
    department: 'Pediatrics',
    doctor: 'Dr. David Kumar',
    patient: 'Mohit Kamat',
    status: 'Approved',
    createdOn: '2025-07-10'
  },
  {
    id: 30,
    service: 'Heart ECG',
    date: '2025-07-12',
    timeslot: '08:30am',
    department: 'Cardiology',
    doctor: 'Dr. John Mayers',
    patient: 'Nidhi Salian',
    status: 'Pending',
    createdOn: '2025-07-10'
  }
];

export default appointments;
