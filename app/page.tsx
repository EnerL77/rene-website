import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Difference from "@/components/Difference";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Cases from "@/components/Cases";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <About />
        <Experience />
        <Services />
        <Difference />
        <Cases />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
