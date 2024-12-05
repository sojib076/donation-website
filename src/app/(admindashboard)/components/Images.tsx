'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {  Grid, List, Trash2, Upload, X } from 'lucide-react'
import Image from 'next/image'
import { usecreateImageUpload, useDeleteImage, useGetImages } from '@/hooks/Images.hook'
import { FaSpinner } from 'react-icons/fa'






export default function Component() {
  const [viewType, setViewType] = useState<'grid' | 'table'>('grid')
  const { mutate: createImage, isSuccess, } = usecreateImageUpload()
  const { mutate: deleteImage  ,isSuccess:isdelete ,isPending} = useDeleteImage()
  const [currentPage, setCurrentPage] = useState(1)
  const [images, setImages] = useState<Array<{ _id: string, name: string, url: string }>>([])

  const { data, isLoading, refetch } = useGetImages(currentPage, 5)
  const [uploadPreview, setUploadPreview] = useState<string | null>(null)
  const [uploadName, setUploadName] = useState('')
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)




  useEffect(() => {
    setImages(data?.data?.
      images || [])
  }, [data])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadPreview(URL.createObjectURL(file))
      setUploadName(file.name)
    }
  }

  const handleUpload = async () => {
    const fileInput = document.querySelector<HTMLInputElement>('input[type="file"]')
    const file = fileInput?.files?.[0]
    const formData = new FormData()


    if (file) {
      formData.append('image', file)
      formData.append('name', uploadName)
      createImage(formData)

      if (isSuccess) {
        setIsUploadModalOpen(false)
        setImages(prev => [...prev, { _id: `img${prev.length + 1}`, name: uploadName, url: uploadPreview }])
        setUploadPreview(null)
        setUploadName('')

      }


    }
  }

  const handelNext = () => {
    setCurrentPage(prev => prev + 1)
    refetch()
  }
  const handelPrevious = () => {
    setCurrentPage(prev => prev - 1)
    refetch()
  }
  const handleDelete = (id: string) => {
    console.log(id);
    deleteImage(id)
    if (isPending) {
      setImages(prev => prev.filter(image => image._id !== id))
    }

    refetch()
  }

  return (
    <div className="container mx-auto p-4 space-y-8">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Modern Image Gallery</h1>
        <Dialog open={isUploadModalOpen} onOpenChange={setIsUploadModalOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Upload Image
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Upload New Image</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="image-upload">Select Image</Label>
                <Input id="image-upload" type="file" onChange={handleFileChange} accept="image/*" />
              </div>
              {uploadPreview && (
                <div className="relative">
                  <Image
                    height={800}
                    width={800}
                    src={uploadPreview} alt="Upload preview" className="w-full h-48 object-cover rounded-md" />
                  <Button
                    size="icon"
                    variant="destructive"
                    className="absolute top-2 right-2"
                    onClick={() => {
                      setUploadPreview(null)
                      setUploadName('')
                    }}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              )}
              {uploadPreview && (
                <div className="grid gap-2">
                  <Label htmlFor="image-name">Image Name</Label>
                  <Input
                    id="image-name"
                    value={uploadName}
                    onChange={(e) => setUploadName(e.target.value)}
                  />
                </div>
              )}
            </div>
            <Button onClick={handleUpload} disabled={!uploadPreview}>Upload</Button>
          </DialogContent>
        </Dialog>
      </header>

      <div className="flex justify-between items-center">
        <ToggleGroup type="single" value={viewType} onValueChange={(value: string) => setViewType(value as 'grid' | 'table')}>
          <ToggleGroupItem value="grid" aria-label="Grid view">
            <Grid className="w-4 h-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="table" aria-label="Table view">
            <List className="w-4 h-4" />
          </ToggleGroupItem>
        </ToggleGroup>
        <div className="flex items-center gap-2">
          <Button
            onClick={
              handelPrevious
            }
            disabled={currentPage === 1 || isLoading || !data?.data?.totalPages}
          >
            Previous
          </Button>

          <Button

            onClick={handelNext}
            disabled={currentPage === data?.data?.totalPages || isLoading || !data?.data?.totalPages}
          >
            Next
          </Button>
        </div>
      </div>

      {
        isLoading && <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-gray-300 rounded-lg h-48 w-full"
            ></div>
          ))}
        </div>
      }

      {viewType === 'grid' ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map(image => (
            <div key={image._id} className="group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg">
              <Image
                height={400}
                width={400}
                alt={image.name ? image.name : 'Image'}

                src={image.url}  className="w-full h-48 object-cover transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-1">
                  <Button className="w-20" variant='destructive' 
                  disabled={isPending}
                onClick={() => handleDelete(image._id)}>

                  {
                    isdelete && <Trash2 className="w-4 h-4" /> 
                  }
                  {
                    isPending && <FaSpinner className="w-4 h-4 animate-spin" />
                  }
                  {
                    !isPending && !isdelete && <Trash2 className="w-4 h-4" />
                  }
                  
                  
                </Button>
                <p className="text-white p-2 text-sm truncate w-full">{image.name}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {images.map(image => (
                <TableRow key={image._id}>
                  <TableCell>
                    <Image
                      height={640}
                      width={640}
                      src={image.url}  alt={image.name ? image.name : 'Image'} className="w-16 h-16 object-cover rounded-md" />
                  </TableCell>
                  <TableCell>{image.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}