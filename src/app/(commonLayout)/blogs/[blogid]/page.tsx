'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, User, Share2, Heart, ArrowRight, Send } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from '@/hooks/use-toast'


export default function BlogDetails() {
  const [loveCount, setLoveCount] = useState(42)
  const [comments, setComments] = useState([
    { id: 1, author: 'John Doe', content: 'This is truly inspiring! Keep up the great work.', avatar: 'JD' },
    { id: 2, author: 'Jane Smith', content: 'I\'m amazed by the impact. How can I get more involved?', avatar: 'JS' },
  ])
  const [newComment, setNewComment] = useState('')

  const handleLove = () => {
    setLoveCount(prevCount => prevCount + 1)
    toast({
      title: "Thank you!",
      description: "Your love has been added to this post.",
    })
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Making a Difference: How Your Donations Change Lives',
          text: 'Read about the impact of donations in rural Tanzania',
          url: window.location.href,
        })
        toast({
          title: "Shared successfully!",
          description: "Thank you for spreading the word.",
        })
      } catch (error) {
        console.error('Error sharing:', error)
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
      toast({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
      })
    }
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      const newCommentObj = {
        id: comments.length + 1,
        author: 'Guest User',
        content: newComment.trim(),
        avatar: 'GU'
      }
      setComments(prevComments => [...prevComments, newCommentObj])
      setNewComment('')
      toast({
        title: "Comment posted!",
        description: "Your comment has been added to the discussion.",
      })
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-background">
      <article className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Making a Difference: How Your Donations Change Lives</h1>
        <div className="flex items-center text-sm text-muted-foreground mb-6">
          <Calendar className="h-4 w-4 mr-1" />
          <span>June 1, 2023</span>
          <Separator className="mx-2" orientation="vertical" />
          <User className="h-4 w-4 mr-1" />
          <span>Sarah Johnson</span>
        </div>
        <img src="/placeholder.svg?height=400&width=800" alt="Featured image" className="w-full h-64 object-cover rounded-lg mb-6" />
        <div className="prose max-w-none space-y-3">
          <p>In the heart of rural Tanzania, a small village has undergone a remarkable transformation. Just a year ago, access to clean water was a daily struggle for its inhabitants. Today, thanks to the generous donations from our supporters, a new well provides fresh, safe water to over 500 people.</p>

          <p>This is just one example of how your contributions are making a real, tangible difference in peoples lives. From building schools in remote areas to providing medical supplies to underserved communities, every donation, no matter how small, contributes to creating lasting change.</p>
          <h2>The Ripple Effect of Generosity</h2>
          <p>When we improve one aspect of a communitys life, the benefits often extend far beyond our initial goals. In the case of the Tanzanian village:</p>
          <ul>
            <li>Children, especially girls, now spend less time fetching water and more time in school.</li>
            <li>The incidence of waterborne diseases has dramatically decreased, improving overall community health.</li>
            <li>Local agriculture has flourished with reliable access to water for crops and livestock.</li>
          </ul>
          <p>Your donations dont just solve immediate problems; they create opportunities for sustainable development and brighter futures.</p>
          <h2 className='font-semibold'>Join Our Latest Campaign</h2>
          <p>Inspired by the success of our water project in Tanzania, were launching a new campaign to bring clean water to 10 more villages across East Africa. Your continued support can help us reach this ambitious goal and change thousands more lives.</p>
        </div>
      </article>

      <Separator className="my-8" />

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">New Campaign: Clean Water Initiative</h2>
        <Card>
          <CardHeader>
            <CardTitle>Help Us Reach 10 More Villages</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Our new Clean Water Initiative aims to provide sustainable water solutions to 10 villages in East Africa, impacting over 5,000 lives. Heres how you can get involved:</p>
            <ul className="list-disc list-inside mb-6">
              <li>Donate directly to the campaign</li>
              <li>Share our campaign with your network</li>
              <li>Volunteer for our online awareness programs</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button>Donate Now</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Engage with this Story</h2>
        <div className="flex gap-4 items-center">
          <Button variant="outline" size="icon" onClick={handleLove}>
            <Heart className="h-4 w-4" />
          </Button>
          <span>{loveCount} loves</span>
          <Button variant="outline" size="icon" onClick={handleShare}>
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <Card>
          <CardContent className="pt-6">
            <h1 className='mb-3'> 
                Please Be respectful and kind to others 
            </h1>
            {comments.map(comment => (
              <div key={comment.id} className="flex gap-4 mb-4">
                <Avatar>
                  <AvatarFallback>{comment.avatar}</AvatarFallback>
                </Avatar>
                <div className=' shadow px-2 rounded-md'>
                  <p className="font-semibold">{comment.author}</p>
                  <p className="text-muted-foreground">{comment.content}</p>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <form onSubmit={handleCommentSubmit} className="w-full">
              <Textarea 
                placeholder="Leave a comment..." 
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="mb-2"
              />
              <Button type="submit">
                Post Comment
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((post) => (
            <Card key={post}>
              <img src={`/placeholder.svg?height=200&width=400&text=Related ${post}`} alt={`Related post ${post}`} className="w-full h-48 object-cover rounded-t-lg" />
              <CardHeader>
                <CardTitle className="text-xl">Empowering Communities Through Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Discover how our education initiatives are creating opportunities for children in underserved areas.</p>
                <Button variant="link" className="p-0">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}