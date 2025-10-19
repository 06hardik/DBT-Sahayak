import { Keyboard, FileCheck, BrainCircuit } from "lucide-react";

// The new, simplified steps array. No jargon, just clear actions.
const steps = [
  {
    icon: <Keyboard size={32} />,
    title: "1. Enter Your Aadhaar",
    description: "Securely provide your 12-digit Aadhaar number to begin the verification process.",
  },
  {
    icon: <FileCheck size={32} />,
    title: "2. Get Instant Status",
    description: "Receive an immediate, color-coded result—Green (Ready), Yellow (Unconfirmed), or Red (Action Needed).",
  },
  {
    icon: <BrainCircuit size={32} />,
    title: "3. Receive AI Guidance",
    description: "If there's an issue, our AI Sahayak provides clear, step-by-step instructions to help you resolve it.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Get Your Status in 3 Simple Steps
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Our entire process is designed to be fast, clear, and helpful.
          </p>
        </div>

        {/* Simplified 3-column layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line for desktop view */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2">
             <div className="w-full h-full bg-slate-200" />
          </div>

          <div className="grid md:grid-cols-3 gap-10 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative flex items-center justify-center h-20 w-20 mx-auto bg-white border-2 border-slate-200 text-blue-600 rounded-full shadow-lg z-10">
                  {step.icon}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-800">
                  {step.title}
                </h3>
                <p className="mt-2 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;