import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navigation({ isDark, onToggleTheme }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleResumeClick = () => {
    // Option 1: Open resume in new tab
    window.open('/resume.pdf', '_blank');
    // Option 2: Download resume
    // const link = document.createElement('a');
    // link.href = '/resume.pdf';
    // link.download = 'Niranjan_Kollipara_Resume.pdf';
    // link.click();
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-display text-xl lg:text-2xl font-bold hover-elevate active-elevate-2 px-2 py-1 rounded-md"
            data-testid="button-logo"
          >
            NVK
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => scrollToSection(link.id)}
                data-testid={`button-nav-${link.id}`}
              >
                {link.name}
              </Button>
            ))}
            <Button
              variant="default"
              onClick={handleResumeClick}
              className="ml-2"
              data-testid="button-resume"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleTheme}
              data-testid="button-theme-toggle"
            >
              {isDark ? '☀️' : '🌙'}
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => scrollToSection(link.id)}
                data-testid={`button-mobile-nav-${link.id}`}
              >
                {link.name}
              </Button>
            ))}
            <Button
              variant="default"
              className="w-full justify-start"
              onClick={handleResumeClick}
              data-testid="button-mobile-resume"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={onToggleTheme}
              data-testid="button-mobile-theme-toggle"
            >
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
