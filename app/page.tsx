import Header from '@/components/header';
import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Portfolio | Data & AI Specialist',
  description: 'Professional portfolio showcasing expertise in Python, SQL, Power BI, and Gen AI',
};

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
