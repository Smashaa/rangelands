import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Sectors from "@/components/Sectors";
import Impact from "@/components/Impact";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Sectors />
        <Impact />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
