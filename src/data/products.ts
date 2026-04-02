import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";
import product9 from "@/assets/product-9.jpg";
import product10 from "@/assets/product-10.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  { id: "1", name: "Maroon Zari Kurta", price: 8500, category: "Kurtis", image: product1 },
  { id: "2", name: "Ivory Gold Anarkali", price: 14500, category: "Anarkali", image: product2 },
  { id: "3", name: "Teal Banarasi Saree", price: 22000, category: "Sarees", image: product3 },
  { id: "4", name: "Rose Embroidered Lehenga", price: 18500, category: "Lehengas", image: product4 },
  { id: "5", name: "Navy Chanderi Kurti Set", price: 9200, category: "Kurtis", image: product5 },
  { id: "6", name: "Mustard Block Print Kurti", price: 6800, category: "Kurtis", image: product6 },
  { id: "7", name: "Sage Chikankari Kurti", price: 5900, category: "Kurtis", image: product7 },
  { id: "8", name: "Ivory Lucknowi Kurti", price: 7200, category: "Kurtis", image: product8 },
  { id: "9", name: "Cobalt Silk Kurti", price: 8800, category: "Kurtis", image: product9 },
  { id: "10", name: "Rose Gota Patti Kurti", price: 10500, category: "Kurtis", image: product10 },
];

export const kurtis = products.filter((p) => p.category === "Kurtis");
