'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            SolarEnergy
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
            Início
          </button>
          <button onClick={() => scrollToSection('simulator')} className="text-foreground hover:text-primary transition-colors">
            Simule sua economia
          </button>
          <button onClick={() => scrollToSection('benefits')} className="text-foreground hover:text-primary transition-colors">
            Benefícios
          </button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-foreground hover:text-primary transition-colors">
            Como funciona
          </button>
          <button onClick={() => scrollToSection('contact')} className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
            Fale conosco
          </button>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors py-2">
              Início
            </button>
            <button onClick={() => scrollToSection('simulator')} className="text-foreground hover:text-primary transition-colors py-2">
              Simule sua economia
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-foreground hover:text-primary transition-colors py-2">
              Benefícios
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-foreground hover:text-primary transition-colors py-2">
              Como funciona
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Fale conosco
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 