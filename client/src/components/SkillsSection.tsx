import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Server, Database, Brain, Wrench, Smartphone } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      category: 'Frontend',
      skills: ['React.js', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      icon: Server,
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs'],
    },
    {
      icon: Database,
      category: 'Database',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      icon: Brain,
      category: 'AI / ML',
      skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy'],
    },
    {
      icon: Wrench,
      category: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Firebase', 'Postman'],
    },
    {
      icon: Smartphone,
      category: 'Mobile & More',
      skills: ['Flutter', 'Dart', 'Prisma ORM', 'Python', 'Java', 'C'],
    },
  ];

  return (
    <section id="skills" className="py-16 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-4 mb-12 lg:mb-16 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold" data-testid="text-skills-heading">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-skills-subheading">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate active-elevate-2 transition-all"
              data-testid={`card-skill-${index}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="h-8 w-8 text-primary" />
                <h3 className="font-display text-xl font-semibold" data-testid={`text-category-${index}`}>
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-xs"
                    data-testid={`badge-skill-${index}-${skillIndex}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
