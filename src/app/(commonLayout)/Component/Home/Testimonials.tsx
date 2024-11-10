import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

const Testimonials = () => {
    return (
        <div className="lg:my-[120px] my-20 ">
             <h6 className=" text-center text-[#27ae60] lg:text-xl  text-lg font-semibold    ">Testimonials</h6>
            <h1 className=" text-center text-[#292929] lg:text-[40px] text-xl font-semibold lg:leading-[46px]">What People Say about  <br />  Our Organization</h1>
                <div className="w-[60px] h-[3px] lg:my-8 mt-5 mx-auto bg-[#ec8e11] rounded-[50px]" />
            <div className="lg:w-[80%] mx-auto  lg:px-0 px-2 ">
                <Carousel


                >
                    <CarouselContent>
                        {

                            Array.from({ length: 6 }).map((_, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 lg:p-5 py-5 ">


                                    <div className="lg:max-w-[410px] h-[257px] bg-white/80 rounded-[10px]  p-10"
                                    style={{ boxShadow: "0 0 15px rgba(100, 100, 100, 0.3)" }}
                                    >
                                        <div className="h-[168px] flex-col justify-center items-start gap-[30px] inline-flex">
                                            <p className="lg:max-w-[350px]  text-[#555555] text-base font-normal font-['Poppins'] leading-snug">Tempor orci dapibus ultrices in. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Nisl condimentum id venenatis a condimentum.</p>

                                            <div className="lg:max-w-[350px] h-[50px] flex items-center gap-5 ">
                                                <div>
                                                    <Image 
                                                     src="/"
                                                        width={50}
                                                        height={50}
                                                     alt="quote" className="h-[50px] w-[50px]" />
                                                </div>
                                                <div>
                                                    <h6 className="  text-[#292929] text-base font-medium font-['Poppins'] leading-snug">Valerie Patterson</h6>
                                                    <p className=" text-[#555555] text-base 
                                                font-normal  ">Founder, XYZ Company</p>
                                                </div>


                                            </div>
                                        </div>
                                    </div>


                                </CarouselItem>
                            ))}
                    </CarouselContent>

                    <div className="relative  justify-between lg:hidden mt-5">
                        <CarouselPrevious className="absolute lg:static left-[100px] lg:left-auto" />
                        <CarouselNext className="absolute lg:static right-[100px] lg:right-auto" />
                    </div>
                    <CarouselPrevious className="lg:flex hidden" />
                    <CarouselNext className="lg:flex hidden" />


                </Carousel>
            </div>
        </div>
    );
};

export default Testimonials;