import { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ['latin'],       
    weight: ['400', '700'],     
    display: 'swap',            
  });
  export const metadata: Metadata = {
    title: "Home",
    description: " Donate to help the world",
  };


export default function Commonlayout({
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
      </body>
    </html>
  );
}
