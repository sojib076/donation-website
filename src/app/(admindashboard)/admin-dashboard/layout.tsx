
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/Sidenavbar";

import { Metadata } from "next";
import { Poppins } from "next/font/google";
import DashboardHeader from "../components/DashboardHeader";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});
export const metadata: Metadata = {
  title: "Home",
  description: " Donate to help the world",
};


export default function AdminDashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex ">



      <SidebarProvider
        className="flex"
      >
        <AppSidebar />
        <main
          className="flex flex-col flex-1 w-full min-h-screen ">
          <div >
            <div className="grid grid-cols-3 border-b items-center pl-1 px-5">
              <SidebarTrigger className="bg-gray-100 text-gray-800 p-2 w-full col-span-1 max-w-8 "/>
              <div className="col-span-2">

                <DashboardHeader />
              </div>
            </div>


            <div className="bg-gray-100 min-h-[100vh]">
              {children}
            </div>

          </div>

        </main>

      </SidebarProvider>
    </div>

  );
}
