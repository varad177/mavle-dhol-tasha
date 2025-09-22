import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import logo from "../assets/main_logo.png"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', marathi: 'मुख्य पृष्ठ' },
    { name: 'About Us', path: '/about', marathi: 'आमच्याबद्दल' },
    { name: 'Gallery', path: '/gallery', marathi: 'गॅलरी' },
    { name: 'Events', path: '/events', marathi: 'कार्यक्रम' },
    { name: 'Contact', path: '/contact', marathi: 'संपर्क' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-cultural">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-cultural">
            <div className="w-16 h-16 gradient-saffron rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg rounded-full "><img src={logo} alt="logo" /></span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-marathi font-semibold text-lg text-primary">
                मावळे आम्ही ढोल ताशांचे
              </h1>
              <p className="text-xs text-muted-foreground font-english">
                Traditional Dhol-Tasha Pathak
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-english font-medium transition-cultural ${
                  isActive(item.path)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="default" 
              size="sm" 
              className="gradient-saffron hover:scale-105 transition-cultural shadow-cultural"
              asChild
            >
              <Link to="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Book Now
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-accent"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2">
            <div className="space-y-2 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-lg font-english transition-cultural ${
                    isActive(item.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-accent'
                  }`}
                >
                  <span className="font-medium">{item.name}</span>
                  <span className="block text-sm font-marathi opacity-70">
                    {item.marathi}
                  </span>
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full gradient-saffron shadow-cultural"
                  asChild
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Phone className="w-4 h-4 mr-2" />
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;