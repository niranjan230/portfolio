import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

export default function EducationSection() {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Jain (Deemed-to-be University)',
      year: '2022 – 2026',
      current: true,
    },
    {
      degree: '12th Grade',
      institution: 'High School',
      year: '2022',
      current: false,
    },
  ];

  return (
    <section id="education" className="py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-4 mb-12 lg:mb-16 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold" data-testid="text-education-heading">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className={`p-6 lg:p-8 hover-elevate active-elevate-2 transition-all ${
                edu.current ? 'border-primary' : ''
              }`}
              data-testid={`card-education-${index}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg self-start">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-display text-xl font-semibold" data-testid={`text-degree-${index}`}>
                      {edu.degree}
                    </h3>
                    {edu.current && (
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-foreground/80 mb-2" data-testid={`text-institution-${index}`}>
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span data-testid={`text-year-${index}`}>{edu.year}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
