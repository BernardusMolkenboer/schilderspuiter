import Layout from "../layout/DefaultLayout";
import HomeUpsSection from "@/components/home/HomeUpsSection";
import { HeroSection } from "@/components/ui/hero-section";
import { Features } from "@/components/sections/Features";
import OurServices from "@/components/sections/OurServices";
import CTASection from "@/components/sections/CTASection";
import ErrorSection from "@/components/sections/ErrorSection";

const error404 = () => {
  return (
    <>
      <Layout
        title="Professioneel Schilder- en Spuitwerk | Schilder-Spuiter.nl"
        description="Transformeer uw ruimte met onze professionele schilder- en spuitwerkdiensten. Wij bieden vakmanschap, snelle service en hoogwaardige resultaten voor particuliere en zakelijke projecten."
      >
        <ErrorSection />
      </Layout>
    </>
  );
};

export default error404;
