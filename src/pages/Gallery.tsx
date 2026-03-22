import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SectionReveal from "@/components/SectionReveal";

export default function Gallery() {
  return (
    <main className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="container">
        <SectionReveal>
          <h1 className="font-display text-3xl md:text-5xl font-medium text-center" style={{ lineHeight: 1.1 }}>
            Our Collection
          </h1>
          <p className="mt-4 text-center text-muted-foreground font-body max-w-lg mx-auto">
            Each piece is handmade in small batches. When it's gone, it's gone.
          </p>
        </SectionReveal>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p, i) => (
            <SectionReveal key={p.id} delay={i * 70}>
              <ProductCard product={p} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
