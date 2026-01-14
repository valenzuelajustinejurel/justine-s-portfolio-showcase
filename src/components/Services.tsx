import { motion } from "framer-motion";
import { Globe, Layout, Code, CalendarDays, Search, Workflow, Link } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website revamps and ongoing website management",
  },
  {
    icon: Layout,
    title: "Squarespace website updates (design, layout, content)",
  },
  {
    icon: Code,
    title: "Custom website features using HTML, CSS, and JavaScript",
  },
  {
    icon: CalendarDays,
    title: "Event and provider page updates",
  },
  {
    icon: Search,
    title: "Basic SEO and site optimization",
  },
  {
    icon: Workflow,
    title: "Workflow automation using n8n",
  },
  {
    icon: Link,
    title: "Workflow automation & integrations (Slack, Asana, Google Sheets, and more)",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground">
            What I Do
          </h2>
        </motion.div>

        <div className="grid gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group flex items-start gap-5 p-6 rounded-lg bg-card border border-border hover:border-primary/20 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-md bg-accent flex items-center justify-center">
                <service.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-foreground text-base leading-relaxed pt-2">
                {service.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};