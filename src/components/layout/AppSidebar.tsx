import { Home, CalendarDays, ShoppingBag, History, FileText, LogOut, Settings } from "lucide-react"
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

const menuItems = [
  { title: "Speisekarte", icon: Home, url: "/" },
  { title: "Reservierung", icon: CalendarDays, url: "/reservierung" },
  { title: "Bestellung", icon: ShoppingBag, url: "/bestellung" },
  { title: "Deine letzten Bestellungen", icon: History, url: "/bestellungen" },
  { title: "Impressum", icon: FileText, url: "/impressum" },
  { title: "Datenschutz", icon: FileText, url: "/datenschutz" },
]

export function AppSidebar() {
  const isLoggedIn = false // TODO: Implement auth logic

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
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
      <SidebarFooter>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                {isLoggedIn ? (
                  <>
                    <LogOut />
                    <span>Ausloggen</span>
                  </>
                ) : (
                  <>
                    <Settings />
                    <span>Einloggen</span>
                  </>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
}