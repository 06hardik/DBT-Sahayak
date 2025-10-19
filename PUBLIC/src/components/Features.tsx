import { Card, CardContent } from "@/components/ui/card";
import { Globe, Zap, BrainCircuit } from "lucide-react";

// The new, curated list of features focused on direct user benefits.
const features = [
  {
    icon: <Globe size={28} />,
    title: "Universal Access",
    description: "Whether you're online or on a basic phone with no internet, our service is accessible to every student, everywhere."
  },
  {
    icon: <Zap size={28} />,
    title: "Instant Clarity",
    description: "No more waiting or confusion. Get an immediate, clear, and color-coded answer about your DBT status in seconds."
  },
  {
    icon: <BrainCircuit size={28} />,
    title: "AI-Powered Guidance",
    description: "If there's an issue, our AI Sahayak provides simple, step-by-step instructions in your language to help you fix it."
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            A Service Designed for Every Student
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            We built DBT-Sahayak with three core principles in mind to ensure you get the help you need, without the hassle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white border-2 border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-slate-800">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;