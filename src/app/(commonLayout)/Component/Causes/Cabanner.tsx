import Card from "../../CommonDesing/Card";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const Cabanner = () => {
    return (
        <div>
            <div className=" lg:h-[400px] h-32 opacity-60 bg-[#292929] lg:p-28 p-5" >
                <div className=" text-white text-center lg:text-[40px] ml-[-100px] text-2xl font-semibold lg:leading-[46px]">Causes</div>
            </div>


            <div className="mt-[120px]">

                <div className=" grid gap-10 lg:grid-cols-3 grid-cols-1 lg:px-28 px-5">
                    {
                        [1, 2, 3, 4, 5, 6].map((index) => (
                            Card(index)
                        ))



                    }

                </div>

                <Pagination className="mt-12">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className="bg-gray-200 rounded-full" href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className="bg-gray-200 rounded-full" href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>

            </div>


        </div>
    );
};

export default Cabanner;