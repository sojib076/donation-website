
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import { GiHelp } from "react-icons/gi";
const Whatwedo = () => {
    const demoData = [
        {
          id: 1,
          title: "Home Shelter",
          description: "Quisque egestas arcu",
          icon: <GiHelp className="text-mycustomcolors-secondary text-4xl" />,
        },
        {
          id: 2,
          title: "Community ",
          description: "Vestibulum ante ipsum",
          icon: <GiHelp className="text-mycustomcolors-secondary text-4xl" />,
        },
        {
            id: 3,
            title: "Education",
            description: "Sed fauc ibus",
            icon: <GiHelp className="text-mycustomcolors-secondary text-4xl" />,
        },
        {   
            id: 4,
            title: "Health Care",
            description: "Vestibulum ante ipsum",
            icon: <GiHelp className="text-mycustomcolors-secondary text-4xl" />,

        }
        
      ];
      
    return (
        <div className="mt-[120px] lg:pr-10 p-2 ">

            <div className="w-full  grid lg:grid-cols-2 grid-cols-1 gap-20 items-center  ">

                <div className="relative lg:top-0 top-14">
                    <div className="w-[170px] h-[170px] relative z-30">
                        <div className="w-[100px] h-[100px] lg:w-[170px] lg:h-[170px] left-28 lg:top-[-80px] top-[-170px]  absolute bg-[#d9d9d9] rounded-[300px]" />

                    </div>

                    <div className="lg:w-[400px] w-[300px] lg:h-[400px] h-[300px] bg-[#d9d9d9] lg:rounded-[300px] rounded-[200px] absolute lg:right-20 top-[-80px] z-20 " />

                    <div className="w-[120px] h-[120px] right-[5%] lg:right-[-6%] top-[90%]  absolute bg-[#d9d9d9] rounded-[300px]" />


                    <Image src="/Element.png" alt="s" width={300} height={25} className="mx-auto absolute lg:left-20 left-0 lg:w-[300px] w-52  top-[60%]  lg:top-[40%] " />


                </div>

                <div className="lg:w-[70%] lg:h-[500px] rounded-[10px] lg:p-12 lg:mt-0 p-5  mt-36 " style={{ boxShadow: "0 0 15px rgba(100, 100, 100, 0.3)" }}>
                    <h1 className=" text-[#27ae60] text-sm font-semibold  leading-relaxed">
                        What We Do
                    </h1>
                    <div className=" text-[#292929] text-[30px] font-semibold font-['Poppins'] leading-[46px]">Small Donations Make Big Impact on Someone’s Life, Act Today!</div>
                    <div className="w-[70px] h-1 bg-mycustomcolors-secondary rounded-[10px] my-3" />
                    <p className=" text-[#555555] text-sm font-normal font-['Poppins'] leading-snug">Cras sed felis eget velit aliquet sagittis id consectetur purus. Volutpat commodo sed egestas egestas.</p>

                    <div className=" grid grid-cols-2 gap-2 gap-y-5 mt-10"> 
                       {
                            demoData.map((item) => (
                                 <div key={item.id} className="flex items-center gap-2">
                                      <div className=" bg-[#d9d9d9] rounded-[300px] flex items-center justify-center">
                                        {item.icon}
                                      </div>
                                      <div className="">
                                        <h1 className=" text-[#292929] text-xs lg:text-sm font-semibold  leading-relaxed">{item.title}</h1>
                                        <p className=" text-[#555555] text-xs font-normal font-['Poppins'] leading-snug">{item.description}</p>
                                      </div>
                                 </div>
                            ))
                       }
                      
                    
                    </div>
                    <Button className="lg:w-[170px]  w-full h-[50px] my-5 bg-mycustomcolors-secondary rounded-[5px]
                                hover:motion-scale-out-105
                                    hover:bg-[#27AE60]

                                
                                " >
                                  Donate  <span>
                                        <Heart size={20} className="text-white" />

                                    </span>
                                </Button>
                </div>




            </div>

        </div>
    );
};

export default Whatwedo;