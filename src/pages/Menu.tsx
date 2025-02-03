import { useEffect, useState } from "react"
import { LoadingScreen } from "@/components/layout/LoadingScreen"
import { ContactInfo } from "@/components/common/ContactInfo"
import { MenuSection } from "@/components/menu/MenuSection"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/AppSidebar"

const MOCK_DATA = {
  address: "Pizzastraße 1, 12345 Stadt",
  phone: "+49 123 456789",
  openingHours: {
    Montag: "11:00 - 22:00",
    Dienstag: "11:00 - 22:00",
    Mittwoch: "11:00 - 22:00",
    Donnerstag: "11:00 - 22:00",
    Freitag: "11:00 - 23:00",
    Samstag: "12:00 - 23:00",
    Sonntag: "12:00 - 22:00",
  },
}

const MENU_ITEMS = {
  menus: [
    {
      title: "Familie Special",
      description: "2 große Pizzen nach Wahl, 1L Getränk, 2 Desserts",
      price: 39.90,
    },
    {
      title: "Pasta Duo",
      description: "2 Pasta-Gerichte nach Wahl, 2 Salate, 2 Desserts",
      price: 29.90,
    },
    {
      title: "Pizza Party",
      description: "3 mittlere Pizzen, 4 Getränke, Knoblauchbrot",
      price: 44.90,
    },
    {
      title: "Mittagsmenü",
      description: "1 Pizza oder Pasta, 1 Salat, 1 Getränk",
      price: 14.90,
    },
    {
      title: "Date Night",
      description: "2 Pizzen, 1 Dessert zum Teilen, 2 Getränke",
      price: 32.90,
    },
  ],
  popular: [
    {
      title: "Pizza Margherita",
      description: "Tomatensoße, Mozzarella, frisches Basilikum",
      price: 9.90,
      isPopular: true,
    },
    {
      title: "Pizza Diavola",
      description: "Scharfe Salami, Peperoni, Zwiebeln",
      price: 12.90,
      isPopular: true,
    },
    {
      title: "Pasta Carbonara",
      description: "Spaghetti, Ei, Pecorino, Speck",
      price: 13.90,
      isPopular: true,
    },
    {
      title: "Insalata Mista",
      description: "Gemischter Salat mit Balsamico-Dressing",
      price: 8.90,
      isPopular: true,
    },
    {
      title: "Tiramisu",
      description: "Hausgemachtes italienisches Dessert",
      price: 6.90,
      isPopular: true,
    },
  ],
}

const Menu = () => {
  const [loading, setLoading] = useState(true)
  const [showContactInfo, setShowContactInfo] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setShowContactInfo(position < 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-white">
        <AppSidebar />
        <main className="flex-1">
          <ContactInfo
            address={MOCK_DATA.address}
            phone={MOCK_DATA.phone}
            openingHours={MOCK_DATA.openingHours}
            visible={showContactInfo}
          />
          <div className="p-4">
            <h1 className="text-2xl font-bold text-center mb-6">Unsere Speisekarte</h1>
            <MenuSection title="Menüs" items={MENU_ITEMS.menus} />
            <MenuSection title="Am Beliebtesten" items={MENU_ITEMS.popular} />
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default Menu