import Layout from "@/components/devity/Layout";
import Hero from "@/components/devity/Hero";
import TrustBar from "@/components/devity/TrustBar";
import WhyDevity from "@/components/devity/WhyDevity";
import Marquee from "@/components/devity/Marquee";
import ServicesPreview from "@/components/devity/ServicesPreview";
import WorkPreview from "@/components/devity/WorkPreview";
import ProcessTimeline from "@/components/devity/ProcessTimeline";

const Index = () => (
  <Layout>
    <Hero />
    <TrustBar />
    <WhyDevity />
    <Marquee />
    <ServicesPreview />
    <WorkPreview />
    <ProcessTimeline />
  </Layout>
);

export default Index;
