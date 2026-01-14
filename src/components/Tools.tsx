import { motion } from "framer-motion";

const tools = [
  "Squarespace",
  "n8n (self-hosted)",
  "HTML",
  "CSS",
  "JavaScript",
  "Slack",
  "Asana",
  "Google Sheets",
];

export const Tools = () => {
  return (
    <section id="tools" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-foreground">
            Tools I Work With
          </h2>
          <div className="w-16 h-0.5 bg-primary mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-5 py-2.5 rounded-lg bg-card text-foreground text-sm font-medium border border-border/50 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 transition-all duration-200"
              >
                {tool}
              </motion.span>
            ))}
          </div>

          <p className="text-muted-foreground text-base italic">
            Adaptable to other tools and platforms as needed.
          </p>
        </motion.div>
      </div>
    </section>
  );
};