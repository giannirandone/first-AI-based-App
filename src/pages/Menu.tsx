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

const generateMenuItems = (basePrice: number, count: number, isPopular = false) => {
  const items = [];
  for (let i = 1; i <= count; i++) {
    items.push({
      title: `Menü ${i}`,
      description: `Leckere Kombination aus verschiedenen Gerichten ${i}`,
      price: basePrice + (i * 0.5),
      isPopular,
    });
  }
  return items;
};

const generatePopularItems = (count: number) => {
  const items = [
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
    ...generateMenuItems(14.90, count - 5, true),
  ];
  return items;
};

const MENU_ITEMS = {
  menus: generateMenuItems(19.90, 25),
  popular: generatePopularItems(25),
};

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
      <div className="flex min-h-screen w-full bg-[#E6E6E6]">
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