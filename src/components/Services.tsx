import { FileText, Calculator, Receipt, Shield, CheckCircle, CreditCard } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: FileText,
      titleKey: "services.ntn.title",
      descKey: "services.ntn.desc"
    },
    {
      icon: Calculator,
      titleKey: "services.strn.title",
      descKey: "services.strn.desc"
    },
    {
      icon: Receipt,
      titleKey: "services.income.title",
      descKey: "services.income.desc"
    },
    {
      icon: CreditCard,
      titleKey: "services.einvoicing.title",
      descKey: "services.einvoicing.desc"
    },
    {
      icon: Shield,
      titleKey: "services.audit.title",
      descKey: "services.audit.desc"
    },
    {
      icon: CheckCircle,
      titleKey: "services.verification.title",
      descKey: "services.verification.desc"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.titleKey}
                className={`card-hover card-shadow bg-card border-0 fade-in-up stagger-${index + 1} p-4 sm:p-6`}
              >
                <CardHeader className="text-center pb-3 sm:pb-4 px-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-lg sm:text-xl text-foreground">
                    {t(service.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center px-0">
                  <CardDescription className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {t(service.descKey)}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 fade-in-up stagger-6">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? We're here to help with specialized tax and compliance requirements.
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
            Discuss Your Requirements →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;