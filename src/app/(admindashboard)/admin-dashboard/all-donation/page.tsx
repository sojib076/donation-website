'use client'

import { useState, useEffect } from 'react'
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
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Pencil, Trash2, CheckCircle, MoreHorizontal, Search, DollarSign } from 'lucide-react'
import { toast } from '@/hooks/use-toast'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@radix-ui/react-progress'

// This would typically come from your API or database
const initialDonations: Donation[] = [
    { id: 1, title: 'Help Local Food Bank', description: 'Support our community by donating to the local food bank.', image: '/placeholder.svg?height=100&width=200', status: 'active', target: 5000, current: 3750 },
    { id: 2, title: 'School Supplies for Kids', description: 'Provide school supplies for underprivileged children.', image: '/placeholder.svg?height=100&width=200', status: 'active', target: 2000, current: 1500 },
    { id: 3, title: 'Animal Shelter Support', description: 'Help our local animal shelter care for abandoned pets.', image: '/placeholder.svg?height=100&width=200', status: 'completed', target: 3000, current: 3000 },
    { id: 4, title: 'Community Garden Project', description: 'Create a sustainable community garden.', image: '/placeholder.svg?height=100&width=200', status: 'active', target: 7500, current: 5200 },
    { id: 5, title: 'Youth Sports Program', description: 'Fund equipment for underprivileged youth sports teams.', image: '/placeholder.svg?height=100&width=200', status: 'completed', target: 4000, current: 4000 },
]


type Donation = {
    id: number
    title: string
    description: string
    status: 'active' | 'completed'
    target: number
    current: number
    image: string
}

export default function DonationsList() {
    const [donations, setDonations] = useState<Donation[]>(initialDonations)
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'completed'>('all')
    const [hoveredDonation, setHoveredDonation] = useState<Donation | null>(null)
    const router = useRouter()

    const handleDelete = (id: number) => {
        setDonations(donations.filter(donation => donation.id !== id))
        toast({
            title: "Donation Deleted",
            description: "The donation has been successfully deleted.",
        })
    }
    const newthreeDonations = donations.slice(0, 3)

    const handleUpdate = (id: number) => {
        router.push(`/dashboard/donations/edit/${id}`)
    }

    const handleMarkDone = (id: number) => {
        setDonations(donations.map(donation =>
            donation.id === id ? { ...donation, status: 'completed', current: donation.target } : donation
        ))
        toast({
            title: "Donation Marked as Done",
            description: "The donation has been marked as completed.",
        })
    }

    const filteredDonations = donations.filter(donation =>
        donation.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (statusFilter === 'all' || donation.status === statusFilter)
    )

    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-4xl font-bold mb-8 text-center text-amber-600">Donation Dashboard</h1>
            <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newthreeDonations.map((donation) => (
                        <Card key={donation.id} className="overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="relative">
                                <Image
                                    src={`/images/donation-${donation.id}.jpg`}
                                    alt={donation.title}
                                    width={400}
                                    height={200}
                                    layout="responsive"
                                />
                                <Badge
                                    variant={donation.status === 'completed' ? 'secondary' : 'default'}
                                    className="absolute top-2 right-2 bg-amber-500 text-white"
                                >
                                    {donation.status}
                                </Badge>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl text-amber-800">{donation.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-amber-700 mb-4">{donation.description}</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm text-amber-600">
                                        <span>Progress</span>
                                        <span>{Math.round((donation.current / donation.target) * 100)}%</span>
                                    </div>
                                    <Progress value={(donation.current / donation.target) * 100} className="h-2 bg-amber-200" />
                                    <div className="flex justify-between text-sm font-medium">
                                        <span className="text-amber-700">
                                            <DollarSign className="inline-block w-4 h-4 mr-1" />
                                            {donation.current.toLocaleString()}
                                        </span>
                                        <span className="text-amber-600">
                                            Target: ${donation.target.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between bg-amber-50">
                                <Button variant="outline" size="sm" onClick={() => handleUpdate(donation.id)} className="text-amber-700 border-amber-300 hover:bg-amber-200">
                                    <Pencil className="w-4 h-4 mr-2" />
                                    Update
                                </Button>
                                <Button variant="outline" size="sm" onClick={() => handleDelete(donation.id)} className="text-amber-700 border-amber-300 hover:bg-amber-200">
                                    <Trash2 className="w-4 h-4 mr-2" />
                                    Delete
                                </Button>
                                {donation.status === 'active' && (
                                    <Button variant="outline" size="sm" onClick={() => handleMarkDone(donation.id)} className="text-amber-700 border-amber-300 hover:bg-amber-200">
                                        <CheckCircle className="w-4 h-4 mr-2" />
                                        Mark Done
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>

            </>

            <div className="container mx-auto py-10 px-4">
                <h1 className="text-4xl font-bold mb-8 text-center text-amber-600">Donation Dashboard</h1>

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

                <div className="rounded-md border relative">
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
                        <TableBody>
                            {filteredDonations.map((donation) => (
                                <TableRow
                                    key={donation.id}
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
                                                <DropdownMenuItem onClick={() => handleUpdate(donation.id)}>
                                                    <Pencil className="mr-2 h-4 w-4" /> Update
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => handleDelete(donation.id)}>
                                                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                                                </DropdownMenuItem>
                                                {donation.status === 'active' && (
                                                    <DropdownMenuItem onClick={() => handleMarkDone(donation.id)}>
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
                                src={hoveredDonation.image}
                                alt={hoveredDonation.title}
                                width={200}
                                height={100}
                                className="rounded-md mb-2"
                                
                            />
                            <h3 className="font-semibold text-sm mb-1">{hoveredDonation.title}</h3>
                            <p className="text-xs text-gray-500">{hoveredDonation.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}