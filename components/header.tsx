'use client';

import Link from 'next/link';
import { GitBranch } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          RG
        </Link>
        <div className="flex items-center gap-8">
          <a
            href="#skills"
            className="text-sm text-foreground/70 hover:text-primary transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-sm text-foreground/70 hover:text-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="https://github.com/rg474248-alt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          >
            <GitBranch className="w-4 h-4" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
