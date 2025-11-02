import { Card } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

export default function WorkExperienceSection() {
  const experiences = [
    {
      title: 'Intern',
      company: 'Lumbini Technologies Pvt. Ltd',
      period: 'June 2025 - Present',
      current: true,
      responsibilities: [
        'Designed and developed a Quiz Module with role-based access for Admin, Faculty, and Student logins.',
        'Implemented MVC architecture for the Student Dashboard, ensuring a clean separation of concerns.',
        'Developed a responsive landing page using React to enhance UI/UX',
        'Conducted unit testing and performance testing to ensure functionality and optimize system efficiency',
      ],
    },
    {
      title: 'Intern',
      company: 'I Deploy Solutions',
      period: 'June 2024 - August 2024',
      current: false,
      responsibilities: [
        'Deployed the application with logging to monitor and analyze system behavior effectively.',
        'Contributed across UI, backend, and server layers to ensure seamless application performance.',
        'Performed unit testing to validate code reliability, accuracy, and maintainability.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-4 mb-12 lg:mb-16 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold" data-testid="text-experience-heading">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-experience-subheading">
            My professional journey and contributions
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`p-6 lg:p-8 hover-elevate active-elevate-2 transition-all ${
                exp.current ? 'border-primary' : ''
              }`}
              data-testid={`card-experience-${index}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg self-start">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-display text-xl font-semibold" data-testid={`text-title-${index}`}>
                      {exp.title}
                    </h3>
                    <span className="text-foreground/80">-</span>
                    <span className="text-foreground/80 font-medium" data-testid={`text-company-${index}`}>
                      {exp.company}
                    </span>
                    {exp.current && (
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span data-testid={`text-period-${index}`}>{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li
                        key={respIndex}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                        data-testid={`text-responsibility-${index}-${respIndex}`}
                      >
                        <span className="text-primary mt-1.5">●</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

