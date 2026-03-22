import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SectionReveal from "@/components/SectionReveal";

export default function Index() {
  const featured = products.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Handmade ceramic collection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>
        <div className="container relative z-10 py-32">
          <SectionReveal>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold text-primary-foreground leading-[1.05] max-w-2xl"
                style={{ lineHeight: 1.05 }}>
              Made by Hand,<br />Meant to Last
            </h1>
          </SectionReveal>
          <SectionReveal delay={120}>
            <p className="mt-5 text-primary-foreground/85 text-base md:text-lg max-w-md leading-relaxed font-body">
              Small-batch ceramics, textiles, and home goods crafted with natural materials and quiet intention.
            </p>
          </SectionReveal>
          <SectionReveal delay={240}>
            <Link
              to="/gallery"
              className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-body text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
            >
              Explore Collection <ArrowRight size={16} />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* Brand intro */}
      <section className="py-20 md:py-28">
        <div className="container max-w-2xl text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl md:text-4xl font-medium" style={{ lineHeight: 1.15 }}>
              Craft with Purpose
            </h2>
          </SectionReveal>
          <SectionReveal delay={80}>
            <p className="mt-5 text-muted-foreground leading-relaxed text-base md:text-lg font-body">
              Every Terra & Thread piece begins as raw material — clay, fiber, wood — shaped slowly into something 
              useful and beautiful. We believe the best things are made without rush, designed to age well, 
              and rooted in respect for the maker's hand.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Featured products */}
      <section className="pb-20 md:pb-28">
        <div className="container">
          <SectionReveal>
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-medium" style={{ lineHeight: 1.15 }}>
                Featured Pieces
              </h2>
              <Link
                to="/gallery"
                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors hidden sm:flex items-center gap-1"
              >
                View all <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featured.map((p, i) => (
              <SectionReveal key={p.id} delay={i * 80}>
                <ProductCard product={p} />
              </SectionReveal>
            ))}
          </div>
          <SectionReveal>
            <div className="mt-8 text-center sm:hidden">
              <Link
                to="/gallery"
                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                View all <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
