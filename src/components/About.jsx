import { motion } from "framer-motion";

import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";

import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image12 from "../assets/image12.jpg";
import image13 from "../assets/image13.jpg";
import image14 from "../assets/image14.jpg";

import video2 from "../assets/video2.mp4";

const stats = [
  ["30+", "Premium Products"],
  ["6", "Core Fits"],
  ["100%", "Streetwear Focus"],
  ["24/7", "Style Energy"],
];

const carouselData = [
  {
    img: image7,
    title: "Urban Fit",
    desc: "Minimal oversized pieces made for clean city outfits and daily confidence.",
  },
  {
    img: image8,
    title: "Graphic Drop",
    desc: "Bold prints, sharp streetwear energy, and statement looks for every drop.",
  },
  {
    img: image9,
    title: "Clean Look",
    desc: "Simple colors, premium fit, and effortless styling for everyday wear.",
  },
  {
    img: image12,
    title: "Street Vibe",
    desc: "Relaxed silhouettes with modern streetwear attitude and bold comfort.",
  },
  {
    img: image13,
    title: "Night Wear",
    desc: "Dark tone aesthetics made for evening fits, reels, shoots, and street looks.",
  },
  {
    img: image14,
    title: "Daily Wear",
    desc: "Comfort-focused t-shirts that still look premium, clean, and stylish.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 90, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -90, scale: 0.96 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.85, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 90, scale: 0.96 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.85, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 },
  },
};

