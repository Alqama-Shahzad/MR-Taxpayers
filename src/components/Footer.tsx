import { Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">MR</span>
              </div>
              <div className="ml-3">
                <div className="font-display font-bold text-lg">
                  Muhammad Rafay
                </div>
                <div className="text-sm text-secondary-foreground/80">
                  Tax & Compliance Services
                </div>
              </div>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed mb-6">
              Professional FBR, NTN, STRN, and tax compliance services for individuals and businesses across Pakistan. Trusted expertise with personalized solutions.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+923004881134"
                className="flex items-center space-x-2 text-secondary-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+92 300 4881134</span>
              </a>
              <a 
                href="mailto:mrtaxpayers12@gmail.com"
                className="flex items-center space-x-2 text-secondary-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  NTN Registration
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  STRN & Sales Tax
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Income Tax Returns
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  E-Invoicing Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://iris.fbr.gov.pk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  IRIS Portal
                </a>
              </li>
              <li>
                <a 
                  href="https://taxasaan.fbr.gov.pk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Tax Asaan App
                </a>
              </li>
              <li>
                <a 
                  href="https://sms.fbr.gov.pk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  SMS ATL Service
                </a>
              </li>
              <li>
                <a 
                  href="tel:051111772227" 
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  FBR Helpline: 051-111-772-227
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-secondary-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 MR Taxpayers. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-secondary-foreground/60 text-sm">Get in touch:</span>
              <a 
                href="https://wa.me/923004881134" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;