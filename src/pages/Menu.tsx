import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { ContactInfo } from "@/components/common/ContactInfo";

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
};

const Menu = () => {
  const [loading, setLoading] = useState(true);
  const [showContactInfo, setShowContactInfo] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulierte Ladezeit

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setShowContactInfo(position < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-white">
      <ContactInfo
        address={MOCK_DATA.address}
        phone={MOCK_DATA.phone}
        openingHours={MOCK_DATA.openingHours}
        visible={showContactInfo}
      />
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Unsere Speisekarte</h1>
        {/* Hier kommen die Menükategorien */}
      </div>
    </div>
  );
};

export default Menu;