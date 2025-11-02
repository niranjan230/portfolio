import { Card } from '@/components/ui/card';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kolliparaniranjan23@gmail.com',
      link: 'mailto:kolliparaniranjan23@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9948010643',
      link: 'tel:+919948010643',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com',
      link: 'https://github.com/niranjan230',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com',
      link: 'https://www.linkedin.com/in/niranjan-kollipara-097610256/',
    },
  ];

  return (
    <section id="contact" className="py-16 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-4 mb-12 lg:mb-16 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold" data-testid="text-contact-heading">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subheading">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              data-testid={`link-contact-${index}`}
            >
              <Card className="p-6 text-center hover-elevate active-elevate-2 transition-all h-full">
                <method.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2" data-testid={`text-contact-label-${index}`}>
                  {method.label}
                </h3>
                <p className="text-sm text-muted-foreground break-words" data-testid={`text-contact-value-${index}`}>
                  {method.value}
                </p>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
