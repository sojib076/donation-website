import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { BiCircleQuarter } from 'react-icons/bi';

const Team = () => {
    return (
        <div>
            <div className="my-[120px]  ">

                <div className="w-fll  grid lg:grid-cols-2 grid-cols-1 gap-10 items-center lg:w-[80%] mx-auto  ">
                    <div className=" lg:h-[500px] rounded-[10px] lg:p-8 lg:mt-0 p-5   " >
                        <h1 className=" text-[#27ae60] text-sm font-semibold  leading-relaxed">
                            Team
                        </h1>
                        <div className=" text-[#292929] lg:text-[30px] text-2xl font-semibold lg:leading-[46px]">Small Donations Make Big Impact on Someone’s Life, Act Today!</div>
                        <div className="w-[70px] h-1 bg-mycustomcolors-secondary rounded-[10px] my-3" />
                        <p className=" text-[#555555] text-sm font-normal leading-snug">Cras sed felis eget velit aliquet sagittis id consectetur purus. Volutpat commodo sed egestas egestas.</p>

                        <div className=" my-4 h-[106px] bg-neutral-100 rounded-[10px] items-center justify-center  flex" >
                            <span className='text-5xl mt-[-40px] text-mycustomcolors-secondary '>
                                ❝
                            </span>
                            <p className=" items-center  text-mycustomcolors-text text-sm font-medium  leading-snug">Nisl tincidunt eget nullam non nisi est sit amet. Leo vel orci porta non pulvinar neque laoreet. Ante metus dictum at tempor commodo ullamcorper.</p>
                        </div>

                        <Button className="w-[193px]  h-[58px] bg-mycustomcolors-secondary mt-5 rounded-[5px]
                                hover:motion-scale-out-105
                                    hover:bg-mycustomcolors-secondary
                                    text-xl

                                
                                " >
                            Donate
                            <span>
                                <Heart size={20} className="text-white" />

                            </span>
                        </Button>

                    </div>

                    <div className=" relative left-10 top-10 overflow-hidden  ">
                        <Image src="/Element.png" alt="s" width={300} height={25} className="mx-auto absolute lg:left-20 left-[-5%] lg:w-[350px]
                     w-52  lg:right-[-200px] lg:top-[-50px] top-[-20%]  " />

                        <div className="lg:w-[500px] w-[300px] lg:h-[500px] h-[300px] bg-[#d9d9d9] lg:rounded-full rounded-[200px] relative z-20  " />

                    <div className=" relative lg:left-[20%]  top-[-40px] z-50 left-[7%]  ">



                            <div className="w-[250px] lg:h-[70px]  h-[70px]     bg-white rounded-full shadow " >

                                <div className='relative lg:left-10 left-[14%] lg:top- top-3  '>
                                    <div className="w-[50px] h-[50px] left-5 absolute bg-[#d9d9d9] rounded-full border-2 border-white" />
                                    <div className="w-[50px] h-[50px] left-12  absolute bg-[#d9d9d9] rounded-full border-2 border-white" />
                                    <div className="w-[50px] h-[50px] left-20  absolute bg-[#d9d9d9] rounded-full border-2 border-white" />
                                    <div className="w-[50px] h-[50px] left-28  absolute bg-[#d9d9d9] rounded-full border-2 border-white" />
                                    <div className="w-[50px] h-[50px] left-28  absolute bg-[#d9d9d9] rounded-full border-2 border-white flex items-center justify-center text-center " >
                                        100+
                                    </div>

                                </div>

                            </div>
                        </div>



                    </div>

                </div>

            </div>
        </div>
    );
};

export default Team;