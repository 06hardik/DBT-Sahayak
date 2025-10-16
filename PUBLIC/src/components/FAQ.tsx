import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the difference between Aadhaar-linked and DBT-enabled accounts?",
      answer: "An Aadhaar-linked account simply has your Aadhaar number associated with it. A DBT-enabled account is specifically registered with NPCI for receiving Direct Benefit Transfers from government schemes. Your account must be DBT-enabled to receive scholarships and subsidies."
    },
    {
      question: "How do I check if my account is DBT-enabled?",
      answer: "You can check your DBT status through DBT-Sahayak by giving a missed call to our helpline, sending an SMS, or using our web portal. You'll receive instant verification of your DBT status."
    },
    {
      question: "My account shows as not DBT-ready. What should I do?",
      answer: "If your account is not DBT-enabled, visit your bank branch with your Aadhaar card and request DBT activation. Our AI Sahayak can help you draft a proper application and guide you through the process."
    },
    {
      question: "Is this service free for students?",
      answer: "Yes, DBT-Sahayak is completely free for all students. You can verify your status via missed call, SMS, or web portal at zero cost."
    },
    {
      question: "How long does it take to get verification results?",
      answer: "Verification results are instant! You'll receive your DBT status immediately via SMS or on the web portal after submitting your request."
    },
    {
      question: "Can I use this service if I don't have internet access?",
      answer: "Absolutely! You can give a missed call to our helpline number or send an SMS to check your DBT status without internet connectivity."
    },
    {
      question: "What information do I need to provide for verification?",
      answer: "You need your Aadhaar number and mobile number registered with Aadhaar for verification. The process is simple and secure."
    },
    {
      question: "Will my scholarship be delayed if my account is not DBT-enabled?",
      answer: "Yes, scholarships and government subsidies can only be transferred to DBT-enabled accounts. It's crucial to ensure your account is DBT-ready before scholarship disbursement dates."
    },
    {
      question: "How does the AI Sahayak help me?",
      answer: "AI Sahayak provides personalized guidance in your preferred language. It can help you understand the verification process, draft bank applications, suggest required documents, and answer all your DBT-related queries."
    },
    {
      question: "Is my Aadhaar and banking information secure?",
      answer: "Yes, we follow strict security protocols. Your data is encrypted and used only for verification purposes. We never store sensitive banking information permanently."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about DBT-Aadhaar verification and our services
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border-2 rounded-lg px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
