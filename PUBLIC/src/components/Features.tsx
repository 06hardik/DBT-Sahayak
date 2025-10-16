import { Card, CardContent } from "@/components/ui/card";
import { PhoneCall, MessageSquare, BarChart3, Bot, Shield, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: PhoneCall,
      title: "Missed Call Verification",
      description: "Simply give a missed call and receive instant SMS with your DBT-Aadhaar status. No internet required.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: MessageSquare,
      title: "Interactive IVR System",
      description: "Voice-guided verification process accessible from any phone, ensuring no student is left behind.",
      color: "text-primary-light",
      bgColor: "bg-primary-light/10"
    },
    {
      icon: Bot,
      title: "AI-Powered Sahayak",
      description: "Gemini-powered assistant provides conversational Q&A, personalized scripts, and dynamic audio guides.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: BarChart3,
      title: "Real-Time Dashboard",
      description: "Government officials get live insights on verification trends, regional hotspots, and failure rates.",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Shield,
      title: "Secure & Anonymous",
      description: "All data is anonymized and securely processed through NPCI Aadhaar Mapper API.",
      color: "text-primary-glow",
      bgColor: "bg-primary-glow/10"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get color-coded status in seconds with step-by-step guidance to resolve any issues.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need for seamless DBT-Aadhaar verification and management
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
