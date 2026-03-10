import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
const QUOTE =
  "Pastoralism is our way of life. Our livestock are our pride, our culture and our livelihood. At Resilient Rangelands Initiative, we call for stronger support systems for our herders. It is time for policies that truly recognize, protect and strengthen pastoralist communities to take center stage this year and beyond.";

const PastoralismVoice = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const videoInView = useInView(videoWrapRef, { amount: 0.25, margin: "0px" });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!videoInView) {
      video.muted = true;
    }
  }, [videoInView]);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-secondary/50 border-t border-border"
      aria-labelledby="pastoralism-voice-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="pastoralism-voice-heading"
          className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12 md:mb-16"
        >
          A voice from the rangelands
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-start">
          <motion.div
            ref={videoWrapRef}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-foreground/5"
          >
            {inView && (
              <video
                ref={videoRef}
                className="w-full h-auto aspect-video object-cover"
                controls
                playsInline
                preload="metadata"
                aria-label="Video about pastoralism and the way of life of herders"
              >
                <source src="/pastrolism.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="min-w-0"
          >
            <blockquote className="rounded-xl border border-border bg-background shadow-sm pl-8 pr-6 py-6 md:pl-10 md:pr-8 md:py-8">
              <p className="text-muted-foreground text-lg leading-relaxed font-medium italic border-l-4 border-primary pl-5 md:pl-6">
                {QUOTE}
              </p>
              <cite className="mt-6 block text-sm text-muted-foreground not-italic">
                — Resilient Rangelands Initiative
              </cite>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PastoralismVoice;
