import { useState } from 'react'

import { Button } from "@/components/ui/button"


interface DeleteUserModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => Promise<void>
  userName: string
}

export default function DeleteUserModal({ isOpen, onClose, onConfirm, userName = 'John Doe' }: DeleteUserModalProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleConfirm = async () => {
    setIsLoading(true)
    try {
      await onConfirm()
     
    } catch (error) {
      console.error('Error deleting user:', error)
    } finally {
      setIsLoading(false)
      onClose()
    }
  }

  return (
        
            isOpen && (

                <div className=' motion-scale-in-[0.5] motion-translate-x-in-[15%] motion-translate-y-in-[-17%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[40px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate fixed inset-0 bg-black  flex items-center justify-center '>
                    <div className='bg-green-50 rounded-lg p-5 max-w-md w-full z-50'>
                        <h1 className='text-2xl font-bold mb-4'>Delete User</h1>
                        <p className='text-gray-500 mb-8'>Are you sure you want to delete <strong>{userName}</strong>?</p>
                        <div className='flex gap-4'>
                            <Button variant='ghost' onClick={onClose}>Cancel</Button>
                            <Button variant='destructive' onClick={handleConfirm} disabled={isLoading}>
                                {isLoading ? 'Deleting...' : 'Delete'}
                            </Button>
                        </div>
                    </div>
                </div>
                
            )

        )
    }



            
        
  

