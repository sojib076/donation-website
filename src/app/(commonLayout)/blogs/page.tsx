import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Search, Calendar, User, ArrowRight } from 'lucide-react'
import Image from "next/image"

export default function ModernDonationBlog() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-background">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4">DonateHope Blog</h1>
        <p className="text-xl text-muted-foreground">Stories of Impact and Inspiration</p>
      </div>

      <div className="mb-12">
        <form className="flex items-center space-x-2 max-w-md mx-auto">
          <Input type="search" placeholder="Search articles..." className="flex-grow" />
          <Button type="submit" size="icon"><Search className="h-4 w-4" /></Button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        <Card className="md:col-span-8 overflow-hidden">
          <Image 
            height={400}
            width={800}
          src="/placeholder.svg?height=400&width=800" alt="Featured post" className="w-full h-64 object-cover" />
          <CardHeader>
            <CardTitle className="text-3xl">Making a Difference: How Your Donations Change Lives</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Discover the incredible impact of your generosity and how it transforms communities around the world. From building schools in remote villages to providing clean water to drought-stricken areas, your contributions are creating lasting change.</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              <span>June 1, 2023</span>
              <Separator className="mx-2" orientation="vertical" />
              <User className="h-4 w-4 mr-1" />
              <span>Sarah Johnson</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="p-0">
              Read Full Story <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </CardFooter>
        </Card>

        <div className="md:col-span-4 space-y-6">
          <h2 className="text-2xl font-bold mb-4">Trending Stories</h2>
          {[1, 2, 3].map((post) => (
            <Card key={post} className="flex overflow-hidden">
              <Image 
              
              height={100}
              width={100}
              src={`/placeholder.svg?height=100&width=100&text=${post}`} alt={`Trending post ${post}`} className="w-1/3 object-cover" />
              <div className="w-2/3 p-4">
                <h3 className="font-semibold mb-2">Education Initiative Reaches Milestone</h3>
                <p className="text-sm text-muted-foreground">Our program has now helped over 10,000 children access quality education.</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((post) => (
          <Card key={post}>
            <Image 
            
            height={200}
            width={400}
            src={`/placeholder.svg?height=200&width=400&text=Post ${post}`} alt={`Post ${post}`} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle className="text-xl">Empowering Communities Through Sustainable Agriculture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Learn how your donations are helping farmers implement sustainable practices and increase crop yields in developing regions.</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                <span>May 15, 2023</span>
                <Separator className="mx-2" orientation="vertical" />
                <User className="h-4 w-4 mr-1" />
                <span>Michael Lee</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="p-0">
                Read More <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="outline">Load More Articles</Button>
      </div>
    </div>
  )
}