import { motion } from "framer-motion";

const tools = [
  { name: "Zapier", category: "Automation" },
  { name: "Make (Integromat)", category: "Automation" },
  { name: "Notion", category: "Productivity" },
  { name: "Airtable", category: "Database" },
  { name: "Google Workspace", category: "Productivity" },
  { name: "Slack", category: "Communication" },
  { name: "Trello", category: "Project Management" },
  { name: "Asana", category: "Project Management" },
  { name: "Figma", category: "Design" },
  { name: "WordPress", category: "Web Development" },
  { name: "React", category: "Web Development" },
  { name: "Tailwind CSS", category: "Web Development" },
];

export const Tools = () => {
  return (
    <section id="tools" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Tools & Technologies
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A selection of tools I use to deliver high-quality work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {tools.map((tool, index) => (
            <motion.span
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:border-primary/30 hover:bg-accent transition-colors duration-200"
            >
              {tool.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
