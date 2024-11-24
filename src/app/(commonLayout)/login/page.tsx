  "use client";
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import Link from 'next/link'
import { Eye, EyeOff, Github } from 'lucide-react'
import { FaSpinner } from 'react-icons/fa'
import { BsGoogle } from 'react-icons/bs'
import { useUserLogin } from '@/hooks/Auth.hook';


export default function LoginPage() {
 
  
  const [showPassword, setShowPassword] = useState(false)
  const { mutate: userLogin, isPending} = useUserLogin();

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    const email = (event.currentTarget as any).email.value
    const password = (event.currentTarget as any).password.value
     userLogin({email, password}) 


    


   

  
  }
 


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 to-emerald-500 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center">Welcome Back</CardTitle>
          <CardDescription className="text-center text-lg">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">Email</Label>
              <Input 
                id="email" 
                placeholder="m@example.com" 
                type="email" 
                name='email'
                autoCapitalize="none" 
                autoComplete="email" 
                autoCorrect="off" 
                disabled={isPending}
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">Password</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  name='password'
                  placeholder="********"
                  type={showPassword ? "text" : "password"} 
                  disabled={isPending}
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
            <Button className="w-full mt-6 h-11 text-lg bg-teal-600 hover:bg-teal-700" type="submit" disabled={isPending}>
              {isPending ? (
                <FaSpinner className="mr-2 h-5 w-5 animate-spin" />
              ) : null}
              Sign In
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
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline" disabled={isPending} className="h-11">
              <Github className="mr-2 h-5 w-5" />
              Github
            </Button>
            <Button variant="outline" disabled={isPending} className="h-11">
              <BsGoogle className="mr-2 h-5 w-5" />
              Google
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-gray-600 mt-2 w-full">
          
            <Link className="font-medium text-teal-600 hover:text-teal-500" href="/register">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}