

import ReduxProvider from "@/lib/provider";
import "./globals.css";
import { Poppins } from 'next/font/google';
import { ToastProvider } from "@/components/ui/toast";



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
      className={` ${poppins.className}`}
      >
      
       <ReduxProvider>
   
        {children}
        <ToastProvider />
        
      </ReduxProvider>
     
        

      </body>
    </html>
  );
}
