import Header from "@/components/Header"; // <-- Import the new Header
import Hero from "@/components/Hero";
import MissedCall from "@/components/MissedCall"; // <-- Assuming you created this
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import AadhaarVsDBT from "@/components/AadhaarVsDBT";
import FAQ from "@/components/FAQ";
import Impact from "@/components/Impact";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <MissedCall /> 
      <HowItWorks />
      <Features />
      <AadhaarVsDBT />
      <FAQ />
      <Impact />
      <TechStack />
      <Footer />
    </div>
  );
};

export default Index;