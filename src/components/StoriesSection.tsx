import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import { stories } from "@/data/stories";
import { format } from "date-fns";

const StoriesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="stories"
      ref={ref}
      className="section-padding bg-primary-light border-t border-primary/10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Stories</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Voices from the Rangelands
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Read stories from the communities we work with and the people behind
            resilient pastoralism.
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-10">
          {stories.map((story, i) => (
            <motion.article
              key={story.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/stories/${story.slug}`}
                className="group block bg-background rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-2/5 flex-shrink-0">
                    <div className="aspect-[4/3] md:aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={story.images[0]?.src}
                        alt={story.images[0]?.alt ?? story.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <time
                      dateTime={story.date}
                      className="text-sm text-muted-foreground mb-2"
                    >
                      {format(new Date(story.date), "MMMM d, yyyy")}
                    </time>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {story.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                      {story.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                      Read story
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            to="/stories"
            className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            View all stories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default StoriesSection;
