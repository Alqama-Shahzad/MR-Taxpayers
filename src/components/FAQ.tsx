import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's the difference between NTN and STRN?",
    answer: "NTN (National Tax Number) is required for all taxpayers and is used for income tax purposes. STRN (Sales Tax Registration Number) is specifically for businesses that need to collect and pay sales tax. Most businesses need both, but the requirements depend on your annual turnover and business type."
  },
  {
    question: "How long does NTN registration take?",
    answer: "With proper documentation, NTN registration typically takes 3-5 business days. We handle all the paperwork and FBR interactions to ensure a smooth process. Emergency processing is available for urgent cases."
  },
  {
    question: "Do I need to file tax returns if I'm salaried?",
    answer: "Yes, if your annual income exceeds PKR 600,000, you're required to file an annual income tax return. Even if your employer deducts tax at source, filing a return is mandatory and helps you claim any refunds due."
  },
  {
    question: "What documents do I need for STRN registration?",
    answer: "For STRN registration, you'll need: valid NTN, CNIC/passport copies, business registration documents, bank account details, and proof of business address. We'll provide a complete checklist based on your specific business type."
  },
  {
    question: "Do you provide accounting and bookkeeping services?",
    answer: "Yes, we offer comprehensive accounting services including bookkeeping, financial statement preparation, expense tracking, and business financial management. Our accounting services help ensure your records are accurate and compliant with regulatory requirements."
  },
  {
    question: "What are your service charges?",
    answer: "Our fees vary based on the service complexity and urgency. We offer transparent, competitive pricing with no hidden charges. Contact us for a free consultation and detailed quote for your specific requirements."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about tax registration, filing, and compliance requirements.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className={`bg-card border border-border rounded-lg px-6 fade-in-up stagger-${index + 1}`}
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12 fade-in-up stagger-6">
          <p className="text-muted-foreground mb-6">
            Still have questions? We're here to help with personalized guidance.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-primary hover:text-primary-light font-semibold underline decoration-2 underline-offset-4 transition-colors"
          >
            Ask Your Question →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;