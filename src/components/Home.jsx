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
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const fadeDown = {
  hidden: { opacity: 0, y: -60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const productAnim = {
  hidden: { opacity: 0, scale: 0.86, rotate: -2 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const slides = [
  {
    image: img1,
    tag: "Premium Basics",
    title: "ZYROTH Essentials",
    subtitle: "Premium cotton t-shirts made for everyday comfort and clean style.",
    desc: "Soft touch fabric, relaxed fit, and clean everyday styling for your daily wardrobe.",
    button: "Shop Now",
    align: "left",
    mobilePosition: "58% center",
    desktopPosition: "center top",
  },
  {
    image: img2,
    tag: "Fresh Drop",
    title: "Minimal Drops",
    subtitle: "Simple colors, clean silhouettes, and everyday wear.",
    desc: "Designed for people who love simple fashion with a premium streetwear feel.",
    button: "View Drop",
    align: "right",
    mobilePosition: "48% center",
    desktopPosition: "center top",
  },
  {
    image: img3,
    tag: "New Collection",
    title: "New Collection",
    subtitle: "Timeless t-shirts designed with premium fabric and detail.",
    desc: "Every piece is made to feel comfortable, look sharp, and match your daily fits.",
    button: "Explore",
    align: "left",
    mobilePosition: "55% center",
    desktopPosition: "center top",
  },
  {
    image: img4,
    tag: "Street Comfort",
    title: "Everyday Wear",
    subtitle: "Soft, comfortable, and made for modern basics.",
    desc: "From casual days to street looks, ZYROTH keeps your style clean and confident.",
    button: "Shop Collection",
    align: "left",
    mobilePosition: "52% center",
    desktopPosition: "center top",
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
      <section className="relative h-[78vh] w-full px-3 sm:px-4 md:h-[80vh] md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="h-full w-full overflow-hidden rounded-[26px] shadow-[0_20px_80px_rgba(0,0,0,0.9)] md:rounded-[40px]"
        >
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            autoplay={{ delay: 4200, disableOnInteraction: false }}
            loop
            speed={1200}
            pagination={{ clickable: true }}
            className="h-full w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full w-full">
                  <motion.img
                    src={slide.image}
                    alt={slide.title}
                    initial={{ scale: 1.04 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 4.5, ease: "easeOut" }}
                    style={{
                      "--mobile-pos": slide.mobilePosition,
                      "--desktop-pos": slide.desktopPosition,
                    }}
                    className="h-full w-full object-cover object-[var(--mobile-pos)] md:object-[var(--desktop-pos)]"
                  />

                  <div className="absolute inset-0 bg-black/18" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/5 to-black/25" />

                  <div
                    className={`absolute inset-0 flex items-center px-5 md:px-20 ${
                      slide.align === "right"
                        ? "justify-end text-right"
                        : "justify-start text-left"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 60 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, delay: 0.25 }}
                      className="max-w-[310px] sm:max-w-md md:max-w-xl"
                    >
                      <motion.p
                        initial={{ opacity: 0, y: -18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                        className="mb-3 text-[10px] uppercase tracking-[0.32em] text-[#C9ADA7] md:text-xs"
                      >
                        {slide.tag}
                      </motion.p>

                      <motion.h1
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.45 }}
                        className="mb-4 bg-gradient-to-r from-[#F2E9E4] via-[#C9ADA7] to-[#9A8C98] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-6xl"
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.55 }}
                        className="mb-3 text-sm text-[#F2E9E4] md:text-lg"
                      >
                        {slide.subtitle}
                      </motion.p>

                      <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.65 }}
                        className="mb-7 max-w-lg text-xs leading-6 text-[#C9ADA7] md:text-base md:leading-7"
                      >
                        {slide.desc}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.75 }}
                        className={`flex gap-3 ${
                          slide.align === "right"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <button className="rounded-full bg-[#9A8C98] px-5 py-3 text-[10px] uppercase tracking-wider text-black transition hover:bg-[#C9ADA7] md:px-6 md:text-xs">
                          {slide.button}
                        </button>

                        <button className="rounded-full border border-[#F2E9E4] px-5 py-3 text-[10px] uppercase tracking-wider transition hover:border-[#C9ADA7] hover:text-[#C9ADA7] md:px-6 md:text-xs">
                          View
                        </button>
                      </motion.div>
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
        viewport={{ once: false, amount: 0.18 }}
        className="px-6 py-16 md:px-20"
      >
        <motion.div variants={fadeDown} className="mb-10 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#C9ADA7]">
            Collection
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Shop T-Shirts</h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.12 }}
          className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {products.map((product, i) => (
            <motion.div
              key={i}
              variants={productAnim}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group overflow-hidden rounded-[28px] border border-[#4A4E69] bg-[#0B0B0B] transition duration-300 hover:border-[#C9ADA7]"
            >
              <div className="h-[210px] overflow-hidden bg-[#111] sm:h-[240px] md:h-[260px]">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.15,
                  }}
                  className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#22223B] via-black to-[#4A4E69] transition duration-700 group-hover:scale-105"
                >
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9ADA7]">
                    Product Image
                  </span>
                </motion.div>
              </div>

              <div className="p-5 md:p-6">
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

      {/* FULL VIDEO SECTION */}
      <motion.section
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.25 }}
        className="relative h-[75vh] w-full overflow-hidden bg-black md:h-[85vh]"
      >
        <video
          src={video1}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/25" />

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: false }}
          className="relative z-10 flex h-full items-center px-6 md:px-20"
        >
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#C9ADA7]">
              ZYROTH Reel
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight md:text-7xl">
              Wear The Drop.
              <br />
              Feel The Fit.
            </h2>

            <p className="mb-8 max-w-lg text-sm leading-7 text-[#C9ADA7] md:text-base">
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
        viewport={{ once: false, amount: 0.18 }}
        className="px-6 py-20 md:px-20"
      >
        <motion.div variants={fadeDown} className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#C9ADA7]">
            Why Choose Us
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Built For Everyday Streetwear
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
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
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.18 }}
        className="px-6 pb-20 md:px-20"
      >
        <div className="relative overflow-hidden rounded-[40px] border border-[#4A4E69] px-8 py-16 md:px-16">
          <motion.img
            src={image11}
            alt="Limited Drop Background"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: false }}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/72" />

          <motion.div
            animate={{ x: ["-30%", "130%"] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 z-[1] h-full w-[35%] rotate-12 bg-white/10 blur-3xl"
          />

          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >
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
              viewport={{ once: false, amount: 0.15 }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {limitedProducts.map((product, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -12, scale: 1.035 }}
                  transition={{ duration: 0.35 }}
                  className="group overflow-hidden rounded-[28px] border border-[#4A4E69] bg-black/80 backdrop-blur-md transition duration-300 hover:border-[#C9ADA7]"
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
          </motion.div>
        </div>
      </motion.section>

      {/* REELS SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.18 }}
        className="px-6 pb-24 md:px-20"
      >
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.4em] text-[#C9ADA7]">
              Reels
            </p>

            <h2 className="text-3xl font-black uppercase md:text-5xl">
              ZYROTH On Reels
            </h2>
          </div>

          <button className="w-fit rounded-full bg-[#9A8C98] px-7 py-3 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-[#C9ADA7]">
            Instagram
          </button>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[1, 2, 3, 4].map((item, index) => (
            <motion.div
              key={item}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative h-[240px] overflow-hidden rounded-[26px] border border-[#4A4E69] bg-[#0B0B0B]"
            >
              <div className="absolute left-4 top-4 z-10 rounded-full bg-[#F2E9E4] px-3 py-1 text-[10px] font-bold text-black">
                0{index + 1}
              </div>

              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#22223B] via-black to-[#4A4E69]">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C9ADA7] bg-black/40 text-[10px] uppercase tracking-[0.25em] text-[#C9ADA7] transition group-hover:scale-110">
                  Reel
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="mb-1 text-[10px] uppercase tracking-[0.25em] text-[#9A8C98]">
                  ZYROTH DROP
                </p>

                <h3 className="text-xl font-black uppercase">Street Fit</h3>
              </div>

              <div className="absolute inset-0 bg-black/30 opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </main>
  );
}