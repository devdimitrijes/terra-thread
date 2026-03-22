import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Clay Horizon Mug",
    description: "Hand-thrown terracotta mug with a two-tone glaze, perfect for your morning ritual.",
    price: "$38",
    image: product1,
    category: "Ceramics",
  },
  {
    id: 2,
    name: "Ember Glow Candle",
    description: "Hand-poured soy candle in a ceramic vessel, scented with cedar and wild fig.",
    price: "$28",
    image: product2,
    category: "Home",
  },
  {
    id: 3,
    name: "Woven Market Tote",
    description: "Handwoven linen tote with braided jute handles, built to carry your world.",
    price: "$52",
    image: product3,
    category: "Textiles",
  },
  {
    id: 4,
    name: "Olive Wood Board",
    description: "Carved from a single piece of olive wood, each board is one of a kind.",
    price: "$64",
    image: product4,
    category: "Kitchen",
  },
  {
    id: 5,
    name: "Herb Garden Soap",
    description: "Cold-pressed soap with lavender, rosemary, and shea butter. Gentle on skin.",
    price: "$14",
    image: product5,
    category: "Body",
  },
  {
    id: 6,
    name: "Cream Knit Scarf",
    description: "Hand-knitted merino wool scarf in a classic cream. Soft, warm, timeless.",
    price: "$46",
    image: product6,
    category: "Textiles",
  },
];
