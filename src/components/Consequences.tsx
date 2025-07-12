import { AlertTriangle, Ban, Lock, Gavel, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const Consequences = () => {
  const { t } = useLanguage();

  const consequences = [
    {
      id: "financial",
      icon: TrendingDown,
      title: t('consequences.financial.title'),
      content: t('consequences.financial.content'),
      items: t('consequences.financial.items')
    },
    {
      id: "restrictions", 
      icon: Ban,
      title: t('consequences.restrictions.title'),
      content: t('consequences.restrictions.content'),
      items: t('consequences.restrictions.items')
    },
    {
      id: "legal",
      icon: Gavel,
      title: t('consequences.legal.title'), 
      content: t('consequences.legal.content'),
      items: t('consequences.legal.items')
    },
    {
      id: "opportunities",
      icon: Lock,
      title: t('consequences.opportunities.title'),
      content: t('consequences.opportunities.content'), 
      items: t('consequences.opportunities.items')
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-destructive mr-3" />
            <h2 className="text-4xl font-bold text-foreground">
              {t('consequences.title')}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('consequences.subtitle')}
          </p>
        </div>

        {/* Consequences Grid */}
        <div className="max-w-4xl mx-auto mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {consequences.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <AccordionItem 
                  key={item.id} 
                  value={item.id}
                  className="border border-border/50 rounded-xl overflow-hidden bg-gradient-to-r from-card to-muted/20 shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center gap-4 w-full">
                      <div className="p-3 rounded-lg bg-destructive/10 text-destructive group-hover:bg-destructive/20 transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="ml-16">
                      <ul className="space-y-3">
                        {(Array.isArray(item.items) ? item.items : []).map((listItem: string, itemIndex: number) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in-up">
          <div className="bg-gradient-to-r from-card to-muted/30 rounded-2xl p-8 border border-border/50 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('consequences.cta.title')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('consequences.cta.subtitle')}
            </p>
            <Button 
              size="lg"
              className="premium-button text-lg px-8 py-3"
              onClick={scrollToContact}
            >
              {t('consequences.cta.button')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consequences;