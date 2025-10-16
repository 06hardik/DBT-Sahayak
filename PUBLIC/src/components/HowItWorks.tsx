import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Awareness & Action",
      description: "Student initiates verification via missed call, SMS, or web portal",
      studentAction: "Student uses Missed Call/Web",
      govtAction: "Makes secure, real-time call to NPCI Aadhaar Mapper"
    },
    {
      number: "02",
      title: "Input & Verification",
      description: "Student enters Aadhaar number, system verifies with NPCI API",
      studentAction: "Enter Aadhaar number",
      govtAction: "Backend calls NPCI API for verification"
    },
    {
      number: "03",
      title: "Status Check",
      description: "Receive color-coded status indicating DBT enablement",
      studentAction: "Get instant status result",
      govtAction: "Log anonymized data for analytics"
    },
    {
      number: "04",
      title: "AI-Powered Sahayak",
      description: "Get personalized guidance and support from AI assistant",
      studentAction: "Chat for help & guidance",
      govtAction: "Gemini analyzes data for insights"
    },
    {
      number: "05",
      title: "Data Logging & Insights",
      description: "System generates AI-powered analytics for government officials",
      studentAction: "Anonymized data stored",
      govtAction: "Generate automated summaries & alerts"
    },
    {
      number: "06",
      title: "Outcome",
      description: "Student empowered, Government gets actionable insights",
      studentAction: "Issue resolved successfully",
      govtAction: "DoSJE gets targeted intervention data"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A seamless 6-step journey from verification to resolution, empowering students 
              and enabling proactive governance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative bg-card border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex gap-4 mb-4">
                  <div className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3 ml-20">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Student Journey</div>
                      <div className="text-sm text-muted-foreground">{step.studentAction}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Backend System</div>
                      <div className="text-sm text-muted-foreground">{step.govtAction}</div>
                    </div>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
