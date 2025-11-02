import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Computer Science Engineering Student | Web Developer | AI & Data Science Enthusiast';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-chart-2/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8">
          <div className="space-y-4">
            <p className="text-muted-foreground text-base lg:text-lg font-medium" data-testid="text-greeting">
              Hello, I'm
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight" data-testid="text-name">
              Kollipara Venkata{' '}
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Niranjan
              </span>
            </h1>
            <div className="h-16 lg:h-20">
              <p className="text-lg lg:text-xl text-muted-foreground min-h-[3rem]" data-testid="text-title">
                {displayedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          <p className="text-base lg:text-lg text-foreground/90 max-w-3xl mx-auto" data-testid="text-intro">
            I'm a passionate Computer Science Engineering student at Jain University with a strong interest in 
            full-stack web development and artificial intelligence. I enjoy building real-world applications 
            that combine functionality, performance, and creativity.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              data-testid="button-view-projects"
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              data-testid="button-contact-me"
            >
              Contact Me
            </Button>
          </div>

          <div className="flex gap-3 pt-4 justify-center">
            <Button 
              variant="ghost" 
              size="icon"
              asChild
              data-testid="link-email"
            >
              <a href="mailto:kolliparaniranjan23@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              asChild
              data-testid="link-github"
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              asChild
              data-testid="link-linkedin"
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              asChild
              data-testid="link-phone"
            >
              <a href="tel:+919948010643" aria-label="Phone">
                <Phone className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
