'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Grid, List, Upload, X } from 'lucide-react'

// Mock function to simulate image upload
const uploadImage = async (file: File, name: string): Promise<{ id: string, name: string, url: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Math.random().toString(36).substr(2, 9),
        name: name,
        url: URL.createObjectURL(file)
      })
    }, 1000)
  })
}

// Mock function to fetch images
const fetchImages = async (page: number, perPage: number): Promise<{ images: Array<{ id: string, name: string, url: string }>, total: number }> => {
  const mockImages = Array(50).fill(null).map((_, i) => ({
    id: `img${i}`,
    name: `Image ${i + 1}`,
    url: `/placeholder.svg?height=200&width=200&text=Image${i + 1}`
  }))

  return {
    images: mockImages.slice((page - 1) * perPage, page * perPage),
    total: mockImages.length
  }
}

export default function Component() {
  const [viewType, setViewType] = useState<'grid' | 'table'>('grid')
  const [currentPage, setCurrentPage] = useState(1)
  const [images, setImages] = useState<Array<{ id: string, name: string, url: string }>>([])
  const [totalImages, setTotalImages] = useState(0)
  const [uploadPreview, setUploadPreview] = useState<string | null>(null)
  const [uploadName, setUploadName] = useState('')
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const perPage = 10

  const loadImages = async () => {
    const result = await fetchImages(currentPage, perPage)
    setImages(result.images)
    setTotalImages(result.total)
  }

  
  useEffect(() => {
    loadImages()
  }, [currentPage]) // eslint-disable-line react-hooks/exhaustive-deps

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
    if (file) {
      const uploadedImage = await uploadImage(file, uploadName)
      setImages(prev => [uploadedImage, ...prev])
      setUploadPreview(null)
      setUploadName('')
      if (fileInput) fileInput.value = ''
      setIsUploadModalOpen(false)
    }
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
                  <img src={uploadPreview} alt="Upload preview" className="w-full h-48 object-cover rounded-md" />
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
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="text-sm">
            Page {currentPage} of {Math.ceil(totalImages / perPage)}
          </span>
          <Button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(totalImages / perPage)))}
            disabled={currentPage === Math.ceil(totalImages / perPage)}
          >
            Next
          </Button>
        </div>
      </div>

      {viewType === 'grid' ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map(image => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg">
              <img src={image.url} alt={image.name} className="w-full h-48 object-cover transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
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
                <TableRow key={image.id}>
                  <TableCell>
                    <img src={image.url} alt={image.name} className="w-16 h-16 object-cover rounded-md" />
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