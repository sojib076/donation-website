'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Pencil, Trash2, CheckCircle, MoreHorizontal, Search, DollarSign } from 'lucide-react'



import { useDeleteDonation, useGetDonations, useMarkDonationAsCompleted } from '@/hooks/Donation.hook'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import { toast } from '@/hooks/use-toast'
import Link from 'next/link'





type Donation = {
    _id: string
    title: string
    description: string
    status: 'active' | 'completed'
    target: number
    current: number
    image: string
}



export default function DonationsList() {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10

    const { data, isPending, isSuccess, refetch } = useGetDonations(currentPage, itemsPerPage)
    const {mutate:deleteDonation,isPending:deleteLoading,isSuccess:deleteSucces}= useDeleteDonation()
    const {mutate:markAsDone}=useMarkDonationAsCompleted()
    
    const initialDonations = data?.data?.donations as Donation[]
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'completed'>('all')
    const [hoveredDonation, setHoveredDonation] = useState<Donation | null>(null)


    const router = useRouter()




    const handleDelete = (id: string) => {
        deleteDonation(id)

        if(deleteSucces){
            toast({
                title: 'Donation deleted successfully',
                description: 'Your donation has been deleted successfully',
              })
        }
    }


    

    const handleMarkDone = (id: string) => {
        
        markAsDone(id)
        
    }


    const pageCount = Math.ceil(initialDonations?.length / itemsPerPage)

    const handlenextPage = () => {
        setCurrentPage(currentPage + 1)

        refetch()
    }

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1)
        refetch()
    }

    const totalPages = data?.data?.totalPages
    console.log(totalPages);


    return (
        <div className="container mx-auto py-10 px-4">


            <div className="container mx-auto py-10 px-4">

                <div className="flex justify-end mb-6">
                    <Button
                        onClick={() => router.push('/admin-dashboard/create-donation')}
                        className="flex items-center space-x-2"
                    >
                        <DollarSign className="h-4 w-4" />
                        <span>Create Donation</span>
                    </Button>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-grow">
                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                            placeholder="Search donations..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                    <Select value={statusFilter} onValueChange={(value: 'all' | 'active' | 'completed') => setStatusFilter(value)}>
                        <SelectTrigger className="w-full md:w-[180px]">
                            <SelectValue placeholder="Filter by status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Statuses</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                        </SelectContent>
                    </Select>
                </div>




                <div className="rounded-md border relative min-h-[50vh]">


                    <Table>

                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Target</TableHead>
                                <TableHead>Current</TableHead>
                                <TableHead>Progress</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        {
                            isSuccess && initialDonations.length === 0 && <div className="text-center">No Donations Found</div>
                        }
                        {
                            isPending &&
                            <TableBody>
                                {[...Array(5)].map((_, index) => (
                                    <TableRow key={index} className="animate-pulse">
                                        <TableCell className="font-medium">
                                            <Skeleton className="h-4 w-3/4" />
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton className="h-5 w-20" />
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton className="h-4 w-16" />
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton className="h-4 w-16" />
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton className="h-2.5 w-full" />
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Skeleton className="h-8 w-8 rounded-full ml-auto" />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        }
                        <TableBody>

                            {initialDonations?.map((donation) => (
                                <TableRow
                                    key={donation._id}
                                    className="cursor-pointer"

                                >
                                    <TableCell onMouseEnter={() => setHoveredDonation(donation)}
                                        onMouseLeave={() => setHoveredDonation(null)} className="font-medium">{donation.title}</TableCell>
                                    <TableCell>
                                        <Badge variant={donation.status === 'completed' ? 'secondary' : 'default'}>
                                            {donation.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell onMouseEnter={() => setHoveredDonation(donation)}
                                        onMouseLeave={() => setHoveredDonation(null)}>${donation.target.toLocaleString()}</TableCell>
                                    <TableCell onMouseEnter={() => setHoveredDonation(donation)}
                                        onMouseLeave={() => setHoveredDonation(null)}>${donation.current.toLocaleString()}</TableCell>
                                    <TableCell onMouseEnter={() => setHoveredDonation(donation)}
                                        onMouseLeave={() => setHoveredDonation(null)}>
                                        <div className="w-full bg-amber-200 rounded-full h-2.5">
                                            <div
                                                className="bg-amber-600 h-2.5 rounded-full"
                                                style={{ width: `${(donation.current / donation.target) * 100}%` }}
                                            ></div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0">
                                                    <span className="sr-only">Open menu</span>
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem >
                                                    <Link 
                                                    href={`/admin-dashboard/all-donation/${donation._id}`}
                                                    className='flex items-center'
                                                    > 
                                                    <Pencil className="mr-2 h-4 w-4" /> <span>Update</span>
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => handleDelete(donation._id)}>
                                                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                                                </DropdownMenuItem>
                                                {donation.status === 'active' && (
                                                    <DropdownMenuItem onClick={() => handleMarkDone(donation._id)}>
                                                        <CheckCircle className="mr-2 h-4 w-4" /> Mark as Done
                                                    </DropdownMenuItem>
                                                )}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                    {hoveredDonation && (
                        <div className="absolute lg:left-56  top-[-150px] bg-white p-4 rounded-md shadow-lg border border-gray-200 min-w-64">
                            <Image
                                src={hoveredDonation?.image}
                                alt={hoveredDonation?.title}

                                className="rounded-md mb-2  
                                 max-h-52 object-cover object-center
                                "
                                width={300}
                                height={300}
                            />
                         
                            <div className="flex justify-between">
                               {/* make the title short  */}

                                {
                                    hoveredDonation?.title.length > 20 ? hoveredDonation?.title.slice(0, 20) + '...' : hoveredDonation?.title
                                }


                                <Badge variant={hoveredDonation?.status === 'completed' ? 'secondary' : 'default'}>
                                    {hoveredDonation?.status}
                                </Badge>
                                </div>
                            

                           
                           
                            
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-4 flex justify-center">
                <Button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1 || isPending}

                    className="mr-2"
                >
                    Previous
                </Button>
                <span className="mx-4 self-center">
                    Page {data?.data?.currentPage} of {data?.data?.totalPages}
                </span>
                <Button
                    onClick={handlenextPage}
                    disabled={currentPage === data?.data?.totalPages || isPending || !data?.data?.totalPages}
                    className="ml-2"
                >
                    Next
                </Button>
            </div>
        </div >
    )
}