// app/causes/page.js

import Cabanner from "../Component/Causes/Cabanner";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"


const Causes = async () => {
    // Fetch data on each request
    const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
        cache: 'force-cache', // 'no-store' ensures data is fetched fresh on each request
        headers: {
            'Cache-Control': 'public, max-age=86400', // Cache control if needed
        },


    });

    const datas = await response.json();

    return (
        <div>

            <Cabanner datas={datas} />

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
    );
};

export default Causes;
