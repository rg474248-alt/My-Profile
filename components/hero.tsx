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
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              <span className="text-foreground">Transforming Data</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Into Insights
              </span>
            </h1>
            <p className="text-lg text-foreground/70 text-balance leading-relaxed">
              Specialized in Python, SQL, Power BI, and Generative AI. Building intelligent data solutions
              that drive business decisions and unlock new possibilities.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:gap-3"
            >
              View My Work
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
              { label: 'Skills', value: '5+' },
              { label: 'Languages', value: '1 Primary' },
              { label: 'Tools', value: '4+' },
              { label: 'Focus', value: 'Gen AI' },
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
