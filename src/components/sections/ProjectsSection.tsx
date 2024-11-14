import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Kantoorpand Amsterdam",
    description: "14 Etages gespoten met duurzame latex coating.",
    image: "/images/bedrijfspand-amsterdam-verfspuiten.png",
    category: "Bedrijfspand",
  },
  {
    title: "Appartementencomplex Rotterdam",
    description: "Renovatie spuitwerk voor 24 woningen.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    category: "Woningbouw",
  },
  {
    title: "Nieuwbouw Woningen",
    description: "Coating van 250m² wandoppervlak/ woning",
    image: "/images/buiten-gevel-voorbereiding.png",
    category: "Nieuwbouw",
  },
];

function ProjectsSection() {
  return (
    <section className="bg-gray-50 py-24 transition-colors duration-300 dark:bg-neutral-900">
      <div className="container mx-auto max-w-screen-xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
            Recente Projecten
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Ontdek enkele van onze recent voltooide verfspuitprojecten.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-neutral-800"
            >
              {/* Project Image */}
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-sm text-white">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                <a
                  href="mailto:info@verfspuitenservice.nl"
                  className="inline-flex items-center font-semibold text-primary transition-colors hover:text-primary/90"
                >
                  Meer informatie
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
