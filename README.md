# 🏥 MediSlot – Appointment Booking System

A responsive and modern appointment booking system for healthcare, built using **Next.js**, **TypeScript**, and **Tailwind CSS**. 

This app allows patients to book time slots with doctors, view weekly schedules, and manage all appointments in a clean, calendar-based interface.

---

## 🚀 Features

- **Doctor Schedule Screen**  
- **Weekly Calendar View for Slot Booking**  
- **Book Appointment Pop-up Modal**  
- **All Appointments Table with Filters & Pagination**  - **Search & Filter Functionality**  
- **Reusable Components (DoctorCard, Modal, CalendarSlot)**  
- **Responsive UI (Mobile, Tablet, Desktop)**  
- **Mock Data Based (No backend needed)**

---

## 📸 UI Screens

| Doctor Schedule | Weekly Calendar Booking | All Appointments |
|-----------------|--------------------------|------------------|
| ✅ Grid-based duty view with status indicators | ✅ Time slot-based weekly calendar | ✅ Filterable appointment table |

---

### 🛠️ Tech Stack

| Layer              | Technology                                                                 | Description                                                  |
|--------------------|-----------------------------------------------------------------------------|--------------------------------------------------------------|
| 💻 Frontend        | [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/) | React framework with static typing for maintainability       |
| 🎨 Styling         | [Tailwind CSS](https://tailwindcss.com/)                                     | Utility-first CSS for responsive and clean UI design         |
| 🎯 Icons           | [React Icons](https://react-icons.github.io/react-icons/)                    | Icon library for stylish and consistent UI elements          |
| 🗃️ Data Handling   | Local `.ts` files with mock data (`mockDoctors.ts`, `mockAppointments.ts`)  | All data is stored in static TypeScript files (no backend)   |


-------
## Project Structure

This project follows the App Router architecture introduced in Next.js 13+, organized into clearly defined folders for scalability and maintainability.

```
appointment-booking/
├── app/                         # Main application folder (App Router)
│   ├── appointments/            # Appointment-related views
│   │   ├── all/                 # All appointments table
│   │   │   └── page.tsx
│   │   ├── book/                # Weekly calendar booking
│   │   │   └── page.tsx
│   │   └── schedule/            # Doctor schedule view
│   │       └── page.tsx
│   ├── components/              # Reusable UI components
│   │   ├── CalendarGrid.tsx
│   │   ├── DoctorCard.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Navbar.tsx
│   │   ├── PopupModal.tsx
│   │   ├── DoctorHeader.tsx
│   │   └── ClientLayout.tsx
│   ├── data/                    # Mock doctor and appointment data
│   │   ├── mockDoctors.ts
│   │   └── mockAppointments.ts
│   ├── types/                   # TypeScript interfaces and types
│   │   ├── doctor.ts
│   │   ├── appointment.ts
│   │   ├── slot.ts
│   │   └── booking.ts
│   ├── utils/                   # Utility functions
│   │   └── timeUtils.ts
│   ├── globals.css              # Global styles (Tailwind CSS)
│   ├── layout.tsx               # Root layout file
│   ├── page.tsx                 # Landing or home page
│   └── icon.png                
├── public/                      # Static assets
│   └── avatars/                 # Doctor profile images
│       ├── alex.png
│       ├── meera.png
│       ├── john.png
│       └── ...others
└── README.md                    # Project documentation

```

---
## ⚙️ Setup Instructions

Follow the steps below to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/advithialva/medislot.git
cd medislot
```

### 2. Install Dependencies

```bash
npm install
```
### 3. Run the Development Server

```
npm run dev
```

The application will be available at:
```
http://localhost:3000
```
---
## ▶️ How to Use the App

### 1. Doctor Schedule View
View a grid of all doctors with their duty hours and a status indicator showing who is on duty today.

### 2. Weekly Calendar View
Browse available appointment time slots across the week for all doctors. Click on any slot to initiate the booking process.

### 3. Book Appointment Modal
A pop-up form allows you to enter patient information (name, email, etc.). Once submitted, the patient name will appear in the selected time slot.

### 4. All Appointments Table
View a table listing all booked appointments. Use filters to search by date, doctor, department, patient name, or status. Pagination is also supported.



