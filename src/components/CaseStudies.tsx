import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Zap } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    type: "Website",
    icon: Globe,
    title: "E-commerce Store Redesign",
    summary: "Complete website overhaul resulting in 40% increase in conversions",
    details: [
      "Redesigned the entire user interface for better navigation",
      "Implemented responsive design for mobile-first experience",
      "Integrated payment gateway and inventory management",
      "Set up analytics tracking and conversion optimization",
    ],
    result: "40% increase in conversion rate within 3 months",
  },
  {
    id: 2,
    type: "Automation",
    icon: Zap,
    title: "Lead Management System",
    summary: "Automated lead capture and nurturing workflow saving 15+ hours weekly",
    details: [
      "Built Zapier automation connecting forms to CRM",
      "Created automated email sequences for lead nurturing",
      "Set up Slack notifications for high-priority leads",
      "Integrated with Google Sheets for reporting",
    ],
    result: "15+ hours saved per week, 2x lead response time improvement",
  },
  {
    id: 3,
    type: "Automation",
    icon: Zap,
    title: "Invoice & Payment Automation",
    summary: "End-to-end invoicing system reducing payment delays by 60%",
    details: [
      "Automated invoice generation from project management tool",
      "Set up payment reminders and follow-up sequences",
      "Integrated with accounting software for reconciliation",
      "Created dashboard for tracking outstanding payments",
    ],
    result: "60% reduction in payment delays, streamlined bookkeeping",
  },
];

export const CaseStudies = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="case-studies" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Case Studies
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Real projects with measurable results. Click to see more details.
          </p>
        </motion.div>

        <div className="space-y-4">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedId(expandedId === study.id ? null : study.id)
                }
                className="w-full p-6 flex items-start gap-4 text-left hover:bg-muted/50 transition-colors"
              >
                <div className="p-2 rounded-md bg-accent">
                  <study.icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {study.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading text-foreground mb-1">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{study.summary}</p>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                    expandedId === study.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedId === study.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-border pt-4">
                        <h4 className="text-sm font-medium text-foreground mb-3">
                          What I did:
                        </h4>
                        <ul className="space-y-2 mb-4">
                          {study.details.map((detail, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-primary mt-1.5">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <div className="p-3 rounded-md bg-accent/50">
                          <p className="text-sm">
                            <span className="font-medium text-foreground">
                              Result:
                            </span>{" "}
                            <span className="text-muted-foreground">
                              {study.result}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
