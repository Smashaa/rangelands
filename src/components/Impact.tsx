import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Sprout, Handshake, Megaphone } from "lucide-react";

const impacts = [
  { icon: Shield, label: "Strengthening community resilience" },
  { icon: Sprout, label: "Promoting sustainable livelihoods" },
  { icon: Handshake, label: "Supporting peaceful coexistence" },
  { icon: Megaphone, label: "Advocating for policy change" },
];

const Impact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="section-padding bg-primary text-primary-foreground">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-primary-foreground/70 font-semibold text-sm uppercase tracking-widest mb-3">
            Impact / Why It Matters
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Our Impact
          </h2>
          <p className="text-primary-foreground/85 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            Pastoralist communities face increasing climate shocks, marginalization, and
            shrinking resources. Our work strengthens resilience, protects livelihoods, and
            amplifies community voices.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <p className="font-semibold text-sm leading-snug text-white">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
