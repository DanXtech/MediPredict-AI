import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import BrainIcon from "../assets/brain-illustration-12-svgrepo-com.svg";
import { navItems } from '../Data';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Updated handleNavClick to handle mobile menu
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

  // Prevent scroll when mobile menu is open
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
    <header className={` fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="lg:px-16 px-5 py-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={BrainIcon} alt="MediPredict AI" className="h-8 w-8 mr-2" />
            <span className={`
              text-xl font-bold transition-colors duration-300
              ${isScrolled ? "text-cyan-600" : "text-white"}
            `}>
              MediPredict AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => handleNavClick(item.sectionId)}
                className={`
                  font-medium transition-all duration-300 cursor-pointer
                  ${isScrolled 
                    ? "text-gray-600 hover:text-cyan-600" 
                    : "text-white hover:text-gray-300"
                  }
                `}
              >
                {item.NavName}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-white transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } z-40`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 ">
          {navItems.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => handleNavClick(item.sectionId)}
              className="text-xl text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
            >
              {item.NavName}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;