import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card group bg-card">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4 md:p-5">
        <span className="text-xs font-body tracking-widest uppercase text-muted-foreground">
          {product.category}
        </span>
        <h3 className="font-display text-lg md:text-xl font-medium mt-1 leading-snug">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">
          {product.description}
        </p>
        <p className="font-body text-base font-medium mt-3 text-foreground">
          {product.price}
        </p>
      </div>
    </div>
  );
}
