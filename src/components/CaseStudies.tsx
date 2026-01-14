import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronDown, Globe, Zap, ExternalLink } from "lucide-react";

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
  const [activeIndex, setActiveIndex] = useState(1); // Start with middle card
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      setExpandedId(null);
    }
  };

  const handleExpandToggle = (studyId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedId(expandedId === studyId ? null : studyId);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      setExpandedId(null);
    } else if (info.offset.x < -threshold && activeIndex < caseStudies.length - 1) {
      setActiveIndex(activeIndex + 1);
      setExpandedId(null);
    }
  };

  // Calculate card position relative to active index
  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const isActive = diff === 0;
    
    // Position calculations
    const baseOffset = 320; // Base horizontal offset for side cards
    const xOffset = diff * baseOffset;
    
    return {
      x: xOffset,
      scale: isActive ? 1 : 0.85,
      opacity: isActive ? 1 : 0.6,
      zIndex: isActive ? 10 : 5 - Math.abs(diff),
    };
  };

  return (
    <section id="case-studies" className="py-32 px-6 bg-muted/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
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

        {/* Center-Focused Carousel */}
        <div 
          ref={containerRef}
          className="relative min-h-[320px] md:min-h-[280px] flex items-start justify-center"
        >
          <motion.div
            className="relative w-full flex justify-center"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
          >
            {caseStudies.map((study, index) => {
              const isActive = index === activeIndex;
              const isExpanded = expandedId === study.id;
              const cardStyle = getCardStyle(index);
              
              return (
                <motion.div
                  key={study.id}
                  onClick={() => handleCardClick(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{
                    x: cardStyle.x,
                    scale: cardStyle.scale,
                    opacity: cardStyle.opacity,
                    zIndex: cardStyle.zIndex,
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  className={`
                    absolute w-[300px] md:w-[360px] cursor-pointer
                    ${!isActive ? 'hover:opacity-70' : ''}
                  `}
                >
                  <div 
                    className={`
                      bg-card border rounded-2xl overflow-visible
                      transition-shadow duration-300 ease-out
                      ${isActive 
                        ? 'border-primary/20 shadow-2xl' 
                        : 'border-border shadow-lg'
                      }
                    `}
                  >
                    {/* Card Header */}
                    <div
                      onClick={(e) => isActive && handleExpandToggle(study.id, e)}
                      className={`
                        p-6 md:p-8 flex flex-col items-start gap-4 text-left
                        transition-colors duration-200 rounded-2xl
                        ${isActive ? 'hover:bg-muted/20' : ''}
                      `}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                          <study.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                        </div>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown
                              className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                              strokeWidth={1.5}
                            />
                          </motion.div>
                        )}
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
                    </div>
                  </div>

                  {/* Expandable Content - Dropdown Below Active Card */}
                  <AnimatePresence>
                    {isActive && isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -8 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="mt-3 z-30 relative"
                      >
                        <div className="bg-card border border-primary/20 rounded-2xl shadow-xl overflow-hidden">
                          <div className="px-6 md:px-8 py-6 space-y-5">
                            {'link' in study && study.link && (
                              <a
                                href={study.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
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
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Card Indicators (subtle, no interaction) */}
        <div className="flex justify-center gap-2 mt-12">
          {caseStudies.map((_, index) => (
            <div
              key={index}
              className={`
                h-1.5 rounded-full transition-all duration-300
                ${index === activeIndex 
                  ? 'w-8 bg-primary/50' 
                  : 'w-1.5 bg-border'
                }
              `}
            />
          ))}
        </div>

        {/* Mobile Hint */}
        <p className="text-center text-xs text-muted-foreground/50 mt-6 md:hidden">
          Swipe or tap to navigate
        </p>
      </div>
    </section>
  );
};
