import { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "./Component/HeadFooter/Footer";
import Header from "./Component/HeadFooter/Header";
import { Toaster } from "@/components/ui/toaster";

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
  
      <div className={` ${poppins.className}`}>
        <Header />
        <div className="min-h-screen">
          {children}
          <Toaster />
        </div>
        <Footer />
      </div>
  
  );
}
