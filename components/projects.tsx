'use client';

import { ExternalLink, GitBranch } from 'lucide-react';

const projects = [
  {
    title: 'Automated Financial Reporting',
    description: 'Designed and maintained automated Excel dashboards and SQL-driven reports, reducing manual reporting time by 40% and improving data accessibility for senior management.',
    tags: ['Excel', 'SQL', 'Automation'],
    link: 'https://github.com/rg474248-alt',
  },
  {
    title: 'End-to-End Accounting Operations',
    description: 'Managed comprehensive accounting operations including AP/AR, bank reconciliations, and month-end closing with consistent accuracy and full regulatory compliance.',
    tags: ['Financial Ops', 'Compliance', 'Excel'],
    link: 'https://github.com/rg474248-alt',
  },
  {
    title: 'Python Financial Analytics',
    description: 'Analyzed complex financial datasets using Python and Tableau to identify trends, anomalies, and cost-saving opportunities informing strategic decisions.',
    tags: ['Python', 'Tableau', 'Analytics'],
    link: 'https://github.com/rg474248-alt',
  },
  {
    title: 'SQL Database Optimization',
    description: 'Optimized SQL queries and database performance for financial reporting, improving query execution speed and reducing system load.',
    tags: ['SQL', 'Database', 'Performance'],
    link: 'https://github.com/rg474248-alt',
  },
  {
    title: 'Tableau Dashboard Suite',
    description: 'Created interactive Tableau dashboards for stakeholder reporting, transforming raw financial data into actionable business intelligence.',
    tags: ['Tableau', 'Data Viz', 'BI'],
    link: 'https://github.com/rg474248-alt',
  },
  {
    title: 'Process Improvement Initiatives',
    description: 'Streamlined accounting workflows and implemented process improvements that measurably enhanced operational efficiency across the department.',
    tags: ['Process Opt', 'Efficiency', 'Strategy'],
    link: 'https://github.com/rg474248-alt',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Professional Achievements</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Key projects and initiatives that demonstrate impact in financial operations, data analysis, and process optimization
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
