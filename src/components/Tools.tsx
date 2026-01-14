import { motion } from "framer-motion";

const tools = [
  {
    name: "Squarespace",
    icon: "https://cdn.simpleicons.org/squarespace/000000",
  },
  {
    name: "n8n",
    icon: "https://cdn.simpleicons.org/n8n/EA4B71",
  },
  {
    name: "HTML5",
    icon: "https://cdn.simpleicons.org/html5/E34F26",
  },
  {
    name: "CSS3",
    icon: "https://cdn.simpleicons.org/css3/1572B6",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
  },
  {
    name: "Slack",
    icon: "https://cdn.simpleicons.org/slack/4A154B",
  },
  {
    name: "Asana",
    icon: "https://cdn.simpleicons.org/asana/F06A6A",
  },
  {
    name: "Google Sheets",
    icon: "https://cdn.simpleicons.org/googlesheets/34A853",
  },
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
          className="mb-14 text-center"
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
          className="space-y-10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <img 
                    src={tool.icon} 
                    alt={tool.name}
                    className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="text-muted-foreground text-sm text-center">
            Adaptable to other tools and platforms as needed.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
