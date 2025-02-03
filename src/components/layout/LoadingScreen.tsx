import { useEffect, useState } from "react";

interface LoadingScreenProps {
  minLoadTime?: number;
}

export const LoadingScreen = ({ minLoadTime = 150 }: LoadingScreenProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, minLoadTime);

    return () => clearTimeout(timer);
  }, [minLoadTime]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="animate-breathe">
        <img
          src="/placeholder.svg"
          alt="Pizzeria Logo"
          className="w-32 h-32 object-contain"
        />
      </div>
    </div>
  );
};