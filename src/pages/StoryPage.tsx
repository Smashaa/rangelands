import { useParams, Link } from "react-router-dom";
import { Fragment, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getStoryBySlug } from "@/data/stories";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";

const StoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const story = slug ? getStoryBySlug(slug) : undefined;

  if (!story) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-display text-2xl font-bold text-foreground mb-4">
              Story not found
            </h1>
            <Link
              to="/stories"
              className="text-primary hover:underline inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> Back to stories
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Parse body: split by [IMAGE:n] markers so we can render paragraphs and images in order
  const bodyParts = story.body.trim().split(/(\[IMAGE:\d+\])/g);

  // Preload hero image so it starts loading as soon as the story page is opened
  useEffect(() => {
    if (!story.images[0]?.src) return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = story.images[0].src;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [story.images[0]?.src]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <Link
            to="/stories"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to stories
          </Link>

          <header className="mb-10">
            <time
              dateTime={story.date}
              className="text-sm text-muted-foreground"
            >
              {format(new Date(story.date), "MMMM d, yyyy")}
            </time>
            {story.author && (
              <p className="text-sm text-muted-foreground mt-1">{story.author}</p>
            )}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 leading-tight">
              {story.title}
            </h1>
          </header>

          <div className="prose prose-lg prose-neutral max-w-none prose-headings:font-display prose-p:text-muted-foreground prose-p:leading-relaxed">
            {story.images[0] && (
              <figure className="my-10">
                <img
                  src={story.images[0].src}
                  alt={story.images[0].alt}
                  className="w-full h-auto"
                  fetchpriority="high"
                />
                {(story.images[0].caption || story.images[0].credit) && (
                  <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                    {story.images[0].caption}
                    {story.images[0].credit && !story.images[0].caption?.toLowerCase().includes(story.images[0].credit.toLowerCase()) && (
                      <span className="block mt-1">Photo credit: {story.images[0].credit}</span>
                    )}
                  </figcaption>
                )}
              </figure>
            )}

            <div className="space-y-6">
              {bodyParts.map((part, i) => {
                const imageMatch = part.match(/^\[IMAGE:(\d+)\]$/);
                if (imageMatch && story.images[Number(imageMatch[1])]) {
                  const img = story.images[Number(imageMatch[1])];
                  return (
                    <figure key={i} className="my-10">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                      {(img.caption || img.credit) && (
                        <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                          {img.caption}
                          {img.credit && !img.caption?.toLowerCase().includes(img.credit.toLowerCase()) && (
                            <span className="block mt-1">Photo credit: {img.credit}</span>
                          )}
                        </figcaption>
                      )}
                    </figure>
                  );
                }
                const paragraphs = part.trim().split(/\n\n+/).filter(Boolean);
                return (
                  <Fragment key={i}>
                    {paragraphs.map((para, j) => (
                      <p key={j} className="text-muted-foreground leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default StoryPage;
