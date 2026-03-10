import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Leaf, Shield, Users, BookOpen, Sparkles } from "lucide-react";

const pillarIcons = [Leaf, Shield, Users, BookOpen, Sparkles];

const Campaigns = () => {
  const pillarsRef = useRef<HTMLElement>(null);
  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>

          <header className="mb-10">
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Resilient Rangelands Initiative (RRI) Campaign for the International Year of
              Rangelands and Pastoralists 2026
            </h1>
            <p className="font-display text-lg md:text-xl text-primary mt-4 font-medium">
              Voices of the Rangelands: Strengthening Pastoralist Resilience in Northern Kenya
            </p>
          </header>

          <div className="prose prose-lg prose-neutral max-w-none prose-headings:font-display prose-p:text-muted-foreground prose-p:leading-relaxed space-y-6">
            <p>
              The declaration of International Year of Rangelands and Pastoralists 2026 by the United
              Nations General Assembly marks a historic global recognition of the critical role
              rangelands and pastoralist communities play in sustaining ecosystems, livelihoods and
              food systems.
            </p>
            <p>
              For communities in Isiolo County and across Northern Kenya, this recognition
              resonates deeply. Pastoralism is not only a livelihood; it is a way of life, a
              knowledge system and a resilient adaptation strategy that has sustained communities for
              generations across Kenya&apos;s Arid and Semi-Arid Lands (ASALs).
            </p>
            <p>
              Out of Kenya&apos;s 47 counties, 23 are classified as ASAL, covering 89% of
              Kenya&apos;s landmass — vast landscapes that support pastoralism and livestock
              production. These rangelands form the ecological and economic backbone of Northern
              Kenya, sustaining millions of pastoralists and their livestock, while contributing
              significantly to national food security and cultural heritage.
            </p>

            <figure className="my-10">
              <img
                src="/campaigns/rangelands-sunset.png"
                alt="Rangeland landscape at sunrise or sunset in Kenya's Arid and Semi-Arid Lands"
                className="w-full h-auto rounded-lg shadow-md"
                loading="lazy"
                decoding="async"
                width={1200}
                height={630}
              />
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                Rangelands in Kenya&apos;s ASALs — vast dryland ecosystems that sustain pastoralist
                communities.
              </figcaption>
            </figure>

            <p>
              Across the world, pastoralists manage nearly one billion livestock — including cattle,
              goats, sheep and camels — using traditional mobility and ecological knowledge to
              maintain balance between people, livestock and nature. In Northern Kenya, pastoralists
              are the custodians of rangelands, stewarding ecosystems that support biodiversity,
              store carbon and sustain livelihoods.
            </p>

            <figure className="my-10">
              <img
                src="/campaigns/pastoral-livestock.png"
                alt="Pastoral herd of goats and livestock on rangeland in Northern Kenya"
                className="w-full h-auto rounded-lg shadow-md"
                loading="lazy"
                decoding="async"
                width={1200}
                height={630}
              />
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                Pastoralists and livestock on the rangelands — a way of life sustained by traditional
                knowledge and mobility.
              </figcaption>
            </figure>

            <p>
              Yet these vital landscapes face mounting challenges. Recurrent droughts, flash floods,
              land degradation, livestock diseases and increasing competition for land and water are
              threatening both the rangelands and the pastoralist systems that depend on them.
              Climate change continues to intensify these pressures, disrupting traditional grazing
              patterns and undermining pastoralist resilience.
            </p>
            <p>
              Despite these challenges, pastoralist communities remain at the forefront of climate
              adaptation and sustainable land management. Their knowledge, mobility systems and
              community governance structures offer valuable lessons for managing dryland ecosystems
              in a changing climate.
            </p>

            <section className="mt-14">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
                A Moment for Collective Action
              </h2>
              <p>
                The International Year is a call for global and local solidarity to safeguard
                rangelands and empower pastoralist communities. It is also an opportunity to
                amplify voices that have too often been overlooked — particularly those of women,
                youth and grassroots pastoralist organizations who play a central role in sustaining
                these landscapes.
              </p>
              <p>
                As a locally rooted organization working in Kenya&apos;s drylands, Resilient
                Rangelands Initiative (RRI) will use this moment to mobilize communities, partners
                and decision-makers to strengthen the resilience of pastoralist livelihoods and
                rangeland ecosystems.
              </p>
            </section>

            <section className="mt-14" ref={pillarsRef}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-12 mb-8">
                RRI&apos;s Vision for the Rangelands: The Five Pillars of Pastoral Resilience
              </h2>
              <ul className="space-y-6 list-none pl-0">
                {[
                  {
                    title: "Thriving Rangelands",
                    body: "Promoting sustainable rangeland management, restoration and biodiversity conservation to ensure healthy ecosystems that sustain pastoral livelihoods and future generations.",
                  },
                  {
                    title: "Resilient Livelihoods",
                    body: "Strengthening pastoral economies through improved livestock productivity, diversified income opportunities and adaptive pastoral systems that withstand climate shocks.",
                  },
                  {
                    title: "Inclusive Stewardship",
                    body: "Advancing inclusive policies and community-led governance that safeguard pastoralists' land rights, mobility corridors and traditional institutions.",
                  },
                  {
                    title: "Knowledge for Adaptation",
                    body: "Integrating indigenous pastoral knowledge with science, technology and climate information to strengthen community capacity to adapt to changing environments.",
                  },
                  {
                    title: "Empowered Generations",
                    body: "Supporting pastoralist women and youth as leaders, innovators and custodians of resilient rangelands and vibrant pastoral economies.",
                  },
                ].map((pillar, i) => {
                  const Icon = pillarIcons[i];
                  return (
                    <motion.li
                      key={pillar.title}
                      initial={{ opacity: 0, y: 16 }}
                      animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex gap-4 p-5 rounded-xl bg-secondary/60 border border-border"
                    >
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold">
                        {i + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
                          {Icon && <Icon className="w-5 h-5 text-primary" />}
                          {pillar.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                          {pillar.body}
                        </p>
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </section>

            <figure className="my-10">
              <img
                src="/campaigns/pastoral-shepherd-livestock.png"
                alt="Pastoralist with flock of sheep and goats on rangeland in Northern Kenya"
                className="w-full h-auto rounded-lg shadow-md"
                loading="lazy"
                decoding="async"
                width={1200}
                height={630}
              />
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                Pastoralist and livestock on the rangelands — traditional pastoral farming in Northern Kenya.
              </figcaption>
            </figure>

            <section className="mt-14">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
                RRI&apos;s Role in Northern Kenya
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The International Year was championed globally by Mongolia and supported by more than 60
                countries. At the local level, Resilient Rangelands Initiative (RRI) will coordinate
                awareness, dialogue and action across Northern Kenya&apos;s pastoral landscapes.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Working with county governments, community institutions, civil society and development
                partners, RRI will focus on:
              </p>
              <ul className="mt-4 space-y-2 list-disc pl-6 text-muted-foreground leading-relaxed">
                <li>Strengthening pastoral land governance and securing access rights for pastoralist communities.</li>
                <li>Scaling up sustainable rangeland management practices that support mobility and ecosystem health.</li>
                <li>Restoring degraded rangelands through community-led rehabilitation initiatives.</li>
                <li>Strengthening livestock value chains to improve pastoralist incomes and resilience.</li>
                <li>Raising awareness on climate impacts, particularly recurrent drought, and promoting locally driven resilience strategies.</li>
              </ul>
            </section>

            <section className="mt-14">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
                Looking Ahead
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For communities in Northern Kenya, the International Year is more than a global
                campaign — it is a chance to reaffirm the value of pastoralism and the importance
                of investing in resilient dryland ecosystems.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Through collective action, partnerships and community leadership, Resilient Rangelands
                Initiative envisions thriving rangelands, empowered pastoralist communities and
                sustainable livelihoods across Kenya&apos;s ASAL regions.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Because when rangelands thrive, pastoralists thrive — and when pastoralists thrive,
                ecosystems and economies flourish.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Campaigns;
