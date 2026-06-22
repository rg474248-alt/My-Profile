'use client';

import { ExternalLink, GitBranch } from 'lucide-react';

const projects = [
  {
    title: 'Data Analytics Dashboard',
    description: 'Built a comprehensive Power BI dashboard for real-time business analytics and KPI tracking.',
    tags: ['Power BI', 'SQL', 'Data Visualization'],
    link: 'https://github.com/rg474248-alt',
  },
  {
    title: 'Python Data Pipeline',
    description: 'Automated data processing pipeline using Python for ETL operations and data cleansing.',
    tags: ['Python', 'ETL', 'Automation'],
    link: 'https://github.com/rg474248-alt',
  },
  {
    title: 'AI-Powered Assistant',
    description: 'Developed an intelligent assistant leveraging generative AI for task automation and insights.',
    tags: ['Gen AI', 'Python', 'LLM Integration'],
    link: 'https://github.com/rg474248-alt',
  },
  {
    title: 'Database Optimization',
    description: 'Optimized complex SQL queries resulting in 40% performance improvement in data retrieval.',
    tags: ['SQL', 'Database', 'Performance'],
    link: 'https://github.com/rg474248-alt',
  },
  {
    title: 'Predictive Analytics Model',
    description: 'Created machine learning models using Python for forecasting and pattern recognition.',
    tags: ['Python', 'ML', 'Data Science'],
    link: 'https://github.com/rg474248-alt',
  },
  {
    title: 'Business Intelligence Suite',
    description: 'Developed end-to-end BI solution integrating multiple data sources with Power BI.',
    tags: ['Power BI', 'SQL', 'Integration'],
    link: 'https://github.com/rg474248-alt',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore a selection of projects showcasing my expertise in data, AI, and analytics
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative p-6 rounded-xl bg-background border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm group/link"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-6">
            Want to see more? Check out my complete project portfolio on GitHub.
          </p>
          <a
            href="https://github.com/rg474248-alt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all"
          >
            <GitBranch className="w-5 h-5" />
            <span>Visit GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
