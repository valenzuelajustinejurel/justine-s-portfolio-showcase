import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center px-6 pt-28 pb-20">
      <div className="max-w-5xl mx-auto w-full">
        {/* Two-column layout: Image + Text with Buttons */}
        <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center justify-center">
          {/* Profile Image - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center"
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

          {/* Text Content + Buttons - Right Column */}
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

            <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 font-light leading-relaxed mb-10">
              Helping organizations manage, improve, and automate their websites and internal workflows—so systems stay reliable and teams save time.
            </p>

            {/* Buttons - Under the text content */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="px-8 py-6 text-base font-medium shadow-md hover:shadow-lg transition-shadow">
                <Link to="/contact">Work With Me</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base font-normal text-muted-foreground hover:text-foreground border-border/60 hover:border-primary/30"
              >
                <Link to="/case-studies">View My Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex justify-center mt-20 lg:mt-24"
        >
          <Link
            to="/services"
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
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
