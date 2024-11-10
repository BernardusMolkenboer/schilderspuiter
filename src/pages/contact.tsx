import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactDetails from "@/components/contact/ContactDetails";
import Layout from "../layout/DefaultLayout";

export default function ContactPage() {
  return (
    <Layout
      title="Neem Contact Op"
      description="Wij staan klaar om u te helpen bij al uw vragen en projecten."
    >
      <ContactHero />
      <section className="mx-auto my-16 grid max-w-screen-xl gap-12 px-6 lg:grid-cols-2 lg:gap-24">
        <ContactForm />
        <ContactDetails />
      </section>
    </Layout>
  );
}
