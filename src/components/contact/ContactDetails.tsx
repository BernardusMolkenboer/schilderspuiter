import {
  Phone,
  Mail,
  Clock,
  MapPin,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const provinces = [
  {
    name: "Flevoland",
    locations: ["Lelystad", "Almere", "Dronten", "Swifterbant", "Emmeloord"],
  },
  { name: "Noord-Holland", locations: ["Amsterdam", "Purmerend", "Volendam"] },
];

export default function ContactDetails() {
  const [openProvince, setOpenProvince] = useState<string | null>(null);

  const toggleProvince = (province: string) =>
    setOpenProvince(openProvince === province ? null : province);

  return (
    <div className="bg-muted/10 p-6 text-foreground">
      <h3 className="mb-4 text-lg font-semibold">Werkgebied</h3>
      {provinces.map((province, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleProvince(province.name)}
            className="flex w-full items-center justify-between text-primary"
          >
            {province.name}
            <ChevronDown
              className={`${
                openProvince === province.name ? "rotate-180" : ""
              }`}
            />
          </button>
          {openProvince === province.name && (
            <ul className="mt-2 space-y-2 pl-4">
              {province.locations.map((location, locIndex) => (
                <li key={locIndex} className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  {location}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
