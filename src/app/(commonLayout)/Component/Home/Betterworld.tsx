import { Button } from '@/components/ui/button';
import React from 'react';

const Betterworld = () => {
    return (
        <div className='mt-[120px] '  >

            <div className='w-full lg:h-[614px] py-10 lg:py-0 bg-blue-900 grid grid-cols-1  '>

                <div className="lg:w-[80%] w-full  relative top-[-50px] mx-auto lg:h-80  bg-[#dddddd] rounded-[10px] lg:p-10 p-5 lg:flex  justify-between items-center  " >
                    <div>
                        <h6 className=" text-[#27ae60] text-xl font-semibold  leading-relaxed">Act Now for a Better World</h6>
                        <h6 className=" text-[#292929] lg:text-[40px]  text-[34px] text-xl font-semibold leading-[40px]">Solutions to Help People in Need
                            <br />and Save the Planet</h6>
                            <div className="w-[120px] h-1 bg-mycustomcolors-secondary rounded-[10px] my-3" />
                    </div>
                    <Button className=' bg-mycustomcolors-secondary text-white w-[193px] h-[58px] '>Donate Now</Button>
                   
                </div>

                <div className='lg:w-[80%] mx-auto grid lg:grid-cols-4 grid-cols-2 gap-4 '>

                    <div className=" max-h-[104px]  ">
                        <div className=" text-center text-[#27ae60] lg:text-[54px] font-bold  text-3xl lg:leading-[60px]">20M</div>

                        <div className='w-[50px] h-[2px] bg-mycustomcolors-secondary mx-auto '> </div>
                        <div className=" text-center text-white lg:text-lg text-sm  font-semibold  leading-relaxed">Number of Supporters</div>
                    </div>
                    <div className=" max-h-[104px]  ">
                        <div className=" text-center text-[#27ae60] lg:text-[54px] font-bold  text-3xl lg:leading-[60px]">20M</div>

                        <div className='w-[50px] h-[2px] bg-mycustomcolors-secondary mx-auto '> </div>
                        <div className=" text-center text-white lg:text-lg text-sm  font-semibold  leading-relaxed">Number of Supporters</div>
                    </div>
                    <div className=" max-h-[104px]  ">
                        <div className=" text-center text-[#27ae60] lg:text-[54px] font-bold  text-3xl lg:leading-[60px]">20M</div>

                        <div className='w-[50px] h-[2px] bg-mycustomcolors-secondary mx-auto '> </div>
                        <div className=" text-center text-white lg:text-lg text-sm  font-semibold  leading-relaxed">Number of Supporters</div>
                    </div>
                    <div className=" max-h-[104px]  ">
                        <div className=" text-center text-[#27ae60] lg:text-[54px] font-bold  text-3xl lg:leading-[60px]">20M</div>

                        <div className='w-[50px] h-[2px] bg-mycustomcolors-secondary mx-auto '> </div>
                        <div className=" text-center text-white lg:text-lg text-sm  font-semibold  leading-relaxed">Number of Supporters</div>
                    </div>

                </div>

            </div>




        </div>
    );
};

export default Betterworld;