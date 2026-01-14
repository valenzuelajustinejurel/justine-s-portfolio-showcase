import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, ExternalLink } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Ready to streamline your operations? I'd love to hear about your
            project and how I can help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg">
              <a href="mailto:justine.valenzuela@email.com">
                <Mail className="h-4 w-4 mr-2" />
                Send an Email
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="https://www.onlinejobs.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              OnlineJobs.ph
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
