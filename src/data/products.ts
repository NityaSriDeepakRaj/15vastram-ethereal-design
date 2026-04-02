import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  { id: "1", name: "Maroon Zari Kurta", price: 8500, category: "Kurtas", image: product1 },
  { id: "2", name: "Ivory Gold Anarkali", price: 14500, category: "Anarkali", image: product2 },
  { id: "3", name: "Teal Banarasi Saree", price: 22000, category: "Sarees", image: product3 },
  { id: "4", name: "Rose Embroidered Lehenga", price: 18500, category: "Lehengas", image: product4 },
  { id: "5", name: "Navy Chanderi Set", price: 9200, category: "Kurta Sets", image: product5 },
  { id: "6", name: "Mustard Block Print Kurta", price: 6800, category: "Kurtas", image: product6 },
];
