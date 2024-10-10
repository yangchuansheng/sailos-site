import Example from '@/components/feature/example';
import Feature from '@/components/feature/feature';
import TechGrid from '@/components/feature/techgrid';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/header/hero';

export default function HomePage({ params }: { params: { lang: string } }) {
  return (
    <div className="h-full bg-[#EBF2FF]">
      <Header />
      <main className="custom-container pt-14">
        <Hero />
        <TechGrid />
        <div className="h-[1000px]"></div>
        <Example />
        <Feature />
        {/* <Feature />
        <Footer /> */}
      </main>

      <div className="rounded-[20px]"></div>
      <div className="h-[1000px]"></div>
    </div>
  );
}
