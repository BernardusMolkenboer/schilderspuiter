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
    locations: [
      "Lelystad",
      "Almere",
      "Dronten",
      "Swifterbant",
      "Emmeloord",
      "Biddinghuizen",
      "Zeewolde",
    ],
  },
  {
    name: "Noord-Holland",
    locations: ["Amsterdam", "Purmerend", "Beemster", "Volendam", "Het Gooi"],
  },
  {
    name: "Gelderland",
    locations: [
      "Harderwijk",
      "Ermelo",
      "Nijkerk",
      "Putten",
      "Barneveld",
      "Epe",
      "Hattem",
      "Vaassen",
    ],
  },
  {
    name: "Bonaire",
    locations: ["Bonaire"],
  },
];

export default function ContactDetails() {
  const [openProvince, setOpenProvince] = useState<string | null>(null);

  const toggleProvince = (province: string) =>
    setOpenProvince(openProvince === province ? null : province);

  return (
    <div className="rounded-xl bg-muted/10 p-8 shadow-md lg:p-12">
      <div className="flex flex-col space-y-12">
        {/* Header Section */}
        <div>
          <h1 className="mb-4 text-3xl font-bold text-foreground">Contact</h1>
          <p className="text-lg text-muted-foreground">
            Wij staan voor u klaar om al uw vragen te beantwoorden en u te
            helpen bij het realiseren van uw project.
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {[
            {
              icon: Phone,
              title: "Telefoon",
              content: "+31 (0)85 2129613",
              link: "tel:+31852129613",
            },
            {
              icon: Mail,
              title: "Email",
              content: "info@schilder-spuiter.nl",
              link: "mailto:info@schilder-spuiter.nl",
            },
            {
              icon: MapPin,
              title: "Adres",
              content: "Straatnaam 123, 1234 AB Amsterdam",
            },
            {
              icon: Clock,
              title: "Openingstijden",
              content: "Ma - Vr: 08:00 - 18:00\nZa: Op afspraak\nZo: Gesloten",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="whitespace-pre-line text-muted-foreground">
                    {item.content}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Service Area Section */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-foreground">
            Werkgebied
          </h3>
          {provinces.map((province, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleProvince(province.name)}
                className="flex w-full items-center justify-between text-muted-foreground transition-colors hover:text-foreground"
              >
                {province.name}
                <ChevronDown
                  className={`transform transition-transform ${
                    openProvince === province.name ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openProvince === province.name && (
                <ul className="mt-2 space-y-2 pl-4">
                  {province.locations.map((location, locIndex) => (
                    <li
                      key={locIndex}
                      className="flex items-center text-muted-foreground hover:text-foreground"
                    >
                      <ArrowRight className="mr-2 h-4 w-4" />
                      {location}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
