import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import logo from "../assets/main_logo.png"

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 gradient-saffron rounded-full flex items-center overflow-hidden justify-center">
                <span className="text-primary-foreground font-bold text-xl rounded-full "><img src={logo} alt="logo" /></span>
              </div>
              <div>
                <h3 className="font-marathi font-bold text-xl">
                  मावळे आम्ही ढोल ताशांचे
                </h3>
                <p className="text-sm opacity-90 font-marathi">
                  पथक नव्हे परंपरा
                </p>
              </div>
            </div>
            <p className="text-sm opacity-80 font-english leading-relaxed">
              Traditional Dhol-Tasha pathak from Dombivli West, Maharashtra. 
              Preserving cultural heritage through energetic performances since 2017.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-cultural">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-cultural">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-english font-semibold text-lg">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-sm hover:text-accent transition-cultural">
                Home
              </Link>
              <Link to="/about" className="block text-sm hover:text-accent transition-cultural">
                About Us
              </Link>
              <Link to="/gallery" className="block text-sm hover:text-accent transition-cultural">
                Gallery
              </Link>
              <Link to="/events" className="block text-sm hover:text-accent transition-cultural">
                Events
              </Link>
              <Link to="/contact" className="block text-sm hover:text-accent transition-cultural">
                Contact & Booking
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-english font-semibold text-lg">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent" />
                <div className="text-sm">
                  <p className="font-medium">Dombivli West</p>
                  <p className="opacity-80">Mothagaon, Dombivli</p>
                  <p className="opacity-80">Thane, Maharashtra</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+919876543210" className="text-sm hover:text-accent transition-cultural">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:info@mavleamhi.com" className="text-sm hover:text-accent transition-cultural">
                  info@mavleamhi.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm opacity-80 font-english">
            © 2025 Mavle Amhi Dhol-Tashache. All rights reserved. | 
            <span className="font-marathi ml-2">
              पारंपारिक ढोल-ताशा पथक, डोंबिवली
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;