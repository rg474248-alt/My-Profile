'use client';

import { Database, Code2, BarChart3, Zap } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Python',
    description: 'Advanced proficiency with Pandas, NumPy for data processing, automation, and financial analytics.',
    features: ['Data Analysis', 'Pandas & NumPy', 'Financial Modeling', 'Automation Scripts'],
  },
  {
    icon: Database,
    title: 'SQL',
    description: 'Expert-level SQL for complex queries, database optimization, and financial reporting automation.',
    features: ['Complex Queries', 'Query Optimization', 'Database Design', 'Performance Tuning'],
  },
  {
    icon: BarChart3,
    title: 'Tableau & Power BI',
    description: 'Designing interactive dashboards and comprehensive financial visualizations for stakeholder reporting.',
    features: ['Dashboard Design', 'Data Visualization', 'Financial Reports', 'DAX Formulas'],
  },
  {
    icon: Zap,
    title: 'Gen AI & Tools',
    description: 'Leveraging generative AI for intelligent automation and strategic decision-making support.',
    features: ['Gen AI Applications', 'Process Automation', 'Strategic Analysis', 'AI Tools'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            7+ years of hands-on expertise in data analysis, financial operations, and business intelligence
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="group p-8 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Icon */}
                <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-foreground mb-3">{skill.title}</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">{skill.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {skill.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <h3 className="text-xl font-bold text-foreground mb-4">Ready to collaborate?</h3>
          <p className="text-foreground/70 mb-6">
            I&apos;m always interested in discussing how these technologies can solve real-world challenges.
            Let&apos;s connect and explore what we can build together.
          </p>
          <a
            href="https://github.com/rg474248-alt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-6 py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
          >
            Check Out My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
