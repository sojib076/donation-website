'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { PenTool, ImageIcon, FolderOpen, Megaphone, Upload } from 'lucide-react'

export default function ModernAdminBlogPage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const [campaign, setCampaign] = useState('')
  const [newImage, setNewImage] = useState<File | null>(null)
  const [selectedImage, setSelectedImage] = useState('')

  // This would typically be fetched from your backend
  const previousImages = [
    '/placeholder.svg?height=1100&width=100',
    '/placeholder.svg?height=1001&width=100',
    '/placeholder.svg?height=1010&width=100',
  ]

  const handleNewImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewImage(e.target.files[0])
      setSelectedImage('')
    }
  }

  const handleImageSelection = (imagePath: string) => {
    setSelectedImage(imagePath)
    setNewImage(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const imageToUse = newImage ? 'New Image Uploaded' : selectedImage
    console.log({ title, content, category, campaign, image: imageToUse })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        <Card className="shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-xl">
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <PenTool className="w-6 h-6" />
              Create New Blog Post
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-lg font-medium">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your blog post title"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-lg font-medium flex items-center gap-2">
                  <ImageIcon className="w-5 h-5" />
                  Featured Image
                </Label>
                <Tabs defaultValue="upload" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="upload">Upload New</TabsTrigger>
                    <TabsTrigger value="select">Select Existing</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="upload">
                    <Input
                      id="newImage"
                      type="file"
                      onChange={handleNewImageUpload}
                      accept="image/*"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </TabsContent>
                  <TabsContent value="select">
                    <RadioGroup value={selectedImage} onValueChange={handleImageSelection}>
                      <div className="grid grid-cols-3 gap-4">
                        {previousImages.map((img, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <RadioGroupItem value={img} id={`image-${index}`} className="sr-only" />
                            <Label
                              htmlFor={`image-${index}`}
                              className={`cursor-pointer border-2 rounded-md p-2 ${
                                selectedImage === img ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-300'
                              }`}
                            >
                              <img src={img} alt={`Previous upload ${index + 1}`} className="w-full h-auto" />
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-lg font-medium flex items-center gap-2">
                    <FolderOpen className="w-5 h-5" />
                    Category
                  </Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="lifestyle">Lifestyle</SelectItem>
                      <SelectItem value="food">Food</SelectItem>
                      <SelectItem value="travel">Travel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="campaign" className="text-lg font-medium flex items-center gap-2">
                    <Megaphone className="w-5 h-5" />
                    Connect to Campaign
                  </Label>
                  <Select value={campaign} onValueChange={setCampaign}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a campaign" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="campaign1">Campaign 1</SelectItem>
                      <SelectItem value="campaign2">Campaign 2</SelectItem>
                      <SelectItem value="campaign3">Campaign 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content" className="text-lg font-medium">Content</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 min-h-[200px]"
                  placeholder="Write your blog post content here..."
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-md hover:from-purple-700 hover:to-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                <Upload className="w-5 h-5 mr-2" />
                Publish Blog Post
              </Button>
              
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}