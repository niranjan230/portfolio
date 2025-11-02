import { Card } from '@/components/ui/card';
import { Award, Trophy, Star, TrendingUp, Github } from 'lucide-react';

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Award,
      title: 'Python for Data Science',
      description: 'Completed certification from Coursera',
    },
    {
      icon: Award,
      title: 'Machine Learning Certification',
      description: 'Google / Kaggle certification',
    },
    {
      icon: Trophy,
      title: 'College Hackathon Finalist',
      description: 'Finalist in College Hackathon 2025',
    },
    {
      icon: Star,
      title: '95% Accuracy Achievement',
      description: 'Lymphoma Subtype Classification using SVM + CNN',
    },
    {
      icon: TrendingUp,
      title: 'Live Deployments',
      description: 'Multiple web apps and AI models deployed',
    },
    {
      icon: Github,
      title: 'Active Developer',
      description: 'Consistent GitHub updates and contributions',
    },
  ];

  return (
    <section id="achievements" className="py-16 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-4 mb-12 lg:mb-16 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold" data-testid="text-achievements-heading">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate active-elevate-2 transition-all"
              data-testid={`card-achievement-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <achievement.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base mb-1" data-testid={`text-achievement-title-${index}`}>
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-achievement-desc-${index}`}>
                    {achievement.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
