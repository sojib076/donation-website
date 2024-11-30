// app/causes/page.js
'use client'
import { useState } from "react";

import { useGetDonations } from "@/hooks/Donation.hook";
import { Button } from "@/components/ui/button";
import Card from "../CommonDesing/Card";
import Cardloading from "../Component/Cardloading";


const Causes = () => {
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const { data, isLoading, isError, refetch } = useGetDonations(page, limit);


    const datas = data?.data?.donations

    const currentPage = data?.data?.currentPage;
    const handlenextPage = () => {
        setPage(page + 1)
        refetch()
    }
    const handlePreviousPage = () => {
        setPage(page - 1)
        refetch()
    }

    return (
        <div>
            <div>
                <div className=" lg:h-[400px] h-32 opacity-60 bg-[#292929] lg:p-28 p-5" >
                    <div className=" text-white text-center lg:text-[40px] ml-[-100px] text-2xl font-semibold lg:leading-[46px]">Causes</div>
                </div>


                <div className="mt-[120px]">

                    {
                        isLoading && <div className="grid lg:grid-cols-3 gap-5 lg:px-28 px-5">
                            {/* fale array  */}
                            {
                                Array.from({ length: 9 }).map((_, index) => (
                                    <Cardloading key={index} />

                                ))
                            }
                        </div>
                    }
                    <div className=" grid gap-10 lg:grid-cols-3 grid-cols-1 lg:px-28 px-5 min-h-[60vh]">






                        {
                            datas?.map((Donation: any) => (
                                <Card key={Donation._id} data={Donation}></Card>
                            ))
                        }

                    </div>



                </div>


            </div>



            <div className="mt-4 flex justify-center">
                <Button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}

                    className="mr-2"
                >
                    Previous
                </Button>
                <span className="mx-4 self-center">
                    Page {data?.data?.currentPage} of {data?.data?.totalPages}
                </span>
                <Button
                    onClick={handlenextPage}
                    disabled={currentPage === data?.data?.totalPages}
                    className="ml-2"
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default Causes;
