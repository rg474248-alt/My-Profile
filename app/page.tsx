import Header from '@/components/header';
import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Awards from '@/components/awards';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Rishabh Gupta | Senior Analyst - Data & BI',
  description: 'Senior Analyst with 7+ years in financial operations, data analysis, and business intelligence. Expert in Python, SQL, Tableau, Power BI, and Gen AI.',
};

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Awards />
      <Footer />
    </main>
  );
}
