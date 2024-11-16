import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Target, Calendar, Mail, Phone, MapPin, ExternalLink, Settings } from 'lucide-react'

export default function DonationProfile() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-6xl space-y-8">
       
        <header className="relative rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 p-8 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-24 w-24 border-4 border-white shadow-md">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Jane Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold">Jane Doe</h1>
                <p className="text-lg">Passionate Philanthropist</p>
              </div>
            </div>
            <Button variant="secondary" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </header>

      
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left Sidebar */}
          <div className="space-y-8">
            {/* User Info Card */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <span>jane.doe@example.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <span>San Francisco, CA</span>
                </div>
              </CardContent>
            </Card>

            {/* Donation Summary Card */}
            <Card>
              <CardHeader>
                <CardTitle>Donation Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Total Donated</span>
                  <span className="text-2xl font-bold">$5,280</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Donations Made</span>
                  <span className="text-2xl font-bold">42</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Causes Supported</span>
                  <span className="text-2xl font-bold">7</span>
                </div>
              </CardContent>
            </Card>

            {/* Impact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Your Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span>Helped 150+ people</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-blue-500" />
                  <span>Supported 5 local communities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-green-500" />
                  <span>Active donor for 3 years</span>
                </div>
              </CardContent>
            </Card>
          </div>

        
          <div className="md:col-span-2 space-y-8">
          
            <Card>
              <CardHeader>
                <CardTitle>2024 Donation Goal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm font-medium">$5,280 / $10,000</span>
                  </div>
                  <Progress value={52.8} className="h-2 w-full" />
                </div>
                <p className="mt-2 text-sm text-gray-500">You're 52.8% of the way to your annual goal!</p>
              </CardContent>
            </Card>

           
            <Card>
              <CardHeader>
                <CardTitle>Donation History</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="recent" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="recent">Recent</TabsTrigger>
                    <TabsTrigger value="causes">By Cause</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  </TabsList>
                  <TabsContent value="recent" className="space-y-4 mt-4">
                    {[
                      { cause: "Education Fund", amount: "$100", date: "May 15, 2024" },
                      { cause: "Clean Water Initiative", amount: "$75", date: "May 1, 2024" },
                      { cause: "Hunger Relief", amount: "$50", date: "Apr 22, 2024" },
                      { cause: "Wildlife Conservation", amount: "$200", date: "Apr 10, 2024" },
                    ].map((donation, index) => (
                      <div key={index} className="flex items-center justify-between border-b pb-2 last:border-b-0">
                        <div>
                          <p className="font-medium">{donation.cause}</p>
                          <p className="text-sm text-gray-500">{donation.date}</p>
                        </div>
                        <Badge variant="secondary">{donation.amount}</Badge>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="causes" className="space-y-4 mt-4">
                    {[
                      { cause: "Education", amount: "$1,200", percentage: 22.7 },
                      { cause: "Healthcare", amount: "$950", percentage: 18 },
                      { cause: "Environment", amount: "$1,500", percentage: 28.4 },
                      { cause: "Poverty Alleviation", amount: "$1,630", percentage: 30.9 },
                    ].map((cause, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{cause.cause}</span>
                          <span>{cause.amount}</span>
                        </div>
                        <Progress value={cause.percentage} className="h-2 w-full" />
                        <p className="text-sm text-gray-500">{cause.percentage}% of total donations</p>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="monthly" className="space-y-4 mt-4">
                    {[
                      { month: "May 2024", amount: "$450" },
                      { month: "Apr 2024", amount: "$575" },
                      { month: "Mar 2024", amount: "$325" },
                      { month: "Feb 2024", amount: "$400" },
                    ].map((month, index) => (
                      <div key={index} className="flex items-center justify-between border-b pb-2 last:border-b-0">
                        <span className="font-medium">{month.month}</span>
                        <Badge variant="secondary">{month.amount}</Badge>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

      
            <Card>
              <CardHeader>
                <CardTitle>Recommended Causes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 min-h-32">
                  {[
                    { name: "Ocean Cleanup Project", description: "Help remove plastic from our oceans", goal: "$50,000", raised: "$32,450" },
                    { name: "Children's Education Fund", description: "Provide education to underprivileged children", goal: "$100,000", raised: "$78,900" },
                    { name: "Reforestation Initiative", description: "Plant trees to combat deforestation", goal: "$25,000", raised: "$18,275" },
                    { name: "Mental Health Awareness", description: "Support mental health programs", goal: "$75,000", raised: "$41,800" },
                  ].map((cause, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <h3 className="font-semibold">{cause.name}</h3>
                        <p className="text-sm text-gray-500 mb-2 min-h-10">{cause.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span>Goal: {cause.goal}</span>
                          <span>Raised: {cause.raised}</span>
                        </div>
                        <Button className="w-full mt-2" size="sm">
                          Donate Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}