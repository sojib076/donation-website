
import React, { FC } from "react";
import Form from "../../Component/Causes/Form";
import { Donation } from "../../CommonDesing/Card";
import Image from "next/image";

async function fetchCauseData(causeId: string) {
    try {
        const response = await fetch(`https://vivo-donation.vercel.app/api/v1/admin/get-donation/${causeId}`, {
            cache: "force-cache",
        });

        if (!response.ok) {

            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching cause data:", error);
        throw error;
    }
}



const CauseId = async ({ params }) => {
    const { causeId } = await params
    const data = await fetchCauseData(causeId)
    const donationData = data?.data as Donation

    return (
        <div>
            <div className=" lg:h-[400px] h-48 opacity-60 bg-[#292929] lg:p-28 p-5" >
                <div className=" text-white  lg:text-left lg:mt-0 mt-10 text-center lg:text-[40px]  text-2xl font-semibold lg:leading-[46px]">
                    {
                        donationData.title
                    }</div>
            </div>

            <div className="lg:mt-[120px] mt-16 p-5">

                <div className="relative">
                    <div className="absolute top-4 right-[13%] bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Environment
                    </div>

                    <div className="lg:w-[80%] w-[100%]  lg:h-[500px] h-[300px] bg-[#d9d9d9] mx-auto rounded-md" >
                        <Image
                            width={1080}
                            height={1080}
                            src={donationData.image} alt=""
                            className="w-full h-full rounded-md"
                        />
                    </div>
                    <div className="lg:w-[70%] relative top-[-80px]  bg-gray-50 rounded-[10px] shadow mx-auto lg:p-12 p-5" >
                        <h1 className="max-w-[810px] text-[#292929] text-[40px] font-semibold font-['Poppins'] leading-[46px]">Donate Now</h1>
                        <div className="lg:flex lg:gap-10 lg:items-center mt-5 ">

                            <div className="relative lg:w-[70%] h-2 bg-gray-200 rounded-full overflow-hidden  ">
                                <div style={{ width: `${donationData?.progress}%` }} className="h-2 bg-green-500"></div>

                            </div>
                            <div className="flex  gap-1 -center lg:mt-0 mt-2 ">
                                <span className="text-sm  font-bold text-green-800">

                                    ${donationData.current} Raised
                                </span>

                                <span className="text-sm font-medium text-gray-800">of </span>

                                <span className="text-sm font-medium text-yellow-500 *:font-semibold
                                
                                ">
                                    ${donationData.target} Target
                                </span>
                            </div>
                        </div>

                        <Form data={data} />
                    </div>
                    <div className=" max-w-[980px]  mx-auto space-y-4  my-4">
                        <div className="  text-[#292929] text-3xl font-semibold font-['Poppins'] leading-[37px]">Challenge</div>

                     
                        <div
                            className="text-justify  text-base font-normal font-['Poppins'] leading-relaxed 
            break-words lg:px-4 md:px-8 py-2 max-w-full"
                            dangerouslySetInnerHTML={{ __html: donationData.description }}
                        ></div>


                    </div>
                    <div className="lg:w-[70%] lg:max-w-[1000px] 

                    lg:h-[300px] bg-[#d9d9d9] rounded-[10px] mx-auto" >
                        <Image
                            width={1080}
                            height={1080}
                            src={donationData.image} alt=""
                            className="w-full h-full rounded-md"
                        />
                    </div>



                </div>







            </div>
        </div>
    );
};

export default CauseId;