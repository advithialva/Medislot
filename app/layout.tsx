import './globals.css';
import 'react-datepicker/dist/react-datepicker.css';
import ClientLayout from './components/ClientLayout';

export const metadata = {
  title: 'MediSlot',
  description: 'Doctor Appointment Booking System',
  icons: {
    icon: "/icon.png",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
