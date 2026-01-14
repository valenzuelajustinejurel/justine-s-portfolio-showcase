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
    title: "Slack, Asana, and Google Sheets integrations",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            What I Do
          </h2>
        </motion.div>

        <ul className="space-y-4">
          {services.map((service, index) => (
            <motion.li
              key={service.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-start gap-4 group"
            >
              <service.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/90 text-lg">
                {service.title}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
