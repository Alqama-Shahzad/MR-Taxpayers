import logo1 from "@/assets/1.jpg";
import logo2 from "@/assets/2.png";
import logo3 from "@/assets/3.png";
import logo4 from "@/assets/4.png";

const Marquee = () => {
  const logos = [
    { src: logo1, alt: "Partner Logo 1" },
    { src: logo2, alt: "Partner Logo 2" },
    { src: logo3, alt: "Partner Logo 3" },
    { src: logo4, alt: "Partner Logo 4" },
  ];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Trusted Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We work with leading organizations to provide the best tax compliance services
          </p>
        </div>
        
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Marquee container */}
          <div className="marquee-container">
            <div className="marquee-content">
              {/* Multiple sets of logos for seamless infinite loop */}
              {Array.from({ length: 4 }).map((_, setIndex) => (
                logos.map((logo, index) => (
                  <div key={`set-${setIndex}-${index}`} className="marquee-item">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-8 sm:h-12 md:h-16 w-auto object-contain transition-all duration-300"
                    />
                  </div>
                ))
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          .marquee-container {
            width: 100%;
            overflow: hidden;
          }
          
          .marquee-content {
            display: flex;
            animation: marquee 30s linear infinite;
            width: calc(400%);
          }
          
          .marquee-item {
            flex: 0 0 auto;
            padding: 0 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 120px;
          }
          
          @media (min-width: 640px) {
            .marquee-item {
              padding: 0 1.5rem;
              min-width: 160px;
            }
          }
          
          @media (min-width: 768px) {
            .marquee-item {
              padding: 0 2rem;
              min-width: 200px;
            }
          }
          
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-25%);
            }
          }
          
          .marquee-content:hover {
            animation-play-state: paused;
          }
        `
      }} />
    </section>
  );
};

export default Marquee;