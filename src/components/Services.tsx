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
    <section id="services" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-foreground">
            What I Do
          </h2>
          <div className="w-16 h-0.5 bg-primary mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative p-6 rounded-xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="h-5 w-5" />
                </div>
                <p className="text-foreground/90 text-base leading-relaxed pt-1">
                  {service.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};