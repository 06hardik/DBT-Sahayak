import { useState } from "react"; // <-- Import useState
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircleQuestion } from "lucide-react"; // Corrected icon name
import GeneralAIChatModal from "@/components/GeneralAIChatModal"; // <-- Import the new modal component

const faqs = [
  {
    question: "Is my Aadhaar and banking information secure?",
    answer: "Absolutely. We use official, secure government APIs for verification. Your Aadhaar number is never stored on our servers. The entire process is encrypted, confidential, and built with privacy as the highest priority."
  },
  {
    question: "What is the difference between 'Linked' and 'DBT-Enabled'?",
    answer: "A 'linked' account only uses Aadhaar for identity (KYC). A 'DBT-Enabled' (or seeded) account is the only one authorized to receive government scholarship funds. This tool specifically checks if your account is correctly DBT-Enabled."
  },
  {
    question: "What should I do if my account is not ready?",
    answer: "If your status is Red or Yellow, you must visit your bank branch. Ask them to fill the 'Aadhaar Seeding Consent Form' for DBT. Our AI Sahayak can provide you with a step-by-step script to use at the bank."
  },
  {
    question: "Is this service really free?",
    answer: "Yes. DBT-Sahayak is a social initiative. Our service is 100% free for all students to use, whether through the website or the missed-call feature."
  },
  {
    question: "Can I use this without a smartphone or internet?",
    answer: "Yes. The missed-call service is designed specifically for this purpose. Give a missed call to our number, and you will receive an automated call back to guide you through the verification process."
  },
];

const FAQ = () => {
  // State to manage whether the modal is open or closed
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <> {/* Use a Fragment to wrap the section and the modal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                Answers to Your Questions
              </h2>
              <p className="mt-4 text-xl text-slate-600">
                Everything you need to know to feel confident and secure.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="bg-slate-50 border-2 border-slate-200 rounded-lg px-6 data-[state=open]:border-blue-500 transition-all"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-5">
                        <span className="font-semibold text-lg text-slate-800">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 pb-5 text-base leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-slate-100 border-2 border-slate-200 rounded-lg p-8 h-full">
                  <div className="flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                      <MessageCircleQuestion size={32} /> {/* Corrected icon name */}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Still have questions?
                  </h3>
                  <p className="text-slate-600 mb-6">
                    If you can't find the answer you're looking for, our AI assistant is ready to help you with any specific query you have.
                  </p>
                  {/* This button now controls the modal state */}
                  <Button 
                    className="w-full py-6 text-lg font-bold"
                    onClick={() => setIsModalOpen(true)} // Open the modal on click
                  >
                    Ask AI Sahayak
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Render the modal component, controlling its visibility with state */}
      <GeneralAIChatModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default FAQ;