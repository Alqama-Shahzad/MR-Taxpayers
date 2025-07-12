import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Crown, Star, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const pricingPlans = [
  {
    name: "Basic",
    price: "5,000",
    period: "PKR",
    description: "Perfect for individuals and freelancers",
    icon: Zap,
    features: [
      "NTN Registration",
      "Income Tax Return Filing",
      "Basic Tax Consultation",
      "Document Verification",
      "Email Support"
    ],
    featured: false
  },
  {
    name: "Professional",
    price: "10,000",
    period: "PKR",
    description: "Ideal for small businesses and AOPs",
    icon: Crown,
    features: [
      "Everything in Basic",
      "STRN Registration & Filing",
      "E-Invoicing Setup",
      "Quarterly Tax Planning",
      "FBR Notice Support",
      "Priority WhatsApp Support",
      "Track & Trace Setup"
    ],
    featured: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Quote",
    description: "Complete solution for companies",
    icon: Star,
    features: [
      "Everything in Professional",
      "Monthly Tax Planning Sessions",
      "Dedicated Tax Consultant",
      "Audit Support & Representation",
      "Custom Invoicing Solutions",
      "24/7 Priority Support",
      "Compliance Monitoring",
      "Multi-location Support"
    ],
    featured: false
  }
];

const Pricing = () => {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-accent/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
              <Crown className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {t('pricing.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('pricing.subtitle')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={plan.name}
                className={`pricing-card rounded-2xl p-4 sm:p-6 relative overflow-hidden fade-in-scale stagger-${index + 1} ${
                  plan.featured ? 'featured ring-2 ring-primary/20' : ''
                }`}
              >
                {plan.featured && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                      {t('pricing.most_popular')}
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 mx-auto ${
                    plan.featured ? 'bg-white/20' : 'bg-primary/10'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${
                      plan.featured ? 'text-white' : 'text-primary'
                    }`} />
                  </div>
                  
                  <CardTitle className={`font-heading text-xl mb-2 ${
                    plan.featured ? 'text-white' : 'text-foreground'
                  }`}>
                    {plan.name}
                  </CardTitle>
                  
                  <div className="flex items-baseline justify-center mb-3">
                    <span className={`text-3xl font-bold font-display ${
                      plan.featured ? 'text-white' : 'text-foreground'
                    }`}>
                      {plan.price === "Custom" ? plan.price : plan.price.toLocaleString()}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className={`text-sm ml-1 ${
                        plan.featured ? 'text-white/80' : 'text-muted-foreground'
                      }`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  
                  <p className={`text-xs ${
                    plan.featured ? 'text-white/80' : 'text-muted-foreground'
                  }`}>
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-3">
                  <ul className="space-y-2 mb-6">
                    {plan.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${
                          plan.featured ? 'text-white' : 'text-primary'
                        }`} />
                        <span className={`text-xs leading-relaxed ${
                          plan.featured ? 'text-white/90' : 'text-foreground'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                    {plan.features.length > 4 && (
                      <li className={`text-xs ${
                        plan.featured ? 'text-white/70' : 'text-muted-foreground'
                      }`}>
                        +{plan.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  <Button 
                    onClick={scrollToContact}
                    size="sm"
                    className={`w-full font-medium rounded-xl transition-all duration-300 ${
                      plan.featured 
                        ? 'bg-white text-primary hover:bg-white/90' 
                        : 'premium-button text-primary-foreground'
                    }`}
                    >
                      {plan.price === "Custom" ? t('pricing.get_quote') : t('pricing.choose_plan')}
                    </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;