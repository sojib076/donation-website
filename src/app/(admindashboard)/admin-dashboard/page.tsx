"use client"

import React, { useState } from 'react';
import { Piechart } from '../components/PieChart';
import { Barchart } from '../components/BarChart';
import { BarCandel } from '../components/BarCandel';
import { PaymentTable } from '../components/PaymentTable';
import DeleteUserModal from '../components/Modal';
import { Button } from '@/components/ui/button';


const AdminDashboard = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
  const [userToDelete, setUserToDelete] = useState({ name: '' })

  const handleDeleteUser = (user: { name: string }) => {
    setUserToDelete(user)
    setIsModalOpen(true)
  }

  const handleConfirmDelete = async () => {
   
    console.log(`Deleting user: ${userToDelete.name}`)
  
    await new Promise(resolve => setTimeout(resolve, 1000)) 
  }

    return (
        <div className=' p-5'>
            <div className='mb-10 grid lg:grid-cols-3 grid-cols-1 gap-5'>
                <div className='rounded-xl shadow-2xl   bg-gay-50 py-16  cursor-pointer    '
                    style={{ boxShadow: "0 0 15px rgba(100, 100, 100, 0.3)" }}>
                    <h1 className=' text-center text-2xl font-bold text-green-500'>Total Users</h1>
                    <h1 className=' text-center text-2xl font-bold text-green-500'>1000</h1>
                </div>
                <div className="p-4">
                    <h1 className="text-2xl font-bold mb-4">User Management</h1>
                    <Button onClick={() => handleDeleteUser({ name: 'John Doe' })}>
                        Delete User
                    </Button>
                    <div className='motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate'> 
                            <DeleteUserModal
                    
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onConfirm={handleConfirmDelete}
                        userName={userToDelete.name}
                    />
                    </div>
                
                </div>

          



            </div>
            

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 '>

                <Piechart />
                <Barchart />
                <BarCandel />

            </div>
            
            <PaymentTable />
            
        </div>
    );
};

export default AdminDashboard;