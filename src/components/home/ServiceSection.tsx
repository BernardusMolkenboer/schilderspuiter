import React from "react";

function ServiceSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-extrabold text-gray-900">
          Voordelen van Verfspuiten
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Benefit 1 */}
          <BenefitItem
            title="Efficiënte Applicatie"
            description="Snelle en gelijkmatige verfapplicatie voor grote oppervlakken met professionele spuitapparatuur."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4H8l4-8v4h3l-4 8z"
                />
              </svg>
            }
          />

          {/* Benefit 2 */}
          <BenefitItem
            title="Strak Resultaat"
            description="Perfecte dekking en professionele afwerking zonder kwaststrepen of rolbanen."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c1.657 0 3 1.567 3 3.5S13.657 15 12 15s-3-1.567-3-3.5S10.343 8 12 8z"
                />
              </svg>
            }
          />

          {/* Benefit 3 */}
          <BenefitItem
            title="Optimale Verfverdeling"
            description="Gelijkmatige laagdikte voor maximale bescherming en duurzaamheid."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 10h16M4 14h8"
                />
              </svg>
            }
          />

          {/* Benefit 4 */}
          <BenefitItem
            title="Tijdbesparing"
            description="Significant sneller dan traditioneel schilderwerk, vooral bij grote oppervlakken."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10l4.586-4.586a2 2 0 10-2.828-2.828L12 7.172 7.414 2.586A2 2 0 104.586 5.414L10 10l-5.414 5.414a2 2 0 102.828 2.828L12 12.828l4.586 4.586a2 2 0 102.828-2.828L15 10z"
                />
              </svg>
            }
          />

          {/* Benefit 5 */}
          <BenefitItem
            title="Alle Ondergronden"
            description="Geschikt voor hout, metaal, kunststof en minerale ondergronden."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 12h4m0 0H9m5 0a5 5 0 110 10 5 5 0 010-10zm-1 6h2"
                />
              </svg>
            }
          />

          {/* Benefit 6 */}
          <BenefitItem
            title="Precisiewerk"
            description="Nauwkeurige controle over verfapplicatie voor perfect resultaat."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c1.657 0 3 1.567 3 3.5S13.657 15 12 15s-3-1.567-3-3.5S10.343 8 12 8z"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}

function BenefitItem({ title, description, icon }: any) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="rounded-full bg-blue-100 p-3 text-blue-500">{icon}</div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default ServiceSection;
