import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";
import image11 from "../assets/image11.png";
import video1 from "../assets/video1.mp4";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const slides = [
  {
    image: img1,
    title: "ZYROTH Essentials",
    subtitle: "Premium cotton t-shirts made for everyday comfort and clean style.",
    button: "Shop Now",
    align: "left",
  },
  {
    image: img2,
    title: "Minimal Drops",
    subtitle: "Simple colors, clean silhouettes, and everyday wear.",
    button: "View Drop",
    align: "right",
  },
  {
    image: img3,
    title: "New Collection",
    subtitle: "Timeless t-shirts designed with premium fabric and detail.",
    button: "Explore",
    align: "left",
  },
  {
    image: img4,
    title: "Everyday Wear",
    subtitle: "Soft, comfortable, and made for modern basics.",
    button: "Shop Collection",
    align: "left",
  },
];

const products = [
  { title: "Black T-Shirt", price: "₹599" },
  { title: "White T-Shirt", price: "₹599" },
  { title: "Grey T-Shirt", price: "₹599" },
  { title: "Beige T-Shirt", price: "₹649" },
  { title: "Brown T-Shirt", price: "₹649" },
  { title: "Olive T-Shirt", price: "₹649" },
  { title: "Navy T-Shirt", price: "₹699" },
  { title: "Charcoal T-Shirt", price: "₹699" },
];

const features = [
  ["✦", "Premium Fabric", "Soft cotton feel with breathable comfort, made for daily wear."],
  ["★", "Oversized Fit", "Relaxed streetwear silhouettes for modern styling."],
  ["↗", "Minimal Style", "Clean colors that match any outfit easily."],
  ["✓", "Quality Stitching", "Strong finishing and clean details for long-lasting use."],
  ["♻", "Everyday Comfort", "Lightweight feel that keeps your look fresh all day."],
  ["⚡", "Fast Delivery", "Quick shipping experience with smooth order updates."],
];

const limitedProducts = [
  { title: "Black Drop Tee", price: "₹799" },
  { title: "White Drop Tee", price: "₹799" },
  { title: "Grey Drop Tee", price: "₹849" },
  { title: "Beige Drop Tee", price: "₹849" },
];

export default function Home() {
  return (
    <main className="bg-black text-[#F2E9E4] pt-24 overflow-hidden">

      {/* HERO */}
      <section className="relative h-[80vh] w-full px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="h-full w-full overflow-hidden rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.9)]"
        >
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            autoplay={{ delay: 4000 }}
            loop
            speed={1200}
            pagination={{ clickable: true }}
            className="h-full w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full w-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover object-top"
                  />

                  <div className="absolute inset-0 bg-black/50" />

                  <div
                    className={`absolute inset-0 flex items-center px-8 md:px-20 ${
                      slide.align === "right"
                        ? "justify-end text-right"
                        : "justify-start text-left"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, delay: 0.3 }}
                      className="max-w-xl"
                    >
                      <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#9A8C98]">
                        New Drop
                      </p>

                      <h1 className="mb-4 bg-gradient-to-r from-[#F2E9E4] via-[#C9ADA7] to-[#9A8C98] bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
                        {slide.title}
                      </h1>

                      <p className="mb-6 text-[#C9ADA7]">
                        {slide.subtitle}
                      </p>

                      <div
                        className={`flex gap-3 ${
                          slide.align === "right"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <button className="rounded-full bg-[#9A8C98] px-6 py-3 text-xs uppercase tracking-wider text-black transition hover:bg-[#C9ADA7]">
                          {slide.button}
                        </button>

                        <button className="rounded-full border border-[#F2E9E4] px-6 py-3 text-xs uppercase tracking-wider transition hover:border-[#C9ADA7] hover:text-[#C9ADA7]">
                          View
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>

      {/* PRODUCTS */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="px-6 py-16 md:px-20"
      >
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#C9ADA7]">
            Collection
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Shop T-Shirts
          </h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {products.map((product, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group overflow-hidden rounded-[28px] border border-[#4A4E69] bg-[#0B0B0B] transition duration-300 hover:border-[#C9ADA7]"
            >
              <div className="h-[260px] overflow-hidden bg-[#111]">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#22223B] via-black to-[#4A4E69] transition duration-700 group-hover:scale-105">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9ADA7]">
                    Product Image
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold">{product.title}</h3>

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
      </motion.section>

      {/* FULL VIDEO / REEL SECTION */}
      <motion.section
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative h-[85vh] w-full overflow-hidden bg-black"
      >
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#111] via-[#22223B] to-black">
          <span className="text-xs uppercase tracking-[0.4em] text-[#C9ADA7]">
            <video
  src={video1}
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 h-full w-full object-cover"
/>
          </span>
        </div>

        {/*
        Video add karni ho to upar wala div hata kar ye use karna:

        <video
          src="/videos/reel.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        */}

        <div className="absolute inset-0 bg-black/55" />

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative z-10 flex h-full items-center px-6 md:px-20"
        >
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#C9ADA7]">
              ZYROTH Reel
            </p>

            <h2 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              Wear The Drop.
              <br />
              Feel The Fit.
            </h2>

            <p className="mb-8 max-w-lg text-[#C9ADA7]">
              Premium oversized t-shirts made for streetwear comfort, clean
              everyday styling, and bold minimal fashion.
            </p>

            <button className="rounded-full bg-[#9A8C98] px-8 py-4 text-xs uppercase tracking-wider text-black transition hover:bg-[#C9ADA7]">
              Explore Collection
            </button>
          </div>
        </motion.div>
      </motion.section>

      {/* WHY CHOOSE US */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="px-6 py-20 md:px-20"
      >
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#C9ADA7]">
            Why Choose Us
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Built For Everyday Streetwear
          </h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.03 }}
              className="rounded-[30px] border border-[#4A4E69] bg-[#0B0B0B] p-8 transition hover:border-[#C9ADA7]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#9A8C98] text-2xl text-black">
                {item[0]}
              </div>

              <h3 className="mb-3 text-xl font-semibold">{item[1]}</h3>

              <p className="text-sm leading-6 text-[#C9ADA7]">{item[2]}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* LIMITED DROP SECTION */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="px-6 pb-20 md:px-20"
      >
        <div className="relative overflow-hidden rounded-[40px] border border-[#4A4E69] px-8 py-16 md:px-16">
  <img
    src={image11}
    alt="Limited Drop Background"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/70" />

  <div className="relative z-10"></div>
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#C9ADA7]">
              Limited Drop
            </p>

            <h2 className="mb-4 text-4xl font-bold md:text-6xl">
              Limited Drop Live
            </h2>

            <p className="mx-auto max-w-xl text-[#C9ADA7]">
              Exclusive oversized t-shirts available for a short time only.
              Once sold out, this drop will not restock.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {limitedProducts.map((product, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group overflow-hidden rounded-[28px] border border-[#4A4E69] bg-[#0B0B0B] transition duration-300 hover:border-[#C9ADA7]"
              >
                <div className="h-[250px] overflow-hidden bg-[#111]">
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#22223B] via-black to-[#4A4E69] transition duration-700 group-hover:scale-105">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9ADA7]">
                      Drop Image
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#9A8C98]">
                    Limited
                  </p>

                  <h3 className="mb-2 text-lg font-semibold">
                    {product.title}
                  </h3>

                  <p className="mb-5 text-lg font-bold text-[#C9ADA7]">
                    {product.price}
                  </p>

                  <button className="w-full rounded-full bg-[#9A8C98] py-3 text-sm font-semibold text-black transition hover:bg-[#C9ADA7]">
                    Shop Drop
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

    </main>
  );
}