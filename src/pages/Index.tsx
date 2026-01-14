import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { CaseStudies } from "@/components/CaseStudies";
import { Tools } from "@/components/Tools";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const PATH_TO_SECTION_ID: Record<string, string> = {
  "/services": "services",
  "/case-studies": "case-studies",
  "/tools": "tools",
  "/contact": "contact",
};

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = PATH_TO_SECTION_ID[location.pathname];
    if (!sectionId) return;

    requestAnimationFrame(() => {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <CaseStudies />
      <Tools />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
