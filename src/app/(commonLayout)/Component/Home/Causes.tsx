"use client";


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Play } from "lucide-react";
import Card, { Donation } from "../../CommonDesing/Card";
import { useState } from "react";
import { useGetDonations } from "@/hooks/Donation.hook";
import Cardloading from "../Cardloading";

const Causes = () => {
    const [page, setPage] = useState(1)

    const { data, isLoading, isError, refetch } = useGetDonations(page, 3);

    const datas = data?.data?.donations
    return (
        <div className="mt-[120px]">
            <h6 className=" text-center text-[#27ae60] lg:text-xl  text-lg font-semibold    ">Causes</h6>
            <h1 className=" text-center text-[#292929] lg:text-[40px] text-xl font-semibold lg:leading-[46px]">You Can Help Lots of People by
                <br />  Donating Little</h1>

            <div className="lg:w-[80%] mx-auto my-10 lg:px-0 px-2 ">
                <Carousel


                >




                    <CarouselContent>

                        {
                            isLoading ? (
                                
                                Array.from({ length: 3 }).map((_, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 lg:p-5">
                                   <Cardloading key={index} />
                                    </CarouselItem>

                                )))
                                   
                             :


                                datas?.map((donation: Donation) => (
                                    <CarouselItem key={donation._id} className="md:basis-1/2 lg:basis-1/3 lg:p-5">
                                        <Card data={donation} />
                                    </CarouselItem>
                                ))
                        }





                    </CarouselContent>


                    <div className="relative  justify-between lg:hidden">
                        <CarouselPrevious className="absolute lg:static left-[100px] lg:left-auto" />
                        <CarouselNext className="absolute lg:static right-[100px] lg:right-auto" />
                    </div>
                    <CarouselPrevious className="lg:flex hidden" />
                    <CarouselNext className="lg:flex hidden" />


                </Carousel>
            </div>

            <div
                className="relative bg-cover bg-center  mt-[120px]" style={{
                    backgroundImage: `url('')`,
                }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>

                <div className="relative z-10 text-center text-white px-4 md:px-8 grid lg:grid-cols-1 items-center lg:py-32 py-10  ">

                    <div>
                        <h6 className=" mx-auto text-center text-[#27ae60] text-sm font-semibold leading-relaxed">Watch Our Video</h6>
                        <h3 className="lg:max-w-[700px] mx-auto text-center text-white lg:text-[40px] text-xl font-semibold
                         font-['Poppins'] lg:leading-[46px]">The Measure of a Life is not its Duration, but its Donation</h3>

                        <div className="flex justify-center mt-8">
                            <button className="relative w-16 h-16 rounded-full bg-mycustomcolors-primary text-white flex items-center justify-center shadow-lg hover:bg-mycustomcolors-secondary transition-all duration-300 ease-in-out transform hover:scale-105">
                                <Play size={32} className="text-white" />
                                <span className="absolute w-full h-full rounded-full bg-mycustomcolors-primary opacity-90 animate-ping"></span>
                            </button>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Causes;