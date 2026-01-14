import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center px-6 pt-24 pb-16">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-medium leading-[1.1] text-foreground mb-8"
        >
          Website Manager &<br className="hidden sm:block" /> Automation Specialist
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 font-light leading-relaxed"
        >
          I help organizations manage, improve, and automate their websites and internal workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="px-8 py-6 text-base font-medium">
            <a href="#contact">Work With Me</a>
          </Button>
          <Button asChild variant="ghost" size="lg" className="px-8 py-6 text-base font-normal text-muted-foreground hover:text-foreground">
            <a href="#case-studies">View My Work</a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="mt-auto pt-16"
      >
        <a
          href="#services"
          className="text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300"
          aria-label="Scroll to services"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="animate-pulse"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};