import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TreePine, GraduationCap, CloudSun, Building2, BookOpen, Scale } from "lucide-react";

const sectors = [
  {
    icon: TreePine,
    title: "Sustainable Rangelands",
    description:
      "We promote sustainable rangeland management and community stewardship to protect grazing ecosystems and pastoral livelihoods.",
  },
  {
    icon: CloudSun,
    title: "Climate Change Adaptation",
    description:
      "We strengthen resilience through climate-smart practices, drought preparedness, and locally driven adaptation strategies.",
  },
  {
    icon: Building2,
    title: "Systems and Institutional Strengthening",
    description:
      "We support stronger institutions and systems that enable communities and partners to deliver lasting change.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "We support access to education, mentorship, and awareness programs that empower future generations in pastoralist communities.",
  },
  {
    icon: BookOpen,
    title: "Research and Learning",
    description:
      "We generate local knowledge, document indigenous practices, and support evidence-based advocacy and policy influence.",
  },
  {
    icon: Scale,
    title: "Governance and Advocacy",
    description:
      "We promote accountable leadership, community participation, peacebuilding, and inclusive decision-making processes.",
  },
];

const Sectors = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sectors" className="section-padding bg-primary-light">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Our Focus Areas
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <sector.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {sector.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {sector.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
