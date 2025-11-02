import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'E-commerce Website – TVS Mobility',
      description: 'An online store platform built for TVS Mobility Company with product listing, inventory tracking, and admin panel functionalities.',
      techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
      highlights: 'Secure authentication with Clerk, live product management, and responsive admin interface.',
      githubLink: 'https://github.com/niranjan230',
    },
    {
      title: 'Plywood Shop Website',
      description: 'A responsive business website built for a plywood shop to display products, handle customer inquiries, and provide contact options for bulk orders.',
      techStack: ['React.js', 'Tailwind CSS', 'Node.js'],
      highlights: 'Dynamic product cards, admin management, and responsive UI.',
      githubLink: 'https://github.com/niranjan230',
    },
    {
      title: 'Skill Arc (Flutter LMS)',
      description: 'A personal learning management system where users can edit their profile, upload profile pictures, and generate downloadable PDF resumes.',
      techStack: ['Flutter', 'Firebase', 'Dart'],
      highlights: 'Integrated image picker, editable fields, and real-time data updates.',
      githubLink: 'https://github.com/niranjan230',
    },
    {
      title: 'Fake News Detection System',
      description: 'A machine learning model designed to classify online news articles as real or fake using NLP and deep learning.',
      techStack: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas'],
      highlights: 'Used logistic regression, LSTM, and vectorization techniques to achieve high accuracy.',
      githubLink: 'https://github.com/niranjan230',
    },
    {
      title: 'Malaria Detection (AI Project)',
      description: 'A deep learning–based medical image classification project that identifies malaria-infected cells using CNN and UNet3+ segmentation.',
      techStack: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
      highlights: '95% accuracy with enhanced image preprocessing and segmentation.',
      githubLink: 'https://github.com/niranjan230',
    },
  ];

  return (
    <section id="projects" className="py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-4 mb-12 lg:mb-16 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold" data-testid="text-projects-heading">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-projects-subheading">
            A showcase of my recent work in web development and AI
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 lg:p-8 hover-elevate active-elevate-2 transition-all"
              data-testid={`project-${index}`}
            >
              <div className="space-y-4">
                <h3 className="font-display text-2xl lg:text-3xl font-bold" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-foreground/90" data-testid={`text-project-desc-${index}`}>
                  {project.description}
                </p>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" data-testid={`badge-tech-${index}-${techIndex}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground" data-testid={`text-project-highlights-${index}`}>
                  <span className="font-semibold">Highlights:</span> {project.highlights}
                </p>
                <div className="pt-2">
                  <Button variant="outline" size="sm" asChild data-testid={`link-github-${index}`}>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
