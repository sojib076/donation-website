import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/admin-dashboard",
    icon: Home,
  },
  {
    title: "create-donation",
    url: "/admin-dashboard/create-donation",
    icon: Inbox,
  },
  {
    title: "All Donation",
    url: "/admin-dashboard/all-donation",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]


export function AppSidebar() {
  return (
    <Sidebar  >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu
                className=" gap-4 p-4"
            >

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
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

