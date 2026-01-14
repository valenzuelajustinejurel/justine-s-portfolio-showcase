import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-secondary/50">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-5">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mb-12 max-w-md mx-auto text-base leading-relaxed">
            Ready to streamline your operations? I'd love to hear about your
            project and how I can help.
          </p>

          <div className="flex justify-center mb-14">
            <Button asChild size="lg" className="px-8 py-6 text-base font-medium">
              <a href="mailto:valenzuela.justinejurel@gmail.com">
                <Mail className="h-4 w-4 mr-2" strokeWidth={1.5} />
                Send an Email
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a
              href="https://www.onlinejobs.ph/jobseekers/info/1832110"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              OnlineJobs.ph
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};