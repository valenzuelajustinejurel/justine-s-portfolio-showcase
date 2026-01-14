import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Zap, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const caseStudies = [
  {
    id: 1,
    type: "Website",
    icon: Globe,
    title: "Helen's Project – Website Revamp & Management",
    link: "https://www.helensproject.org/",
    role: "Website Manager & Web Support",
    platform: "Squarespace + Custom Code",
    overview: "Helen's Project is a mental health organization with a large, content-heavy website. I was responsible for revamping the site and providing ongoing website management and updates.",
    workPerformed: [
      "Revamped the entire website design across all pages",
      "Updated color palettes, typography, and layout structure",
      "Improved visual consistency and readability",
      "Implemented a custom provider search feature using custom code",
      "Managed and updated a large multi-page website (not limited to 5 pages)",
      "Regularly updated content for events, providers, and new pages",
    ],
    results: [
      "Improved site consistency and usability",
      "Easier navigation for users searching for providers",
      "Faster turnaround for content and event updates",
    ],
  },
  {
    id: 2,
    type: "Automation",
    icon: Zap,
    title: "Automated Asana Task Reminder System",
    platform: "n8n (Self-hosted on VPS)",
    integrations: "Asana, Slack",
    problem: "Tasks were being missed because there was no consistent reminder system tied to due dates.",
    workPerformed: [
      "Built a scheduled automation that checks Asana daily",
      "Filters incomplete tasks with valid due dates",
      "Categorizes tasks by urgency (today, 1–3 days out)",
      "Sends a structured Slack digest with threaded task details",
      "Mentions assignees automatically",
      "Suppresses notifications when no tasks are due",
    ],
    results: [
      "Reduced manual task checking",
      "Improved deadline visibility",
      "Increased accountability",
    ],
  },
  {
    id: 3,
    type: "Automation",
    icon: Zap,
    title: "Slack-to-Asana IT Ticket Intake System",
    platform: "n8n (Self-hosted on VPS)",
    integrations: "Slack, Asana, Google Sheets",
    problem: "IT requests were submitted informally in Slack, causing missed issues and poor tracking.",
    workPerformed: [
      "Built an automated Slack intake system",
      "Parsed structured Slack message blocks",
      "Created IT tickets automatically in Asana",
      "Mapped urgency levels to Asana custom fields",
      "Logged all tickets in Google Sheets",
      "Sent confirmation messages back to requesters",
    ],
    results: [
      "Centralized IT request handling",
      "Reduced manual coordination",
      "Improved tracking and accountability",
    ],
  },
];

export const CaseStudies = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="case-studies" className="py-32 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-4">
            Case Studies
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Real projects with measurable results. Click to see more details.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {caseStudies.map((study, index) => (
              <CarouselItem key={study.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <div className="bg-card border border-border rounded-xl overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                    <button
                      onClick={() =>
                        setExpandedId(expandedId === study.id ? null : study.id)
                      }
                      className="w-full p-6 md:p-8 flex flex-col items-start gap-4 text-left hover:bg-muted/20 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-accent flex items-center justify-center">
                          <study.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                        </div>
                        <ChevronDown
                          className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                            expandedId === study.id ? "rotate-180" : ""
                          }`}
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-medium text-primary uppercase tracking-wide">
                          {study.type}
                        </span>
                        <h3 className="text-lg font-heading font-medium text-foreground mt-2 mb-2 leading-snug">
                          {study.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{study.platform}</p>
                      </div>
                    </button>

                    <AnimatePresence>
                      {expandedId === study.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-8 pb-8 pt-0">
                            <div className="border-t border-border pt-6 space-y-5">
                              {'link' in study && study.link && (
                                <a
                                  href={study.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                                >
                                  <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                                  View Project
                                </a>
                              )}

                              {'role' in study && study.role && (
                                <p className="text-sm text-muted-foreground">
                                  <span className="font-medium text-foreground">Role:</span> {study.role}
                                </p>
                              )}

                              {'integrations' in study && study.integrations && (
                                <p className="text-sm text-muted-foreground">
                                  <span className="font-medium text-foreground">Integrations:</span> {study.integrations}
                                </p>
                              )}

                              {'overview' in study && study.overview && (
                                <div>
                                  <h4 className="text-sm font-medium text-foreground mb-2">Overview</h4>
                                  <p className="text-sm text-muted-foreground leading-relaxed">{study.overview}</p>
                                </div>
                              )}

                              {'problem' in study && study.problem && (
                                <div>
                                  <h4 className="text-sm font-medium text-foreground mb-2">Problem</h4>
                                  <p className="text-sm text-muted-foreground leading-relaxed">{study.problem}</p>
                                </div>
                              )}

                              <div>
                                <h4 className="text-sm font-medium text-foreground mb-3">
                                  {study.type === "Website" ? "Work Performed" : "Solution"}
                                </h4>
                                <ul className="space-y-2">
                                  {study.workPerformed.map((item, i) => (
                                    <li
                                      key={i}
                                      className="text-sm text-muted-foreground flex items-start gap-3 leading-relaxed"
                                    >
                                      <span className="text-primary/60 mt-0.5">•</span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="p-5 rounded-lg bg-accent/30 border border-accent/50">
                                <h4 className="text-sm font-medium text-foreground mb-3">
                                  {study.type === "Website" ? "Result" : "Impact"}
                                </h4>
                                <ul className="space-y-2">
                                  {study.results.map((result, i) => (
                                    <li
                                      key={i}
                                      className="text-sm text-muted-foreground flex items-start gap-3 leading-relaxed"
                                    >
                                      <span className="text-primary">✓</span>
                                      {result}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 h-10 w-10 border-border hover:bg-accent hover:border-primary/30" />
            <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 h-10 w-10 border-border hover:bg-accent hover:border-primary/30" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
