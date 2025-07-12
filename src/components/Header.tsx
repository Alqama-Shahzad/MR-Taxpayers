import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import rafayLogo from "@/assets/rafay-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center group">
              <div className="w-12 h-12 rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-secondary p-1 transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                  <img 
                    src={rafayLogo}
                    alt="MR Taxpayers Logo"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="ml-3 sm:ml-4">
                <div className="font-display font-bold text-lg sm:text-xl text-foreground tracking-tight">
                  MR Taxpayers
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                  Tax & Compliance Services
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection('home')}
              className="px-4 py-2 rounded-xl text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-300 font-medium text-sm relative group"
            >
              <span className="relative z-10">{t('nav.home')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="px-4 py-2 rounded-xl text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-300 font-medium text-sm relative group"
            >
              <span className="relative z-10">{t('nav.services')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-4 py-2 rounded-xl text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-300 font-medium text-sm relative group"
            >
              <span className="relative z-10">{t('nav.about')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="px-4 py-2 rounded-xl text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-300 font-medium text-sm relative group"
            >
              <span className="relative z-10">{t('nav.pricing')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 rounded-xl text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-300 font-medium text-sm relative group"
            >
              <span className="relative z-10">{t('nav.contact')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="premium-button text-primary-foreground font-semibold px-6 py-2.5 rounded-2xl text-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t('cta.consultation')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:bg-accent/50 rounded-xl p-2 transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden glass-effect border-t border-border/30 animate-fade-in">
            <div className="px-4 py-6 space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-accent/50 rounded-xl font-medium transition-all duration-300"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-accent/50 rounded-xl font-medium transition-all duration-300"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-accent/50 rounded-xl font-medium transition-all duration-300"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-accent/50 rounded-xl font-medium transition-all duration-300"
              >
                {t('nav.pricing')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-accent/50 rounded-xl font-medium transition-all duration-300"
              >
                {t('nav.contact')}
              </button>
              <div className="pt-3">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full premium-button text-primary-foreground font-semibold py-3 rounded-2xl shadow-lg"
                >
                  {t('cta.consultation')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;