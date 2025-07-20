import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Instagram, Twitter, Linkedin, Mail, Phone, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-blue text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-electric-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rich-violet/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <div className="p-2 bg-gradient-to-r from-electric-orange to-rich-violet rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Nextmav</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              The creative engine behind the next billion-dollar brands. 
              We build digital identities, content systems, and design that scales.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/nextmav_?igsh=bHVyazRuN3FzNzI5" 
                target="Nextmav IG"
                rel="noopener noreferrer"
                className="group p-2 bg-slate-gray rounded-lg hover:bg-electric-orange transition-all duration-300"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.facebook.com/share/1Bfv5KDGZD/" 
                target="Facebook"
                rel="noopener noreferrer"
                className="group p-2 bg-slate-gray rounded-lg hover:bg-electric-orange transition-all duration-300"
              >
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://x.com/nextmav?t=o7aJjjnx7UbH3lfnivmQow&s=08" 
                target="X"
                rel="noopener noreferrer"
                className="group p-2 bg-slate-gray rounded-lg hover:bg-electric-orange transition-all duration-300"
              >
                <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.youtube.com/@Nextmav" 
                target="YouTube"
                rel="noopener noreferrer"
                className="group p-2 bg-slate-gray rounded-lg hover:bg-electric-orange transition-all duration-300"
              >
                <Youtube className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/in/nextmav-agency-773a5036b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="Linkedin"
                rel="noopener noreferrer"
                className="group p-2 bg-slate-gray rounded-lg hover:bg-electric-orange transition-all duration-300"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/about" className="block text-gray-300 hover:text-electric-orange transition-colors duration-300 hover:translate-x-1">
                About Us
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-electric-orange transition-colors duration-300 hover:translate-x-1">
                Services
              </Link>
              <Link to="/portfolio" className="block text-gray-300 hover:text-electric-orange transition-colors duration-300 hover:translate-x-1">
                Portfolio
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-electric-orange transition-colors duration-300 hover:translate-x-1">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-3">
              <a 
                href="mailto:hello@Naxtmav.co"
                className="flex items-center space-x-3 group"
              >
                <Mail className="h-5 w-5 text-electric-orange group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors">Nextmavagency@gmail.com</span>
              </a>
              <a 
                href="tel:+2341234567890"
                className="flex items-center space-x-3 group"
              >
                <Phone className="h-5 w-5 text-electric-orange group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors">+2348039660993</span>
              </a>
            </div>
            <div className="mt-6">
              <Link
                to="/contact"
                className="group inline-block bg-gradient-to-r from-electric-orange to-rich-violet text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-gray mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2025 Nextmav. All rights reserved. Built for scale.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Africa-born, globally-minded.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;