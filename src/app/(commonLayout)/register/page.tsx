"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { FaSpinner } from 'react-icons/fa'
import { toast } from '@/hooks/use-toast'



export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
        const data = new FormData(event.target as HTMLFormElement)
        const name = data.get('name') as string
        const email = data.get('email') as string
        const password = data.get('password') as string

        const confirmPassword = data.get('confirm-password') as string
        if (password !== confirmPassword) {
            console.log('Passwords do not match');
        
            toast({
                title: 'Passwords do not match',
               description: 'Please make sure the passwords match',
            })

          return 
        }

    setIsLoading(true)

    toast({
      title: 'Account Created',
      description: 'Your account has been created successfully 🎉',
    })
    


    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 to-emerald-500 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-5xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center">Create an Account</CardTitle>
          <CardDescription className="text-center text-lg">
            Join our community of donors
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
              <Input 
                id="name" 
                name='name'
                placeholder="John Doe" 
                type="text" 
                autoCapitalize="words" 
               
                disabled={isLoading}
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">Email</Label>
              <Input 
                id="email" 
                placeholder="m@example.com" 
                type="email" 
                name='email'
              
               
                disabled={isLoading}
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">Password</Label>
              <div className="relative">
                <Input 
                  id="password" 
                    name='password'
                  type={showPassword ? "text" : "password"} 
                  disabled={isLoading}
                  className="h-11 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-sm font-medium">Confirm Password</Label>
              <div className="relative">
                <Input 
                  id="confirm-password" 
                    name='confirm-password'
                  type={showConfirmPassword ? "text" : "password"} 
                  disabled={isLoading}
                  className="h-11 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            <Button className="w-full mt-6 h-11 text-lg bg-teal-600 hover:bg-teal-700" type="submit" disabled={isLoading}>
              {isLoading ? (
                <FaSpinner className="mr-2 h-5 w-5 animate-spin" />
              ) : null}
              Create Account
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
   
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-gray-600 mt-2 w-full">
            Already have an account?{' '}
            <Link className="font-medium text-teal-600 hover:text-teal-500" href="/login">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}