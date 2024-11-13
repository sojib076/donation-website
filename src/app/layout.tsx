
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Poppins } from 'next/font/google';


const poppins = Poppins({
  subsets: ['latin'],       
  weight: ['400', '700'],     
  display: 'swap',            
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`antialiased ${poppins.className}`}
       
      >
        {children}
        <Toaster />

      </body>
    </html>
  );
}
