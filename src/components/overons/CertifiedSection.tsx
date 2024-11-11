import { Shield, Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "ISO 9001:2015",
    description: "Gecertificeerd voor kwaliteitsmanagement.",
  },
  {
    icon: Award,
    title: "VCA**",
    description: "Veiligheid, gezondheid en milieu.",
  },
  {
    icon: CheckCircle,
    title: "Erkend Leerbedrijf",
    description: "Officieel erkend door SBB.",
  },
];

export default function CertificationsSection() {
  return (
    <section className="bg-gray-50 py-24 transition-colors duration-300 dark:bg-neutral-900">
      <div className="container mx-auto max-w-screen-xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Certificeringen
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Kwaliteit gegarandeerd door officiële certificeringen
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="relative rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:bg-neutral-800"
              >
                <div className="absolute -top-4 left-6">
                  <div className="inline-flex items-center justify-center rounded-md bg-orange-600 p-3 shadow-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
