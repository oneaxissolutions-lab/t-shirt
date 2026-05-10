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
import poloImg from "../assets/polotshirts.png";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const fadeDown = {
  hidden: { opacity: 0, y: -45 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const productAnim = {
  hidden: { opacity: 0, scale: 0.9, rotate: -2 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
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
    <main className="overflow-x-hidden bg-black pt-20 text-[#F2E9E4] sm:pt-24">
      {/* HERO */}
      <section className="relative h-[82svh] w-full px-3 sm:px-4 md:h-[84vh] md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="h-full w-full overflow-hidden rounded-[22px] shadow-[0_20px_80px_rgba(0,0,0,0.9)] sm:rounded-[30px] md:rounded-[40px]"
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

                  <div className="absolute inset-0 bg-black/28 sm:bg-black/18" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20 md:bg-gradient-to-r md:from-black/60 md:via-black/10 md:to-black/25" />

                  <div
                    className={`absolute inset-0 flex items-end px-5 pb-12 sm:items-center sm:pb-0 md:px-20 ${
                      slide.align === "right"
                        ? "sm:justify-end sm:text-right"
                        : "justify-start text-left"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 55 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, delay: 0.25 }}
                      className="max-w-[340px] sm:max-w-md md:max-w-xl"
                    >
                      <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-[#C9ADA7] sm:text-xs sm:tracking-[0.32em]">
                        {slide.tag}
                      </p>

                      <h1 className="mb-4 bg-gradient-to-r from-[#F2E9E4] via-[#C9ADA7] to-[#9A8C98] bg-clip-text text-4xl font-black uppercase leading-tight text-transparent sm:text-5xl md:text-6xl">
                        {slide.title}
                      </h1>

                      <p className="mb-3 text-sm font-medium text-[#F2E9E4] sm:text-base md:text-lg">
                        {slide.subtitle}
                      </p>

                      <p className="mb-6 max-w-lg text-xs leading-6 text-[#C9ADA7] sm:text-sm md:text-base md:leading-7">
                        {slide.desc}
                      </p>

                      <div
                        className={`flex flex-col gap-3 xs:flex-row sm:flex-row ${
                          slide.align === "right"
                            ? "sm:justify-end"
                            : "justify-start"
                        }`}
                      >
                        <button className="rounded-full bg-[#9A8C98] px-6 py-3 text-[10px] font-bold uppercase tracking-wider text-black transition hover:bg-[#C9ADA7] sm:w-fit md:text-xs">
                          {slide.button}
                        </button>

                        <button className="rounded-full border border-[#F2E9E4] px-6 py-3 text-[10px] font-bold uppercase tracking-wider transition hover:border-[#C9ADA7] hover:text-[#C9ADA7] sm:w-fit md:text-xs">
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

      {/* PREMIUM STACK */}
      <section className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 md:px-12 md:py-24 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4A4E69_0%,#111_45%,#000_100%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -55 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.32em] text-[#C9ADA7]">
              Signature Collection
            </p>

            <h2 className="text-4xl font-black uppercase leading-none text-[#F2E9E4] sm:text-5xl md:text-7xl">
              Built For
              <br />
              Bold Fits
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#C9ADA7] sm:text-base">
              Premium oversized essentials with dark luxury styling, soft comfort,
              clean details and a strong streetwear attitude.
            </p>

            <button className="mt-8 w-full rounded-full bg-[#9A8C98] px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-black transition hover:bg-[#C9ADA7] sm:w-fit">
              Explore Drop
            </button>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-3 lg:relative lg:h-[620px] lg:block">
            {[
              ["01", "Premium Fabric", "Soft feel with breathable comfort.", "lg:left-[6%] lg:top-[30px] lg:rotate-[-12deg]"],
              ["02", "Oversized Fit", "Relaxed streetwear silhouette.", "lg:right-[6%] lg:top-[110px] lg:rotate-[10deg]"],
              ["03", "Minimal Edge", "Clean graphics with bold energy.", "lg:left-[18%] lg:bottom-[70px] lg:rotate-[7deg]"],
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 110, damping: 14, delay: i * 0.15 }}
                whileHover={{ scale: 1.04, rotate: 0 }}
                className={`relative overflow-hidden rounded-[28px] border border-[#C9ADA7]/25 bg-[#0B0B0B] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)] lg:absolute lg:h-[300px] lg:w-[270px] ${card[3]}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A4E69]/60 via-black to-[#9A8C98]/20" />
                <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9ADA7]/20 blur-3xl" />

                <div className="relative z-10">
                  <p className="mb-10 text-xs font-bold text-[#C9ADA7]">
                    {card[0]}
                  </p>

                  <h3 className="text-xl font-black uppercase text-[#F2E9E4] sm:text-2xl">
                    {card[1]}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#C9ADA7]">
                    {card[2]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.18 }}
        className="px-4 py-16 sm:px-6 md:px-12 lg:px-20"
      >
        <motion.div variants={fadeDown} className="mb-10 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.32em] text-[#C9ADA7]">
            Collection
          </p>
          <h2 className="text-3xl font-black uppercase md:text-5xl">
            Shop T-Shirts
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.12 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {products.map((product, i) => (
            <motion.div
              key={i}
              variants={productAnim}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group overflow-hidden rounded-[26px] border border-[#4A4E69] bg-[#0B0B0B] transition duration-300 hover:border-[#C9ADA7]"
            >
              <div className="h-[210px] overflow-hidden bg-[#111] sm:h-[240px]">
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

      {/* VIDEO */}
      <section className="relative h-[75svh] w-full overflow-hidden bg-black md:h-[85vh]">
        <video
          src={video1}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/20 md:bg-gradient-to-r md:from-black/70 md:via-black/20 md:to-transparent" />

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85 }}
          viewport={{ once: false }}
          className="relative z-10 flex h-full items-center px-4 sm:px-6 md:px-12 lg:px-20"
        >
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C9ADA7]">
              ZYROTH Reel
            </p>

            <h2 className="mb-6 text-4xl font-black uppercase leading-tight sm:text-5xl md:text-7xl">
              Wear The Drop.
              <br />
              Feel The Fit.
            </h2>

            <p className="mb-8 max-w-lg text-sm leading-7 text-[#C9ADA7] md:text-base">
              Premium oversized t-shirts made for streetwear comfort, clean
              everyday styling, and bold minimal fashion.
            </p>

            <button className="w-full rounded-full bg-[#9A8C98] px-8 py-4 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-[#C9ADA7] sm:w-fit">
              Explore Collection
            </button>
          </div>
        </motion.div>
      </section>

      {/* BETTER POLO SECTION */}
      <section className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 md:px-12 md:py-24 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,#9A8C98_0%,rgba(154,140,152,0.18)_22%,transparent_45%),radial-gradient(circle_at_15%_20%,#4A4E69_0%,rgba(74,78,105,0.28)_28%,transparent_55%),#000]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -65 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: false, amount: 0.2 }}
            className="order-2 lg:order-1"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#C9ADA7]">
              Polo Collection
            </p>

            <h2 className="text-4xl font-black uppercase leading-[0.95] text-[#F2E9E4] sm:text-5xl md:text-7xl">
              Polo Made
              <br />
              For Clean
              <br />
              Fits.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#C9ADA7] sm:text-base">
              Premium polo t-shirts with sharp collars, soft cotton feel,
              breathable comfort and modern regular fitting for everyday style.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Soft Collar", "Premium Cotton", "Modern Fit"].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-[#C9ADA7]/20 bg-white/5 px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9ADA7] backdrop-blur-md"
                >
                  {item}
                </div>
              ))}
            </div>

            <button className="mt-8 w-full rounded-full bg-[#C9ADA7] px-8 py-4 text-xs font-black uppercase tracking-[0.24em] text-black transition hover:bg-[#F2E9E4] sm:w-fit">
              Shop Polo T-Shirts
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 65, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative mx-auto max-w-[620px]">
              <div className="absolute -inset-5 rounded-[38px] bg-[#C9ADA7]/15 blur-3xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-[#C9ADA7]/25 bg-[#0B0B0B] p-3 shadow-[0_35px_120px_rgba(0,0,0,0.9)] sm:rounded-[42px] sm:p-4">
                <img
                  src={poloImg}
                  alt="Polo T-Shirts Collection"
                  className="h-[330px] w-full rounded-[24px] object-cover object-center sm:h-[460px] md:h-[560px]"
                />

                <div className="absolute inset-3 rounded-[24px] bg-gradient-to-t from-black/75 via-transparent to-transparent sm:inset-4" />

                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-7 left-7 rounded-full border border-[#C9ADA7]/30 bg-black/80 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9ADA7] backdrop-blur-md"
                >
                  Premium Cotton
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-6 top-6 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-right backdrop-blur-md"
                >
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9ADA7]">
                    Starting
                  </p>
                  <p className="text-xl font-black text-[#F2E9E4]">₹799</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.18 }}
        className="px-4 py-20 sm:px-6 md:px-12 lg:px-20"
      >
        <motion.div variants={fadeDown} className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#C9ADA7]">
            Why Choose Us
          </p>

          <h2 className="text-3xl font-black uppercase leading-tight md:text-5xl">
            Built For Everyday Streetwear
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.025 }}
              className="rounded-[26px] border border-[#4A4E69] bg-[#0B0B0B] p-7 transition hover:border-[#C9ADA7] sm:p-8"
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

      {/* LIMITED DROP */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.18 }}
        className="px-4 pb-20 sm:px-6 md:px-12 lg:px-20"
      >
        <div className="relative overflow-hidden rounded-[28px] border border-[#4A4E69] px-5 py-14 sm:rounded-[40px] sm:px-8 md:px-16">
          <motion.img
            src={image11}
            alt="Limited Drop Background"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: false }}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/75" />

          <div className="relative z-10">
            <div className="mb-10 text-center sm:mb-12">
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#C9ADA7]">
                Limited Drop
              </p>

              <h2 className="mb-4 text-4xl font-black uppercase leading-tight md:text-6xl">
                Limited Drop Live
              </h2>

              <p className="mx-auto max-w-xl text-sm leading-7 text-[#C9ADA7] sm:text-base">
                Exclusive oversized t-shirts available for a short time only.
                Once sold out, this drop will not restock.
              </p>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.15 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {limitedProducts.map((product, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="group overflow-hidden rounded-[26px] border border-[#4A4E69] bg-black/80 backdrop-blur-md transition duration-300 hover:border-[#C9ADA7]"
                >
                  <div className="h-[220px] overflow-hidden bg-[#111] sm:h-[250px]">
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
        </div>
      </motion.section>

      {/* REELS */}
      <section className="px-4 pb-24 sm:px-6 md:px-12 lg:px-20">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#C9ADA7]">
              Reels
            </p>

            <h2 className="text-3xl font-black uppercase md:text-5xl">
              ZYROTH On Reels
            </h2>
          </div>

          <button className="w-full rounded-full bg-[#9A8C98] px-7 py-3 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-[#C9ADA7] sm:w-fit">
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
      </section>
    </main>
  );
}