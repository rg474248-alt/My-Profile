'use client';

import { Award, Briefcase } from 'lucide-react';

export default function Awards() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Recognition & Credentials</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Achievements and certifications recognizing expertise and dedication to excellence
          </p>
        </div>

        {/* Awards & Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Awards Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Professional Awards
            </h3>
            
            <div className="space-y-4">
              {[
                {
                  title: 'Star Performer Award',
                  description: 'Recognized for outstanding client service and consistently exceeding performance benchmarks at Apt Business Services LLP',
                },
                {
                  title: 'Service & Commitment Award',
                  description: 'Honored for dedication to operational excellence and continuous improvement initiatives',
                },
                {
                  title: 'BPS Champions League Team Award',
                  description: 'Celebrated for cross-functional leadership, collaboration, and driving team success',
                },
              ].map((award, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-2">{award.title}</h4>
                  <p className="text-foreground/70 text-sm">{award.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-secondary" />
              Certifications & Training
            </h3>
            
            <div className="space-y-4">
              {[
                'Python for Data Analysis',
                'Power BI Desktop Specialist',
                'SQL for Data Science & Analytics',
                'Data Analysis & Visualization',
                'Generative AI',
              ].map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg border border-secondary/20 bg-secondary/5 hover:bg-secondary/10 transition-colors"
                >
                  <p className="font-semibold text-secondary">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16 p-8 rounded-xl border border-border bg-card">
          <h3 className="text-2xl font-bold text-foreground mb-6">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                degree: 'Master of Business Administration (MBA)',
                institution: 'Mahatma Gandhi University',
                period: 'Apr 2013 - Apr 2015',
              },
              {
                degree: 'Bachelor of Commerce (B.Com)',
                institution: 'HK College',
                period: 'Apr 2011 - Mar 2013',
              },
            ].map((edu, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-background border border-border/50">
                <h4 className="font-bold text-foreground mb-2">{edu.degree}</h4>
                <p className="text-primary text-sm font-medium mb-1">{edu.institution}</p>
                <p className="text-foreground/60 text-sm">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
