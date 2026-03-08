export type StoryImage = {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
};

export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author?: string;
  images: StoryImage[];
  body: string;
};

export const stories: Story[] = [
  {
    slug: "pastoralist-women-international-womens-day",
    title: "The Strength of the Silent Backbone: Celebrating Pastoralist Women This International Women's Day",
    excerpt:
      "Far from the busy cities, in the dry rangelands of northern Kenya, pastoralist women — the silent backbone of families and communities — unfold a different story of courage every day.",
    date: "2026-03-08",
    author: "Resilient Rangelands Initiative",
    images: [
      {
        src: "/stories/story-1-tea.png",
        alt: "A young mother preparing tea for her family in Malkagalla",
        caption: "A young Mother preparing tea for her family in Malkagalla",
      },
      {
        src: "/stories/story-1-water-women.png",
        alt: "Women carrying water in the rangelands",
        caption: "Photo credit: Lambert Coleman",
        credit: "Lambert Coleman",
      },
      {
        src: "/stories/story-1-well.png",
        alt: "A woman fetching water at a shallow well in Modogashe",
        caption: "A woman in Modogashe fetching water at a shallow well",
      },
      {
        src: "/stories/story-1-cart.png",
        alt: "Community transporting water by cart",
        caption: "Transporting water in the rangelands",
      },
    ],
    body: `As the world celebrates International Women's Day, we pause to honor the strength, resilience, and unwavering spirit of women everywhere. Yet, far from the busy cities and global spotlight, in the dry rangelands of northern Kenya, a different story of courage quietly unfolds every single day. It is the story of pastoralist women — the silent backbone of families and communities across Isiolo and the wider ASAL (Arid and Semi-Arid Lands) regions.

Long before the sun rises over the vast rangelands, many pastoralist women are already awake. At 3 a.m., when most households are still asleep, they begin their day. With a jerrycan balanced on their backs or heads, they trek long distances in search of water — sometimes walking for hours across dry landscapes where every drop is precious.

[IMAGE:1]

Their journey does not end there.

Upon returning home, they milk the cows or goats, preparing fresh milk for the family. Soon after, the fire is lit. Tea is brewed. Children are awakened and prepared for the day. The herdsboys are readied to lead livestock across the rangelands in search of pasture and water. In these quiet moments before dawn, pastoralist women have already accomplished what many would consider a full day's work.

[IMAGE:2]

And still, their responsibilities continue.

They care for children, manage the household, gather firewood, process milk, and often walk long distances again during the day. In times of drought — which are becoming more frequent in ASAL regions — the burden grows even heavier. Livestock grow weaker, water sources dry up, and it is the women who stretch every available resource to keep families going.

Despite carrying so much responsibility, pastoralist women are often the most overlooked. Their voices rarely reach decision-making tables. Their labor goes unseen. Their sacrifices are rarely documented.

[IMAGE:3]

Yet, these women remain pillars of resilience.

Through droughts, climate shocks, and economic hardships, they have stood the test of time. They nurture families, sustain pastoral livelihoods, and keep communities together even in the most difficult seasons.

This International Women's Day, we choose to see them.

At Resilient Rangelands Initiative (RRI), we recognize that pastoralist women are not just caregivers — they are leaders, resource managers, and agents of change. Their knowledge of the land, livestock, and survival in harsh climates is invaluable. Their strength fuels the resilience of entire communities.

Today, we celebrate their courage.

We celebrate the mother who walks miles before sunrise so her children can drink clean water.
We celebrate the woman who milks the cows and ensures her family has food on the table.
We celebrate the quiet endurance of those whose work holds pastoral life together.

Your struggles have not been in vain. Your strength has not gone unnoticed. And your voices matter.

At Resilient Rangelands Initiative (RRI), we stand with you. We commit to amplifying your voices, supporting your livelihoods, and ensuring that your sacrifices and contributions are recognized, valued, and supported.

To every pastoralist woman in Isiolo and across Kenya's ASAL regions — we see you. We honor you. And we celebrate you today and every day.

Happy International Women's Day.`,
  },
];

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}

export function getAllStorySlugs(): string[] {
  return stories.map((s) => s.slug);
}
