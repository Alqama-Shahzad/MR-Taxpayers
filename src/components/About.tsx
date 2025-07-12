import rafayPhoto from "@/assets/rafay-photo.jpg";
import { Award, Users, Clock, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="fade-in-up">
            <div className="relative">
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <img 
                  src={rafayPhoto}
                  alt="Muhammad Rafay - Tax Consultant" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="fade-in-up stagger-1">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              {t('about.subtitle')}
            </p>
            
            <div className="space-y-4 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-foreground">100+</div>
                  <div className="text-sm text-muted-foreground">{t('about.clients')}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-foreground">5+</div>
                  <div className="text-sm text-muted-foreground">{t('about.experience')}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />   
                </div>
                <div>
                  <div className="font-bold text-2xl text-foreground">99%</div>
                  <div className="text-sm text-muted-foreground">{t('about.success')}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-accent/50 rounded-lg p-6 border border-primary/10">
              <div className="flex items-center space-x-3">
                <Shield className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Trusted by 500+ Clients</div>
                  <div className="text-sm text-muted-foreground">
                    Certified FBR consultant with proven track record in tax compliance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;