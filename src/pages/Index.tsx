import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PastoralismVoice from "@/components/PastoralismVoice";
import Sectors from "@/components/Sectors";
import StoriesSection from "@/components/StoriesSection";
import Impact from "@/components/Impact";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;

  useEffect(() => {
    if (!scrollTo) return;
    const el = document.getElementById(scrollTo);
    if (el) {
      const id = requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth" });
      });
      return () => cancelAnimationFrame(id);
    }
  }, [scrollTo]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PastoralismVoice />
        <Sectors />
        <StoriesSection />
        <Impact />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
