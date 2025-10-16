import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import AadhaarVsDBT from "@/components/AadhaarVsDBT";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import TechStack from "@/components/TechStack";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <AadhaarVsDBT />
      <Features />
      <HowItWorks />
      <FAQ />
      <TechStack />
      <Impact />
      <Footer />
    </div>
  );
};

export default Index;
