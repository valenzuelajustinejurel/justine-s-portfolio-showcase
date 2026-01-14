import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center px-6 pt-28 pb-20">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid lg:grid-cols-[auto_auto_1fr] gap-8 lg:gap-12 items-center">
          {/* Profile Image - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-56 h-64 sm:w-64 sm:h-72 lg:w-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl bg-card border border-border/50">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                  alt="Justine Valenzuela"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Subtle decorative shadow */}
              <div className="absolute -inset-1 bg-primary/5 rounded-2xl -z-10 blur-xl" />
            </div>
          </motion.div>

          {/* Buttons - Middle Column (Bridge) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-row lg:flex-col gap-4 justify-center"
          >
            <Button asChild size="lg" className="px-6 py-6 text-base font-medium shadow-md hover:shadow-lg transition-shadow">
              <a href="#contact">Work With Me</a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="px-6 py-6 text-base font-normal text-muted-foreground hover:text-foreground border-border/60 hover:border-primary/30"
            >
              <a href="#case-studies">View My Work</a>
            </Button>
          </motion.div>

          {/* Text Content - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-foreground mb-3">
              Justine Valenzuela
            </h1>

            <p className="text-lg md:text-xl text-primary font-medium mb-6">
              Website Manager & Automation Specialist
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
              I help organizations manage, improve, and automate their websites and internal workflows.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex justify-center mt-20 lg:mt-24"
        >
          <a
            href="#services"
            className="text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300"
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
      </div>
    </section>
  );
};
