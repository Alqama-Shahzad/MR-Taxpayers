import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-85"></div>
      </div>

      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-up">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Smooth FBR, NTN & Tax Compliance
            </h1>
          </div>
          
          <div className="fade-in-up stagger-1">
            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-medium text-white/90 mb-4">
              with Muhammad Rafay
            </h2>
          </div>
          
          <div className="fade-in-up stagger-2">
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Expert FBR registration, NTN processing, STRN filing, and comprehensive tax compliance services for individuals and businesses across Pakistan.
            </p>
          </div>
          
          <div className="fade-in-up stagger-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 text-lg"
            >
              Get Free Consultation
            </Button>
            
            <Button 
              onClick={scrollToServices}
              variant="outline"
              size="lg"
              className="border-white text-primary hover:bg-white/90 hover:text-primary font-semibold px-8 py-3 text-lg"
            >
              View Services
            </Button>
          </div>
          
          <div className="fade-in-up stagger-4 mt-8 sm:mt-12">
            <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-row sm:items-center sm:justify-center sm:space-y-0 sm:space-x-8 text-white/70 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold">100+</div>
                <div className="text-xs sm:text-sm">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold">5+</div>
                <div className="text-xs sm:text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold">24/7</div>
                <div className="text-xs sm:text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;