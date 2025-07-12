import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      titleKey: "howItWorks.step1.title",
      descKey: "howItWorks.step1.desc"
    },
    {
      number: "02", 
      titleKey: "howItWorks.step2.title",
      descKey: "howItWorks.step2.desc"
    },
    {
      number: "03",
      titleKey: "howItWorks.step3.title",
      descKey: "howItWorks.step3.desc"
    },
    {
      number: "04",
      titleKey: "howItWorks.step4.title",
      descKey: "howItWorks.step4.desc"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple 4-step process to get your tax compliance requirements sorted efficiently and professionally.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className={`relative fade-in-up stagger-${index + 1}`}>
                {/* Timeline Connector - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-20 w-0.5 h-16 bg-border"></div>
                )}
                
                <div className="flex lg:flex-col items-start lg:items-center text-left lg:text-center">
                  {/* Step Number Circle */}
                  <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-0 lg:mb-6 mr-6 lg:mr-0 flex-shrink-0">
                    <span className="font-bold text-lg text-primary-foreground">{step.number}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(step.descKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12 fade-in-up stagger-5">
          <p className="text-muted-foreground mb-6">
            Ready to get started? The process typically takes 3-7 business days.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center bg-primary hover:bg-primary-light text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start Your Application
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;