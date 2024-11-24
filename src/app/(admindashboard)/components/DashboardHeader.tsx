'use client'

import { useState } from 'react'
import {  ChevronDown, LogOut, Settings, User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { logoutUserCookes } from '@/Services/AuthServices'
import { logout } from '@/Redux/slices/authSlice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'



export default function DashboardHeader() {

    
    const router = useRouter();

    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        avatarUrl: 'https://github.com/shadcn.png',
    })

    const dispatch = useDispatch();
    
    
    const handleLogout = async () => {
       
        dispatch(logout());
       await  logoutUserCookes()
        window.location.href = '/'
        
    };

    return (
        <header className=" ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8  ">
                <div className="flex items-center justify-between h-16">
                   
                        <h1 className="text-2xl font-semibold">Dashboard</h1>
                   
                    <div className="flex items-center gap-4 hover:motion-scale-in-95">

                        <DropdownMenu >
                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost" className="flex items-center gap-2 ">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage 
                                        className=''
                                        src={user.avatarUrl} alt={user.name} />
                                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <span className="hidden sm:inline-block">{user.name}</span>
                                    <ChevronDown className="h-4 w-4 opacity-50" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="lg:w-56 w-full  ">
                                <DropdownMenuLabel
                                    className='lg:hidden block text-left text-sm font-semibold   text-gray-500'
                                >{user.name}</DropdownMenuLabel>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>

                                <DropdownMenuSeparator />
                                <Link href="/admin-dashboard/profile" className=''>
                                <DropdownMenuItem className='cursor-pointer motion-preset-rebound '>
                                  
                                    <User className=" mr-2 h-4 w-4 "  />
                                    Profile
                                  
                                </DropdownMenuItem>
                                </Link>
                                <DropdownMenuItem className='cursor-pointer  motion-preset-rebound '>
                                    <Settings className="mr-2 h-4 w-4  motion-preset-spin " />
                                    Settings
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    className="text-red-500 motion-preset-rebound hover:motion-scale-in-90 hover:cursor-pointer "
                                    onClick={handleLogout}>
                                    <LogOut className="mr-2 h-4 w-4
                                    font-bold
                                    " />
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header>
    )
}