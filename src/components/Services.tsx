import { motion } from "framer-motion";
import { Calendar, Globe, Zap, FileText, Mail, Users } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Executive Assistance",
    description: "Calendar management, scheduling, and administrative support",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Responsive websites and landing pages using modern frameworks",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Zapier, Make, and custom automation workflows",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "SOPs, training materials, and knowledge base creation",
  },
  {
    icon: Mail,
    title: "Email Management",
    description: "Inbox organization, filtering, and response drafting",
  },
  {
    icon: Users,
    title: "Client Communication",
    description: "Professional correspondence and relationship management",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Services
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Comprehensive support to help your business run smoothly and efficiently.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <service.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-heading text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
