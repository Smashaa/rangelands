import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Target, Heart, Users, Leaf, Lightbulb, ShieldCheck } from "lucide-react";

const values = [
  { icon: Users, label: "Community-led action" },
  { icon: Heart, label: "Inclusivity & equity" },
  { icon: Leaf, label: "Sustainability" },
  { icon: Lightbulb, label: "Knowledge & innovation" },
  { icon: ShieldCheck, label: "Accountability" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background border-t-4 border-primary overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/one.png"
                alt="Rangelands and pastoralist communities in Isiolo County"
                className="w-full h-auto block"
              />
            </div>
            <div className="absolute -z-10 inset-0 bg-primary/20 rounded-2xl translate-x-4 translate-y-4" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Who We Are
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Strengthening Pastoralist Communities
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Resilient Rangelands Initiative (RRI) is a local organization based in Isiolo County
              committed to strengthening pastoralist communities through locally contextualized
              solutions. We place communities at the center of advocacy, resilience building and
              sustainable development.
            </p>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary-light rounded-xl p-8 border border-primary/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Empowering communities and building resilience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-warm-light rounded-xl p-8 border border-accent/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Thriving pastoralist communities living sustainably in resilient rangelands.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-8">
            Core Values
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-2.5 bg-secondary rounded-full px-5 py-2.5 border border-border"
              >
                <v.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{v.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
