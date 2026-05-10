// src/components/Polo.jsx

import { useState } from "react";
import { motion } from "framer-motion";

import heroBg from "../assets/polobg.png";

const products = [
  { id: 1, title: "Classic Black Polo", price: "₹899", oldPrice: "₹1499" },
  { id: 2, title: "White Luxe Polo", price: "₹949", oldPrice: "₹1599" },
  { id: 3, title: "Navy Blue Polo", price: "₹999", oldPrice: "₹1699" },
  { id: 4, title: "Olive Green Polo", price: "₹949", oldPrice: "₹1599" },
  { id: 5, title: "Beige Premium Polo", price: "₹1099", oldPrice: "₹1799" },
  { id: 6, title: "Charcoal Polo", price: "₹999", oldPrice: "₹1699" },
  { id: 7, title: "Wine Red Polo", price: "₹1049", oldPrice: "₹1799" },
  { id: 8, title: "Ash Grey Polo", price: "₹949", oldPrice: "₹1599" },
  { id: 9, title: "Luxury Black Polo", price: "₹1199", oldPrice: "₹1999" },
  { id: 10, title: "Minimal White Polo", price: "₹1099", oldPrice: "₹1899" },
  { id: 11, title: "Streetwear Polo", price: "₹999", oldPrice: "₹1699" },
  { id: 12, title: "Sand Beige Polo", price: "₹1099", oldPrice: "₹1899" },
  { id: 13, title: "Royal Navy Polo", price: "₹1199", oldPrice: "₹1999" },
  { id: 14, title: "Sky Blue Polo", price: "₹949", oldPrice: "₹1599" },
  { id: 15, title: "Mocha Brown Polo", price: "₹1099", oldPrice: "₹1899" },
  { id: 16, title: "Premium White Polo", price: "₹1199", oldPrice: "₹1999" },
  { id: 17, title: "Urban Grey Polo", price: "₹999", oldPrice: "₹1699" },
  { id: 18, title: "Forest Green Polo", price: "₹1149", oldPrice: "₹1949" },
  { id: 19, title: "Classic Beige Polo", price: "₹1099", oldPrice: "₹1899" },
  { id: 20, title: "Signature Black Polo", price: "₹1299", oldPrice: "₹2199" },
];

