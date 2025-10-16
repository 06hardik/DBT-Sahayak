import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-dbt.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Students using digital banking services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary-glow/80" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary-foreground/20">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-primary-foreground text-sm font-medium">Smart India Hackathon 2025</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
            DBT-Sahayak
          </h1>
          
          <p className="text-2xl sm:text-3xl font-semibold mb-4 text-primary-foreground/95">
            Your Digital Assistant for Aadhaar-DBT Verification
          </p>
          
          <p className="text-lg sm:text-xl mb-8 text-primary-foreground/80 max-w-2xl">
            Instantly verify your DBT-Aadhaar seeding status through missed call, SMS, or web portal. 
            Empowering students with AI-powered guidance for seamless scholarship access.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg">
              <Smartphone className="w-5 h-5" />
              Verify Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-lg bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground">
              <PhoneCall className="w-5 h-5" />
              Give a Missed Call
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-primary-foreground mb-1">Instant</div>
              <div className="text-primary-foreground/80">Real-time Verification</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-primary-foreground mb-1">Zero Cost</div>
              <div className="text-primary-foreground/80">Free for All Students</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-primary-foreground mb-1">AI-Powered</div>
              <div className="text-primary-foreground/80">Smart Assistance</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
