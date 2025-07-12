import { useLanguage } from "@/contexts/LanguageContext";

const FloatingLanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ur' : 'en');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <div className="relative group">
        <button
          onClick={toggleLanguage}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/95 hover:bg-primary text-primary-foreground rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-white/20 flex items-center justify-center text-xs sm:text-sm font-bold hover:scale-105 group"
          aria-label="Change language"
        >
          {language === 'en' ? 'EN' : 'اردو'}
        </button>
        
        {/* Tooltip - hidden on mobile */}
        <div className="hidden sm:block absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-lg">
            Change language to {language === 'en' ? 'اردو' : 'English'}
            <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingLanguageSelector;