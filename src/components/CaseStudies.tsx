import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Zap, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
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
    overview:
      "Helen's Project is a mental health organization with a large, content-heavy website. I was responsible for revamping the site and providing ongoing website management and updates.",
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
    problem:
      "Tasks were being missed because there was no consistent reminder system tied to due dates.",
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
    problem:
      "IT requests were submitted informally in Slack, causing missed issues and poor tracking.",
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

const easePremium: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const CaseStudies = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const idx = api.selectedScrollSnap();
      setActiveIndex(idx);
      // Switching cards should collapse any expanded card.
      setExpandedId(null);
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const handleExpandToggle = (studyId: number) => {
    // Only one can be open at a time; clicking same collapses.
    setExpandedId((prev) => (prev === studyId ? null : studyId));
  };

  return (
    <section id="case-studies" className="py-32 px-6 bg-muted/30 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easePremium }}
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
          setApi={(embla) => setApi(embla)}
          opts={{
            align: "center",
            loop: true,
            // Keep motion calm/professional.
            duration: 22,
          }}
          className="w-full"
        >
          <CarouselContent className="py-2">
            {caseStudies.map((study, index) => {
              const isActive = index === activeIndex;
              const isExpanded = expandedId === study.id;

              return (
                <CarouselItem
                  key={study.id}
                  className="basis-[88%] sm:basis-[76%] md:basis-[60%] lg:basis-[52%]"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1 : 0.93,
                      opacity: isActive ? 1 : 0.78,
                    }}
                    transition={{ duration: 0.28, ease: easePremium }}
                    className="h-full"
                  >
                    <div
                      onClick={() => api?.scrollTo(index)}
                      className={
                        "bg-card border rounded-2xl overflow-hidden h-full shadow-sm transition-shadow duration-300 cursor-pointer " +
                        (isActive
                          ? "border-primary/20 shadow-xl"
                          : "border-border shadow-md")
                      }
                    >
                      <div
                        className={
                          "w-full p-6 md:p-8 flex flex-col items-start gap-4 text-left transition-colors duration-200 " +
                          (isActive ? "hover:bg-muted/20" : "")
                        }
                      >
                        <div className="flex items-center justify-between w-full">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                            <study.icon
                              className="h-5 w-5 text-primary"
                              strokeWidth={1.5}
                            />
                          </div>

                          <ChevronDown
                            className={
                              "h-5 w-5 text-muted-foreground transition-transform duration-200 " +
                              (isActive && isExpanded ? "rotate-180" : "")
                            }
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
                          <p className="text-sm text-muted-foreground">
                            {study.platform}
                          </p>
                        </div>

                        {/* Expand trigger: only works on the active card */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!isActive) {
                              api?.scrollTo(index);
                              return;
                            }
                            handleExpandToggle(study.id);
                          }}
                          className={
                            "mt-1 text-sm text-primary/90 hover:text-primary transition-colors" +
                            (!isActive ? " opacity-70" : "")
                          }
                        >
                          {isActive && isExpanded ? "Hide details" : "View details"}
                        </button>
                      </div>

                      <AnimatePresence initial={false}>
                        {isActive && isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: easePremium }}
                            className="overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="px-6 md:px-8 pb-8 pt-0">
                              <div className="border-t border-border pt-6 space-y-5">
                                {"link" in study && study.link && (
                                  <a
                                    href={study.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                                  >
                                    <ExternalLink
                                      className="h-4 w-4"
                                      strokeWidth={1.5}
                                    />
                                    View Project
                                  </a>
                                )}

                                {"role" in study && study.role && (
                                  <p className="text-sm text-muted-foreground">
                                    <span className="font-medium text-foreground">
                                      Role:
                                    </span>{" "}
                                    {study.role}
                                  </p>
                                )}

                                {"integrations" in study && study.integrations && (
                                  <p className="text-sm text-muted-foreground">
                                    <span className="font-medium text-foreground">
                                      Integrations:
                                    </span>{" "}
                                    {study.integrations}
                                  </p>
                                )}

                                {"overview" in study && study.overview && (
                                  <div>
                                    <h4 className="text-sm font-medium text-foreground mb-2">
                                      Overview
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                      {study.overview}
                                    </p>
                                  </div>
                                )}

                                {"problem" in study && study.problem && (
                                  <div>
                                    <h4 className="text-sm font-medium text-foreground mb-2">
                                      Problem
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                      {study.problem}
                                    </p>
                                  </div>
                                )}

                                <div>
                                  <h4 className="text-sm font-medium text-foreground mb-3">
                                    {study.type === "Website"
                                      ? "Work Performed"
                                      : "Solution"}
                                  </h4>
                                  <ul className="space-y-2">
                                    {study.workPerformed.map((item, i) => (
                                      <li
                                        key={i}
                                        className="text-sm text-muted-foreground flex items-start gap-3 leading-relaxed"
                                      >
                                        <span className="text-primary/60 mt-0.5">
                                          •
                                        </span>
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="p-5 rounded-xl bg-accent/30 border border-accent/50">
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
              );
            })}
          </CarouselContent>
        </Carousel>

        <p className="text-center text-xs text-muted-foreground/60 mt-8 md:hidden">
          Swipe or tap a side card to focus
        </p>
      </div>
    </section>
  );
};
