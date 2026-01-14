import { motion } from "framer-motion";
import { Globe, Layout, Code, Search, Workflow, Link } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Revamps & Management",
    description: "Website revamps and ongoing website management to keep your online presence fresh and functional.",
  },
  {
    icon: Layout,
    title: "Squarespace Updates",
    description: "Squarespace website updates including design, layout, and content changes.",
  },
  {
    icon: Code,
    title: "Custom Website Features",
    description: "Custom website features using HTML, CSS, and JavaScript for enhanced functionality.",
  },
  {
    icon: Search,
    title: "SEO & Optimization",
    description: "Basic SEO and site optimization to improve visibility and performance.",
  },
  {
    icon: Workflow,
    title: "n8n Workflow Automation",
    description: "Workflow automation using n8n to streamline repetitive tasks and processes.",
  },
  {
    icon: Link,
    title: "Integrations & Automation",
    description: "Workflow automation & integrations with Slack, Asana, Google Sheets, and more.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground">
            What I Do
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5">
                <service.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-heading font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
