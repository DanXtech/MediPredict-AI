
import { useEffect, useState } from "react";
import BrainIcon from "../assets/brain-illustration-12-svgrepo-com.svg";
import { footerFirstItems } from "../Data";

const Footer = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const handleNavClick = (sectionId) => {
        // First close the mobile menu
        setIsMenuOpen(false);
        
        // Small delay to ensure smooth transition
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100); // Small delay to allow menu animation to complete
      };

        useEffect(() => {
          if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
          } else {
            document.body.style.overflow = 'unset';
          }
          return () => {
            document.body.style.overflow = 'unset';
          };
        }, [isMenuOpen]);
    
  return (
    <footer className="bg-[#0B0B1F] text-white py-12">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-5 pt-24  lg:px-16 px-5">
          {/* Logo and Description Column */}
          <div
          data-aos="fade-right"
          data-aos-delay="300"
          >
            <div className="flex items-center">
              <img src={BrainIcon} alt="MediPredict AI" className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold text-cyan-600">
                MediPredict AI
              </span>
            </div>
            <p className="mt-4 text-gray-400">
              Easy life in technology all over the word
            </p>
          </div>

          {/* Product Column */}
          <div 
          data-aos="fade-right"
          data-aos-delay="300"
          >
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            {footerFirstItems.map((item) => (
                <ul className="space-y-2" key={item}>
                    <li 
                    key={item.sectionId}
                    onClick={() => handleNavClick(item.sectionId)}
                    ><span  className="text-gray-400 hover:text-white cursor-pointer">{item.Footer}</span></li>
                </ul>
            ))}
           
          </div>

          {/* Company Column */}
          <div
          data-aos="fade-right"
         data-aos-delay="300"
          >
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#careers" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div 
          data-aos="fade-right"
          data-aos-delay="300"
          >
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#privacy" className="text-gray-400 hover:text-white">Privacy</a></li>
              <li><a href="#terms" className="text-gray-400 hover:text-white">Terms</a></li>
              <li><a href="#security" className="text-gray-400 hover:text-white">Security</a></li>
              <li><a href="#compliance" className="text-gray-400 hover:text-white">Compliance</a></li>
            </ul>
          </div>


        </div>

        <div className="lg:px-16 px-5 py-10">
            <h2 className="text-2xl lg:text-4xl lg:text-center"
            data-aos="fade-right"
            data-aos-delay="300"
            >Transforming healthcare with intelligent predictions and <br className="hidden lg:block" /> FHIR integration.</h2>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center"
        data-aos="fade-in"
        data-aos-delay="300"
        >
          <p className="text-gray-400"
          >Copyright © MediPredict {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;