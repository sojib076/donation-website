'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle } from 'lucide-react'

import { toast } from '@/hooks/use-toast'

export default function CreateDonation() {
  const [title, setTitle] = useState('')
  const [TargetAmount, setTargetAmount] = useState('')
  const [image, setImage] = useState() as any
  const [imagePreview, setImagePreview] = useState() as any

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast({
      title: " Donation Created",
      description: " Donation has been created successfully",
    })

  




  }

  return (
    <div className='py-10 px-5 min-h-screen'>
      <Card className="w-full max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Create New Donation</CardTitle>
        </CardHeader>
        <CardContent >

          <form onSubmit={handleSubmit} className="space-y-6 py-5   ">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Enter donation title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-center">
                <label htmlFor="image-upload" className="cursor-pointer">
                  <div className="min-w-[900px] h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                    {image ? (
                      <img src={imagePreview} alt="Uploaded" className="max-w-full max-h-full object-fill z-0 " />
                    ) : (
                      <span className="text-gray-500 z-30 "><PlusCircle></PlusCircle></span>
                    )}
                  </div>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="sr-only"
                    aria-label="Upload an image"
                  />
                </label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="TargetAmount">Target Amount</Label>
                <Input
                  id="TargetAmount"
                  placeholder="Enter donation Target"
                  value={TargetAmount}
                  onChange={(e) => setTargetAmount(e.target.value)}

                  required
                />
              </div>


            </div>
            <Button type="submit" className="w-full h-10 bg-mycustomcolors-secondary/80 hover:bg-mycustomcolors-secondary/80  ">Create Donation</Button>
          </form>

        </CardContent>
      </Card>
    </div>
  )
}