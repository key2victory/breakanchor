import 'src/styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Break Anchor Design',
  description: "A porfolio site to showcase Janna Curtis' work in design",
  applicationName: 'Break Anchor',
  authors: {
    name: 'Tyler Simoni',
    url: 'https://tylersimoni.com',
  },
  keywords: [
    'janna curtis',
    'design',
    'research',
    'portfolio',
    'next13',
    'tailwindcss',
    'framer-motion',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="app-body" className={`relative min-h-screen min-w-[100vw] ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
