import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import image10 from "../assets/image10.png";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const products = Array.from({ length: 30 }, (_, i) => ({
  title: `ZYROTH Oversized Tee ${i + 1}`,
  price: i % 3 === 0 ? "₹699" : i % 3 === 1 ? "₹799" : "₹899",
  tag: i % 3 === 0 ? "New Drop" : i % 3 === 1 ? "Best Seller" : "Limited",
}));

export default function Shop({ setPage }) {
  return (
    <main className="min-h-screen overflow-hidden bg-black px-5 pb-20 pt-36 text-[#F2E9E4] sm:px-6 md:px-12 lg:px-20">

      {/* TOP BAR */}
      <motion.div
        initial={{ opacity: 0, x: -35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex items-center justify-between"
      >
        <button
          onClick={() => setPage("home")}
          className="group flex items-center gap-2 rounded-full border border-[#4A4E69] bg-[#0B0B0B] px-5 py-3 text-xs uppercase tracking-wider text-[#C9ADA7] transition hover:border-[#C9ADA7] hover:bg-[#151515]"
        >
          <ArrowLeft size={16} className="transition group-hover:-translate-x-1" />
          Back Home
        </button>

        <p className="hidden text-xs uppercase tracking-[0.3em] text-[#9A8C98] md:block">
          30 Products
        </p>
      </motion.div>

      {/* 🔥 HERO SECTION WITH IMAGE10 */}
      <motion.section
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="relative mb-14 overflow-hidden rounded-[38px] border border-[#4A4E69] px-6 py-14 text-center sm:px-10 md:py-20"
      >
        {/* BG IMAGE */}
        <img
          src={image10}
          alt="ZYROTH Shop Background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/65"></div>

        {/* BLUR EFFECTS */}
        <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#9A8C98]/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#C9ADA7]/10 blur-3xl" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C9ADA7]">
            Shop Collection
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Premium Oversized
            <br />
            T-Shirts
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#C9ADA7] md:text-base">
            Discover clean streetwear essentials crafted for comfort, bold fits,
            and everyday confidence. Minimal colors. Premium feel. ZYROTH energy.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Oversized Fit", "Premium Cotton", "Limited Drops"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#C9ADA7]/40 bg-black/40 px-5 py-2 text-xs uppercase tracking-wider text-[#F2E9E4]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PRODUCTS GRID */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {products.map((product, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group overflow-hidden rounded-[28px] border border-[#4A4E69] bg-[#0B0B0B] transition hover:border-[#C9ADA7]"
          >
            <div className="relative h-[245px] overflow-hidden bg-[#111] sm:h-[260px]">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#22223B] via-black to-[#4A4E69] transition duration-700 group-hover:scale-105">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9ADA7]">
                  Product Image
                </span>
              </div>

              <span className="absolute left-4 top-4 rounded-full bg-black/70 px-4 py-2 text-[10px] uppercase tracking-wider text-[#C9ADA7] backdrop-blur-md">
                {product.tag}
              </span>
            </div>

            <div className="p-6">
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#9A8C98]">
                ZYROTH
              </p>

              <h3 className="mb-2 text-lg font-semibold">
                {product.title}
              </h3>

              <p className="mb-5 text-lg font-bold text-[#C9ADA7]">
                {product.price}
              </p>

              <button className="w-full rounded-full bg-[#9A8C98] py-3 text-sm font-semibold text-black transition hover:bg-[#C9ADA7]">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </main>
  );
}