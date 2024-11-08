
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Play } from "lucide-react";
const Causes = () => {
    return (
        <div className="mt-[120px]">
            <h6 className=" text-center text-[#27ae60] lg:text-xl  text-lg font-semibold    ">Causes</h6>
            <h1 className=" text-center text-[#292929] lg:text-[40px] text-xl font-semibold lg:leading-[46px]">You Can Help Lots of People by
                <br />  Donating Little</h1>



            <div className="lg:w-[80%] mx-auto my-10 ">
                <Carousel


                >
                    <CarouselContent>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 lg:p-5">
                                <div className="lg:max-w-[400px]  bg-white rounded-lg shadow-lg overflow-hidden">

                                    <div className="relative h-[250px] bg-gray-300">

                                        <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            Environment
                                        </div>
                                    </div>


                                    <div className="p-6">
                                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                            Plant Tree, Save Earth & Lives Secure the Future
                                        </h2>
                                        <p className="text-sm text-gray-600 mb-6">
                                            Massa sed elementum tempus egestas sed sed risus pretium quam. Bibendum neque egestas congue quisque egestas diam.
                                        </p>

                                        {/* Progress Info */}
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-medium text-gray-800">$7,250 Raised</span>
                                            <span className="text-sm font-medium text-gray-800">35%</span>
                                            <span className="text-sm font-medium text-gray-800">$20,000 Goal</span>

                                        </div>

                                        {/* Progress Bar */}
                                        <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
                                            <div className="h-full bg-green-500" style={{ width: '35%' }} />

                                        </div>

                                        {/* Donate Button */}
                                        <button className="w-full py-3 bg-orange-500 text-white font-semibold  rounded-md hover:bg-orange-600 transition duration-200">
                                            Donate Now
                                        </button>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
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