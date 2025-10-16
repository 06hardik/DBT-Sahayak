import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

const Impact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
                Making Real Impact
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                DBT-Sahayak aims to empower millions of students across India, ensuring no scholarship 
                is delayed due to lack of awareness or access.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-primary/5 rounded-lg p-6 border-2 border-primary/20">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Accessibility Goal</div>
                </div>
                <div className="bg-accent/5 rounded-lg p-6 border-2 border-accent/20">
                  <div className="text-4xl font-bold text-accent mb-2">Real-time</div>
                  <div className="text-sm text-muted-foreground">Verification Speed</div>
                </div>
                <div className="bg-success/5 rounded-lg p-6 border-2 border-success/20">
                  <div className="text-4xl font-bold text-success mb-2">Zero</div>
                  <div className="text-sm text-muted-foreground">Cost to Students</div>
                </div>
                <div className="bg-primary-light/5 rounded-lg p-6 border-2 border-primary-light/20">
                  <div className="text-4xl font-bold text-primary-light mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">AI Assistance</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-primary-glow rounded-2xl p-10 text-primary-foreground">
              <h3 className="text-3xl font-bold mb-6">
                Our Mission
              </h3>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Empowering Students Through Digital Financial Inclusion
              </p>
              <p className="mb-8 text-primary-foreground/80">
                DBT-Sahayak is dedicated to eliminating barriers in scholarship access by providing 
                instant verification and AI-powered guidance. We believe every student deserves 
                seamless access to their entitled benefits without technical complications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Try Verification
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button 
                  variant="hero-outline" 
                  size="lg"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Github className="w-5 h-5" />
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
