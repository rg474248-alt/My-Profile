'use client';

import { Database, Code2, BarChart3, Zap } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Python',
    description: 'Expert-level proficiency in Python for data analysis, automation, and machine learning applications.',
    features: ['Data Processing', 'Automation', 'ML Libraries', 'API Development'],
  },
  {
    icon: Database,
    title: 'SQL',
    description: 'Advanced SQL skills for database design, optimization, and complex data querying across platforms.',
    features: ['Query Optimization', 'Database Design', 'Complex Joins', 'Performance Tuning'],
  },
  {
    icon: BarChart3,
    title: 'Power BI',
    description: 'Creating compelling dashboards and visualizations that tell data stories and drive insights.',
    features: ['Dashboard Design', 'Data Modeling', 'DAX Formulas', 'Report Building'],
  },
  {
    icon: Zap,
    title: 'Gen AI',
    description: 'Building intelligent applications with cutting-edge generative AI models and techniques.',
    features: ['LLM Integration', 'Prompt Engineering', 'AI Workflows', 'Gen AI Tools'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Core Expertise</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Hands-on experience with cutting-edge technologies and tools in data science and AI
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
