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
    <section id="tools" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground">
            Tools I Work With
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8"
        >
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="px-5 py-2.5 rounded-full bg-card text-foreground text-sm font-normal border border-border hover:border-primary/30 transition-colors duration-200"
              >
                {tool}
              </motion.span>
            ))}
          </div>

          <p className="text-muted-foreground text-sm">
            Adaptable to other tools and platforms as needed.
          </p>
        </motion.div>
      </div>
    </section>
  );
};