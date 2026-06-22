'use client';

import Link from 'next/link';
import { GitBranch, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
              Rishabh Gupta
            </h3>
            <p className="text-foreground/70 text-sm">
              Senior Analyst specializing in financial operations, data analysis, and business intelligence with 7+ years of proven track record.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'GitHub', href: 'https://github.com/rg474248-alt' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/rg474248-alt"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-foreground/10 hover:bg-primary hover:text-primary-foreground text-foreground transition-colors"
                aria-label="GitHub"
              >
                <GitBranch className="w-5 h-5" />
              </a>
              <a
                href="mailto:rg474248@gmail.com"
                className="p-2 rounded-lg bg-foreground/10 hover:bg-primary hover:text-primary-foreground text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/60 text-sm text-center md:text-left">
            © 2026 Rishabh Gupta. Senior Analyst & Data Specialist.
          </p>
          <div className="flex gap-6 text-foreground/60 text-xs">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-6 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-center">
          <p className="text-foreground/80 mb-4">
            Ready to transform your financial operations and data into strategic insights?
          </p>
          <a
            href="mailto:rg474248@gmail.com"
            className="inline-flex px-6 py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </footer>
  );
}
