import { Calendar, Gift, Home,  PenTool, Users  ,Image} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ScrollArea } from "@/components/ui/scroll-area"


const items = [
  {
    title: "Home",
    url: "/admin-dashboard",
    icon: Home,
  },
  {
    title: "Create Donation",
    url: "/admin-dashboard/create-donation",
    icon: Gift,
  },
  {
    title: "All Donations",
    url: "/admin-dashboard/all-donation",
    icon: Calendar,
  },
  {
    title: "All Users",
    url: "/admin-dashboard/all-users",
    icon: Users,
  },
  {
    title: "Media",
    url: "/admin-dashboard/images",
    icon: Image,
  },
  {
    title: "Create Blog",
    url: "/admin-dashboard/create-blog",
    icon: PenTool,
  },
]


export function AppSidebar() {
  return (
    <Sidebar  >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <SidebarMenu
              className=" gap-4 p-4">

              {items.map((item) => (
                <SidebarMenuItem
                  className="rounded-xl "
                  key={item.title}>
                  <SidebarMenuButton
                    className="hover:bg-gray-200 
                    hover:text-black
                    rounded-xl
                  "

                    asChild
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

            </SidebarMenu>
            </ScrollArea>
          </SidebarGroupContent>
        </SidebarGroup>
        
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
          <p className="text-xs text-muted-foreground">© 2024 Your Company</p>
        </SidebarFooter>
    </Sidebar>
  )
}

