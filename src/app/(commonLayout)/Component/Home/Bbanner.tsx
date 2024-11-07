import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";


const Bbanner = () => {
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  lg:pl-20   ">
            <div className=" h-[370px] bg-neutral-100 rounded-tl-[10px] rounded-bl-[10px]" />
            <div className=" h-[370px] bg-mycustomcolors-secondary lg:p-12 p-8 " >
                <h1 className="w-[435px] text-white text-3xl font-semibold font-['Poppins'] leading-[37px]  ">We Change Your Life<br />& World</h1>
                <hr className="w-[60px] h-[3px] origin-top-left  bg-mycustomcolors-primary rounded-[50px] my-4 " />
                <p className=" text-neutral-100 text-base font-normal font-['Poppins'] leading-snug lg:mb-10 mb-5 ">Penatibus et magnis dis parturient montes nascetur ridiculus. Quis risus sed vulputate odio ut enim blandit volutpat maecenas.</p>
                <Button className="lg:w-[193px] w-[150px] h-[58px] bg-[#27ae60] rounded-[5px]
                                hover:motion-scale-out-105
                                    hover:bg-[#27AE60]
                                    text-xl

                                
                                " >
                    Donate
                    <span>
                        <Heart size={20} className="text-white" />

                    </span>
                </Button>

            </div>
            <div className=" h-[370px] bg-[#27ae60] lg:p-12 p-8" >
                <h1 className="w-[435px] text-white text-3xl font-semibold font-['Poppins'] leading-[37px]  ">We Change Your Life<br />& World</h1>
                <hr className="w-[60px] h-[3px] origin-top-left  bg-mycustomcolors-primary rounded-[50px] my-4 " />
                <p className=" text-neutral-100 text-base font-normal font-['Poppins'] leading-snug llg:mb-10 mb-5 ">Penatibus et magnis dis parturient montes nascetur ridiculus. Quis risus sed vulputate odio ut enim blandit volutpat maecenas.</p>
                <Button className="lg:w-[193px] w-[150px] h-[58px] bg-mycustomcolors-secondary rounded-[5px]
                                hover:motion-scale-out-105
                                    hover:bg-[#27AE60]
                                    text-xl

                                
                                " >
                    Donate
                    <span>
                        <Heart size={20} className="text-white" />

                    </span>
                </Button>

            </div>

        </div>
    );
};

export default Bbanner;