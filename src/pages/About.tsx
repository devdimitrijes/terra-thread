import aboutImg from "@/assets/about.jpg";
import SectionReveal from "@/components/SectionReveal";

export default function About() {
  return (
    <main className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="container">
        <SectionReveal>
          <h1 className="font-display text-3xl md:text-5xl font-medium text-center" style={{ lineHeight: 1.1 }}>
            Our Story
          </h1>
        </SectionReveal>

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <SectionReveal>
            <div className="overflow-hidden rounded-md">
              <img
                src={aboutImg}
                alt="Artisan shaping clay on a pottery wheel"
                className="w-full h-auto object-cover"
              />
            </div>
          </SectionReveal>
          <SectionReveal delay={100}>
            <div className="space-y-5 font-body text-foreground/80 leading-relaxed">
              <p>
                Terra & Thread started in a small garage studio in 2019 — just a wheel, a loom, and a belief 
                that things made slowly carry something mass production can't replicate.
              </p>
              <p>
                We work with natural, locally sourced materials: stoneware clay from the region, organic linen, 
                sustainably harvested wood. Every product passes through our hands dozens of times before it reaches yours.
              </p>
              <p>
                Our process is deliberately unhurried. We fire ceramics in small kilns, weave textiles on hand looms, 
                and finish woodwork with food-safe oils rather than synthetic coatings. The result is something that 
                feels alive — imperfect, warm, and genuinely useful.
              </p>
              <p className="text-foreground font-medium">
                We don't make things to fill shelves. We make things to fill homes.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </main>
  );
}