export default function Polo() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProduct = (product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-black text-[#F2E9E4]">
      {!selectedProduct ? (
        <>
          <section className="relative min-h-[70vh] overflow-hidden bg-black sm:min-h-[85vh]">
            <motion.img
              src={heroBg}
              alt="Polo Collection"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

            <div className="relative z-10 flex min-h-[70vh] items-end px-4 pb-10 pt-28 sm:min-h-[85vh] sm:px-8 sm:pb-16 md:px-20 md:pb-24">
              <motion.div
                initial={{ opacity: 0, y: 45 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-3xl"
              >
                <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-[#C9ADA7] sm:text-xs">
                  Luxury Essentials
                </p>

                <h1 className="mb-5 text-[38px] font-black uppercase leading-[0.9] sm:text-6xl md:text-8xl">
                  Polo
                  <span className="block text-[#C9ADA7]">Collection</span>
                </h1>

                <p className="max-w-xl text-sm leading-7 text-[#F2E9E4]/80 sm:text-base md:text-lg">
                  Timeless premium polos crafted for elevated everyday wear,
                  luxury comfort, and refined street styling.
                </p>
              </motion.div>
            </div>
          </section>

          <section id="products" className="px-4 py-12 sm:px-6 md:px-20">
            <div className="mb-10 text-center">
              <p className="mb-2 text-[10px] uppercase tracking-[0.35em] text-[#C9ADA7] sm:text-xs">
                Collection
              </p>

              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                Polo T-Shirts
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => openProduct(product)}
                  className="group cursor-pointer overflow-hidden rounded-[24px] border border-[#4A4E69] bg-[#0B0B0B] transition duration-300 hover:-translate-y-1 hover:border-[#C9ADA7]"
                >
                  <div className="h-[220px] overflow-hidden bg-[#111] sm:h-[250px] md:h-[260px]">
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#22223B] via-black to-[#4A4E69] transition duration-500 group-hover:scale-[1.03]">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9ADA7]">
                        Product Image
                      </span>
                    </div>
                  </div>

                  <div className="p-5 md:p-6">
                    <h3 className="mb-2 text-lg font-semibold">
                      {product.title}
                    </h3>

                    <p className="mb-5 text-lg font-bold text-[#C9ADA7]">
                      {product.price}
                    </p>

                    <div className="flex gap-3">
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 rounded-full bg-[#9A8C98] py-3 text-sm font-semibold text-black transition hover:bg-[#C9ADA7]"
                      >
                        Add
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openProduct(product);
                        }}
                        className="flex-1 rounded-full border border-[#9A8C98] py-3 text-sm font-semibold text-[#F2E9E4] transition hover:bg-[#9A8C98] hover:text-black"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        <section className="w-full overflow-x-hidden px-4 pb-14 pt-24 sm:px-6 md:px-20">
          <button
            onClick={() => setSelectedProduct(null)}
            className="mb-6 rounded-full border border-[#4A4E69] px-5 py-3 text-sm transition hover:border-[#C9ADA7]"
          >
            ← Back
          </button>

          <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-[#4A4E69] bg-[#0B0B0B] p-4 sm:p-6 md:rounded-[40px] md:p-10">
            <div className="grid gap-7 md:grid-cols-2 md:gap-10">
              <div className="min-w-0">
                <div className="flex h-[260px] items-center justify-center rounded-[24px] bg-gradient-to-br from-[#22223B] via-black to-[#4A4E69] sm:h-[380px] md:h-[520px]">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-[#C9ADA7] sm:text-xs">
                    Product Image
                  </span>
                </div>
              </div>

              <div className="min-w-0">
                <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-[#C9ADA7] sm:text-xs">
                  ZYROTH
                </p>

                <h1 className="mb-4 break-words text-2xl font-bold sm:text-4xl md:text-5xl">
                  {selectedProduct.title}
                </h1>

                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <p className="text-2xl font-bold text-[#C9ADA7] sm:text-4xl">
                    {selectedProduct.price}
                  </p>

                  <p className="text-base text-[#777] line-through">
                    {selectedProduct.oldPrice}
                  </p>

                  <p className="text-xs text-[#9A8C98] sm:text-sm">
                    MRP inclusive of all taxes
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="mb-3 font-semibold">Select Size</h3>

                  <div className="flex flex-wrap gap-3">
                    {["S", "M", "L", "XL", "XXL"].map((size, i) => (
                      <button
                        key={size}
                        className={`rounded-full border px-5 py-2 text-sm transition ${
                          i === 1
                            ? "border-[#9A8C98] bg-[#9A8C98] text-black"
                            : "border-[#4A4E69] hover:border-[#C9ADA7]"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="mb-7 text-sm leading-7 text-[#C9ADA7] sm:text-base">
                  Premium polo t-shirt crafted with breathable cotton fabric,
                  luxury fit, elegant collar detailing, and timeless casual
                  style.
                </p>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button className="rounded-full bg-[#9A8C98] py-4 font-bold text-black transition hover:bg-[#C9ADA7]">
                    ADD TO CART
                  </button>

                  <button className="rounded-full border border-[#9A8C98] py-4 font-bold transition hover:bg-[#9A8C98] hover:text-black">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              <div className="rounded-[24px] border border-[#4A4E69] bg-black/35 p-5 sm:p-6">
                <h3 className="mb-4 text-xl font-semibold">
                  Product Details
                </h3>
                <p className="text-sm leading-7 text-[#C9ADA7] sm:text-base">
                  Premium polo t-shirt designed for smart casual styling with
                  clean collar details, breathable comfort, and premium everyday
                  wear.
                </p>
              </div>

              <div className="rounded-[24px] border border-[#4A4E69] bg-black/35 p-5 sm:p-6">
                <h3 className="mb-4 text-xl font-semibold">
                  Specifications
                </h3>

                <div className="space-y-3 text-sm">
                  {[
                    ["Fabric", "Premium Cotton Pique"],
                    ["Fit", "Regular / Smart Fit"],
                    ["Collar", "Polo Collar"],
                    ["Sleeves", "Half Sleeves"],
                    ["Pattern", "Solid"],
                    ["GSM", "220–240 GSM"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex flex-wrap justify-between gap-2 border-b border-[#1F1F1F] pb-2"
                    >
                      <span className="text-[#9A8C98]">{label}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-[#4A4E69] bg-black/35 p-5 sm:p-6">
                <h3 className="mb-4 text-xl font-semibold">
                  Delivery & Returns
                </h3>

                <div className="space-y-3 text-sm leading-7 text-[#C9ADA7] sm:text-base">
                  <p>
                    <b className="text-[#F2E9E4]">Delivery:</b> 4–7 working
                    days.
                  </p>
                  <p>
                    <b className="text-[#F2E9E4]">Shipping:</b> Free above
                    ₹999.
                  </p>
                  <p>
                    <b className="text-[#F2E9E4]">Returns:</b> 7-day easy
                    return and exchange.
                  </p>
                  <p>
                    <b className="text-[#F2E9E4]">Care:</b> Unused product with
                    original tags.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}