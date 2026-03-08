import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { stories } from "@/data/stories";
import { format } from "date-fns";
import { BookOpen, ArrowRight } from "lucide-react";

const StoriesIndex = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-12 flex flex-col gap-6">
            <Link
              to="/#stories"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
            >
              ← Back to home
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-4 w-fit">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Stories</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Voices from the Rangelands
            </h1>
            <p className="text-muted-foreground text-lg mt-2">
              Stories from the communities we work with.
            </p>
          </div>

          <div className="space-y-8">
            {stories.map((story) => (
              <Link
                key={story.slug}
                to={`/stories/${story.slug}`}
                className="group flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-primary-light/30 transition-all"
              >
                <div className="sm:w-48 flex-shrink-0 aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                  <img
                    src={story.images[0]?.src}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <time
                    dateTime={story.date}
                    className="text-sm text-muted-foreground"
                  >
                    {format(new Date(story.date), "MMMM d, yyyy")}
                  </time>
                  <h2 className="font-display text-xl font-bold text-foreground mt-1 group-hover:text-primary transition-colors line-clamp-2">
                    {story.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                    {story.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-medium text-sm mt-2">
                    Read story
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StoriesIndex;
