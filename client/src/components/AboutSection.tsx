import { Card } from '@/components/ui/card';
import { Code2, GraduationCap, Lightbulb, Heart } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Developer',
      description: 'Building modern web applications with React and Node.js',
    },
    {
      icon: Lightbulb,
      title: 'AI Enthusiast',
      description: 'Exploring deep learning and data science solutions',
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learner',
      description: 'Always updating skills with latest technologies',
    },
    {
      icon: Heart,
      title: 'UI/UX Focused',
      description: 'Passionate about creating beautiful user experiences',
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-4 mb-12 lg:mb-16">
          <h2 className="font-display text-3xl lg:text-4xl font-bold" data-testid="text-about-heading">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4">
            <p className="text-base lg:text-lg text-foreground/90" data-testid="text-about-intro">
              Hello! I'm Niranjan, currently pursuing my B.Tech in Computer Science and Engineering (CSE) 
              at Jain (Deemed-to-be University). I'm a self-driven learner who loves creating interactive, 
              modern web applications and exploring deep learning and data analysis.
            </p>
            <p className="text-base lg:text-lg text-foreground/90" data-testid="text-about-focus">
              My main focus areas are React-based front-end development and AI-driven solutions for real-world 
              challenges. I've worked on multiple projects ranging from e-commerce platforms to machine learning 
              models for healthcare and fake news detection.
            </p>
            <p className="text-base lg:text-lg text-foreground/90" data-testid="text-about-passion">
              Beyond coding, I enjoy learning new frameworks, improving UI/UX designs, and staying updated with 
              the latest technologies in software development and data science.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-6 hover-elevate active-elevate-2 transition-all cursor-pointer"
                data-testid={`card-highlight-${index}`}
              >
                <highlight.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-base mb-2" data-testid={`text-highlight-title-${index}`}>
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-highlight-desc-${index}`}>
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
