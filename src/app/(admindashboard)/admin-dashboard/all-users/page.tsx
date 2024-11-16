'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/hooks/use-toast"
import { UserPlus, Search, Loader2Icon } from 'lucide-react'

type User = {
  id: number
  name: string
  email: string
  role: 'user' | 'admin'
  status: 'active' | 'blocked'
}

const initialUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', status: 'active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user', status: 'blocked' },
]

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [searchTerm, setSearchTerm] = useState('')
  const [newUser, setNewUser] = useState({ name: '', email: '' , Password: ''})
  const [isAddUserOpen, setIsAddUserOpen] = useState(false)
  const [isEditUserOpen, setIsEditUserOpen] = useState(false)

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddUser = () => {
    setIsEditUserOpen(true)

    if (newUser.name && newUser.email) {
      const user: User = {
        id: users.length + 1,
        name: newUser.name,
        email: newUser.email,
        role: 'user',
        status: 'active'
      }
      setUsers([...users, user])
      
      setTimeout(() => {
        setNewUser({ name: '', email: '' , Password: ''})
        setIsAddUserOpen(false)
        setIsEditUserOpen(false)
        toast({
          title: "User Added",
          description: "New user has been successfully added.",
        })

      }, 1000)

     


     
    }
  }

  const toggleUserRole = (id: number) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, role: user.role === 'admin' ? 'user' : 'admin' } : user
    ))
    
    toast({
      title: "User Role Updated",
      description: "User role has been successfully updated.",
    })
  }

  const toggleUserStatus = (id: number) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, status: user.status === 'active' ? 'blocked' : 'active' } : user
    ))
    toast({
      title: "User Status Updated",
      description: "User status has been successfully updated.",
    })
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-amber-600">User Management</h1>

      <div className="flex justify-between items-center mb-6">
        <div className="relative flex-grow max-w-sm">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
          <DialogTrigger asChild>
            <Button className="bg-amber-500 hover:bg-amber-600">
              <UserPlus className="mr-2 h-4 w-4" /> Add User
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
              <DialogDescription>
                Enter the details of the new user here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Password
                </Label>
                <Input
                  id="Password"
                  type="Password"
                  value={newUser.Password}
                  onChange={(e) => setNewUser({ ...newUser, Password: e.target.value })}
                  className="col-span-3"
                />
              </div>

            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleAddUser} className='w-28'>

                {
                  isEditUserOpen ? <span className='animate-spin'> <Loader2Icon/> </span> : 'Add User'
                }
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id} className={user.role === 'admin' ? 'bg-amber-50' : ''}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}
                    className="capitalize w-16"
                  >
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge 
                    className=' '
                  variant={user.status === 'active' ? 'default' : 'destructive'}>
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleUserRole(user.id)}
                    className='w-28'
        
                  >
                    {user.role === 'admin' ? 'Remove Admin' : 'Make Admin'}
                  </Button>
                  <Switch
                    checked={user.status === 'active'}
                    onCheckedChange={() => toggleUserStatus(user.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}