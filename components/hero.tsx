'use client';

import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Data & AI Professional</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 max-w-3xl">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Rishabh Gupta
              </h1>
              <p className="text-2xl md:text-3xl bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent font-semibold">
                Senior Analyst | Data & Business Intelligence
              </p>
            </div>
            <p className="text-lg text-foreground/70 text-balance leading-relaxed pt-4">
              Results-driven analyst with 7+ years transforming complex financial data into actionable insights. Expert in Python, SQL, Tableau, Power BI, and Gen AI—delivering measurable business impact through strategic data analysis and process automation.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a
              href="mailto:rg474248@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:gap-3"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/rg474248-alt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-foreground/10 hover:bg-foreground/20 text-foreground font-medium transition-colors"
            >
              GitHub Profile
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 w-full">
            {[
              { label: 'Years Experience', value: '7+' },
              { label: 'Automation Impact', value: '40%' },
              { label: 'Awards Won', value: '3' },
              { label: 'Compliance Rate', value: '100%' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
