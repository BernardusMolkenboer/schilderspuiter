import { Mail, Phone, Clock } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative pb-24 pt-40 transition-colors duration-300 dark:bg-neutral-900">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-orange-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[800px] w-[800px] rounded-full bg-orange-400/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Neem Contact Met Ons Op
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Heeft u vragen of wilt u een offerte aanvragen? Wij staan voor u
            klaar en helpen u graag verder.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Phone,
              title: "Bel Ons",
              info: "+31 (0)85 2129613",
              link: "tel:+31852129613",
            },
            {
              icon: Mail,
              title: "Email",
              info: "info@schilder-spuiter.nl",
              link: "mailto:info@schilder-spuiter.nl",
            },
            {
              icon: Clock,
              title: "Openingstijden",
              info: "Ma - Vr: 08:00 - 18:00",
            },
          ].map((item, index) => {
            const Icon = item.icon;
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
                  {item.title}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="mt-4 block text-base text-orange-600 transition-colors hover:text-orange-500"
                  >
                    {item.info}
                  </a>
                ) : (
                  <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                    {item.info}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
