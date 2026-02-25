import './globals.css';
import { DM_Sans, Syne } from 'next/font/google';

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
});

const syne = Syne({ 
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-syne',
});

export const metadata = {
  title: 'ReLoop — Waste Exchange Platform',
  description: 'Connecting waste generators with recycling buyers. Turn your waste into impact.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
