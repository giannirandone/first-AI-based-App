import { MapPin, Phone } from "lucide-react";

interface ContactInfoProps {
  address: string;
  phone: string;
  openingHours: {
    [key: string]: string;
  };
  visible: boolean;
}

export const ContactInfo = ({
  address,
  phone,
  openingHours,
  visible,
}: ContactInfoProps) => {
  const handleAddressClick = () => {
    window.open(`https://maps.google.com?q=${encodeURIComponent(address)}`);
  };

  const handlePhoneClick = () => {
    window.open(`tel:${phone}`);
  };

  return (
    <div
      className={`transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="p-4 bg-white shadow-sm">
        <div className="flex justify-between">
          <div className="space-y-2">
            <div
              className="flex items-center space-x-2 cursor-pointer text-primary"
              onClick={handleAddressClick}
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{address}</span>
            </div>
            <div
              className="flex items-center space-x-2 cursor-pointer text-primary"
              onClick={handlePhoneClick}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">{phone}</span>
            </div>
          </div>
          <div className="text-sm">
            {Object.entries(openingHours).map(([day, hours]) => (
              <div key={day} className="flex justify-between space-x-4">
                <span className="font-medium">{day}:</span>
                <span>{hours}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 mx-auto w-2/3 h-px bg-gray-200" />
      </div>
    </div>
  );
};