export default function About({ setPage }) {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-[#F2E9E4]">
      {/* FIRST SECTION */}
      <section className="relative min-h-[100svh] overflow-hidden pt-24 sm:pt-28">
        <motion.img
          src={image5}
          alt="ZYROTH Hero"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] sm:object-center"
        />

        <div className="absolute inset-0 bg-black/40 sm:bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/80 sm:bg-gradient-to-r sm:from-black sm:via-black/65 sm:to-transparent" />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 flex min-h-[calc(100svh-6rem)] max-w-3xl flex-col justify-end px-5 pb-14 sm:justify-center sm:px-8 sm:pb-0 md:px-14 lg:px-20"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C9ADA7] sm:text-sm"
          >
            About ZYROTH
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-black uppercase leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Streetwear
            <br />
            Made Bold.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-sm leading-7 text-[#C9ADA7] sm:text-base md:text-lg"
          >
            Oversized t-shirts, bold prints, and clean everyday fits made for
            premium streetwear styling.
          </motion.p>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setPage("shop")}
            className="mt-7 w-fit rounded-sm bg-[#C9ADA7] px-8 py-4 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-[#F2E9E4]"
          >
            Shop New Drop
          </motion.button>
        </motion.div>
      </section>

      {/* SECOND SECTION */}
      <section className="relative min-h-[85vh] bg-black px-5 py-28 sm:px-8 md:px-14 lg:px-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mx-auto max-w-6xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9ADA7]"
          >
            ZYROTH Numbers
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-black uppercase md:text-6xl"
          >
            Built For Streetwear
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#C9ADA7] md:text-lg"
          >
            Our brand is focused on clean design, comfortable oversized fits,
            premium fabric feel, and bold printed drops that can become your
            daily go-to outfit.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mx-auto mt-16 grid max-w-7xl overflow-hidden rounded-[32px] border border-[#4A4E69] bg-[#080808] sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -12, scale: 1.04 }}
              className="border-b border-[#4A4E69] p-12 text-center transition sm:border-r lg:border-b-0"
            >
              <h3 className="mb-3 text-5xl font-black text-[#C9ADA7] md:text-6xl">
                {item[0]}
              </h3>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-white">
                {item[1]}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3"
        >
          {["Premium Fabric", "Printed Drops", "Clean Fit"].map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.03 }}
              className="rounded-2xl border border-[#4A4E69] bg-[#0B0B0B] p-7 text-center text-base uppercase tracking-wider text-[#C9ADA7]"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* THIRD SECTION */}
      <section className="bg-black px-5 py-28 sm:px-8 md:px-14 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="relative min-h-[540px] overflow-hidden rounded-[36px] border border-[#4A4E69]"
          >
            <img
              src={image6}
              alt="ZYROTH Style"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-2xl"
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9ADA7]"
            >
              Our Style
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl font-black uppercase leading-tight md:text-6xl lg:text-7xl"
            >
              Clean. Bold.
              <br />
              Everyday.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-7 text-base leading-8 text-[#C9ADA7] md:text-lg"
            >
              ZYROTH focuses on minimal design with maximum impact. Our pieces
              are made for people who like simple outfits but still want their
              look to feel powerful, confident, and different.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-base leading-8 text-[#9A8C98] md:text-lg"
            >
              Every tee can be styled in multiple ways — oversized with cargos,
              clean with denim, layered with jackets, or kept simple for a
              premium everyday streetwear look.
            </motion.p>

            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setPage("shop")}
              className="mt-9 rounded-sm border border-[#C9ADA7] px-9 py-4 text-xs font-bold uppercase tracking-wider text-[#C9ADA7] transition hover:bg-[#C9ADA7] hover:text-black"
            >
              Explore Collection
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FOURTH SECTION */}
      <section className="overflow-hidden bg-black px-5 py-28 sm:px-8 md:px-14 lg:px-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-14 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9ADA7]"
          >
            Gallery
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-black uppercase md:text-6xl"
          >
            Latest Fits
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#C9ADA7] md:text-lg"
          >
            Explore different ZYROTH looks through smooth moving image cards —
            from graphic drops to clean everyday fits.
          </motion.p>
        </motion.div>

        <div className="overflow-hidden py-8">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-6"
          >
            {[...carouselData, ...carouselData].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.3 }}
                className={`group relative h-[450px] w-[290px] shrink-0 overflow-hidden rounded-[30px] border border-[#4A4E69] bg-[#0B0B0B] sm:w-[340px] md:w-[400px] ${
                  i % 2 === 1 ? "mt-16" : ""
                }`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className={`h-full w-full object-cover transition duration-700 group-hover:scale-110 ${
                    i % 2 === 1 ? "scale-x-[-1]" : ""
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-90 transition group-hover:opacity-100" />

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="absolute bottom-7 left-7 right-7"
                >
                  <h3 className="text-2xl font-black uppercase text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#C9ADA7]">
                    {item.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FIFTH SECTION - HOW TO STYLE */}
      <section className="bg-black px-5 py-28 sm:px-8 md:px-14 lg:px-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9ADA7]"
          >
            Style Guide
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-black uppercase md:text-6xl"
          >
            How To Style ZYROTH
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#C9ADA7] md:text-lg"
          >
            ZYROTH fits are easy to style. Build premium streetwear outfits with
            cargos, denim, sneakers, jackets, accessories, and layered pieces.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[
            [
              "01",
              "Cargo Fit",
              "Pair printed oversized tees with black cargos and chunky sneakers for a strong streetwear look.",
            ],
            [
              "02",
              "Denim Fit",
              "Style neutral tees with loose denim for a clean daily outfit that feels relaxed but premium.",
            ],
            [
              "03",
              "Layered Fit",
              "Add an open shirt or jacket over your tee to create more depth, shape, and streetwear attitude.",
            ],
            [
              "04",
              "Sneaker Fit",
              "Match your tee with bold sneakers to make the outfit look sharp, clean, and complete.",
            ],
            [
              "05",
              "Minimal Fit",
              "Wear a plain oversized tee with neutral pants for a simple premium everyday look.",
            ],
            [
              "06",
              "Night Fit",
              "Choose dark tones, silver accessories, and relaxed pants for a bold evening streetwear vibe.",
            ],
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -16, scale: 1.04 }}
              transition={{ duration: 0.35 }}
              className="group rounded-[30px] border border-[#4A4E69] bg-[#080808] p-9 transition hover:border-[#C9ADA7] hover:bg-[#111]"
            >
              <span className="mb-7 block text-6xl font-black text-[#F2E9E4]/10 transition group-hover:text-[#C9ADA7]/20">
                {item[0]}
              </span>

              <h3 className="mb-4 text-2xl font-black uppercase text-white">
                {item[1]}
              </h3>

              <p className="text-base leading-8 text-[#C9ADA7]">{item[2]}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SIXTH SECTION */}
      <section className="bg-black px-5 py-28 sm:px-8 md:px-14 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9ADA7]">
              Quality Promise
            </p>

            <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
              Made For Daily Wear.
              <br />
              Built To Stand Out.
            </h2>

            <p className="mt-7 text-base leading-8 text-[#C9ADA7] md:text-lg">
              Every ZYROTH piece focuses on comfortable fabric, clean print
              placement, relaxed oversized fitting, and premium finishing so your
              outfit feels good and looks sharp.
            </p>

            <p className="mt-5 text-base leading-8 text-[#9A8C98] md:text-lg">
              Our goal is simple — create t-shirts that you can wear again and
              again without losing the style, comfort, or streetwear energy.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="grid gap-5"
          >
            {[
              "Soft Fabric Feel",
              "Durable Print Finish",
              "Relaxed Streetwear Fit",
            ].map((item) => (
              <motion.div
                key={item}
                variants={fadeRight}
                whileHover={{ x: 14, scale: 1.02 }}
                className="rounded-2xl border border-[#4A4E69] bg-[#080808] p-7 text-base uppercase tracking-wider text-[#C9ADA7]"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA WITH VIDEO */}
      <section className="relative min-h-[85vh] overflow-hidden bg-black px-5 py-24 sm:px-8 md:px-14 lg:px-20">
        <video
          src={video2}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="relative z-10 flex min-h-[70vh] max-w-3xl flex-col justify-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 text-sm uppercase tracking-[0.4em] text-[#C9ADA7]"
          >
            New Drop Live
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-black uppercase leading-tight md:text-6xl lg:text-7xl"
          >
            Your Next Fit
            <br />
            Starts Here.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-7 text-base leading-8 text-[#C9ADA7] md:text-lg"
          >
            Explore printed streetwear made for bold everyday outfits. Pick your
            fit, style it your way, and build a look that feels confident from
            day to night.
          </motion.p>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setPage("shop")}
            className="mt-9 w-fit rounded-sm bg-[#C9ADA7] px-10 py-4 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-[#F2E9E4]"
          >
            Shop Collection
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}