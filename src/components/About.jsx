import { motion } from "framer-motion";

import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image12 from "../assets/image12.jpg";
import image13 from "../assets/image13.jpg";
import image14 from "../assets/image14.jpg";
import poloBackground from "../assets/polobackground.png";
import video2 from "../assets/video2.mp4";

const stats = [
  ["30+", "Premium Products"],
  ["6", "Core Fits"],
  ["100%", "Premium Casualwear"],
  ["24/7", "Style Energy"],
];

const carouselData = [
  {
    img: image7,
    title: "Polo Fit",
    desc: "Clean polo styling made for smart casual looks and everyday comfort.",
  },
  {
    img: image8,
    title: "Round Neck",
    desc: "Premium round neck essentials with soft fabric and timeless styling.",
  },
  {
    img: image9,
    title: "Clean Look",
    desc: "Simple colors, premium fit, and effortless styling for everyday wear.",
  },
  {
    img: image12,
    title: "Daily Fit",
    desc: "Comfortable silhouettes with modern casualwear attitude.",
  },
  {
    img: image13,
    title: "Night Wear",
    desc: "Dark tone aesthetics made for evening fits, reels, shoots, and clean looks.",
  },
  {
    img: image14,
    title: "Premium Wear",
    desc: "Comfort-focused t-shirts that still look premium, clean, and stylish.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 70, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -70, scale: 0.96 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 70, scale: 0.96 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const Button = ({ children, onClick, variant = "filled" }) => {
  const filled = variant === "filled";

  return (
    <motion.button
      variants={fadeUp}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`mt-7 w-full rounded-md px-7 py-4 text-[11px] font-bold uppercase tracking-[0.22em] transition-all duration-300 sm:w-fit sm:text-xs ${
        filled
          ? "bg-[#C9ADA7] text-black hover:bg-[#F2E9E4]"
          : "border border-[#C9ADA7] text-[#C9ADA7] hover:bg-[#C9ADA7] hover:text-black"
      }`}
    >
      {children}
    </motion.button>
  );
};

export default function Polo({ setPage }) {
  const goShop = () => {
    if (setPage) setPage("shop");
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-[#F2E9E4]">
      {/* HERO SECTION */}
      <section className="relative min-h-[100svh] overflow-hidden pt-20 sm:pt-24">
        <motion.img
          src={image5}
          alt="ZYROTH Hero"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] sm:object-center"
        />

        <div className="absolute inset-0 bg-black/45 sm:bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/85 sm:bg-gradient-to-r sm:from-black sm:via-black/70 sm:to-transparent" />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 flex min-h-[calc(100svh-5rem)] max-w-3xl flex-col justify-end px-4 pb-12 sm:justify-center sm:px-8 sm:pb-0 md:px-14 lg:px-20"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-[11px] uppercase tracking-[0.28em] text-[#C9ADA7] sm:text-sm sm:tracking-[0.35em]"
          >
            About ZYROTH
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-black uppercase leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Polo &
            <br />
            Round Neck
            <br />
            Essentials.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-sm leading-7 text-[#C9ADA7] sm:text-base md:text-lg"
          >
            Premium polo t-shirts and round neck essentials crafted for clean
            everyday styling, comfort, and modern luxury fits.
          </motion.p>

          <Button onClick={goShop}>Shop New Drop</Button>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="relative bg-black px-4 py-20 sm:px-8 sm:py-24 md:px-14 lg:px-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mx-auto max-w-6xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C9ADA7] sm:text-sm"
          >
            ZYROTH Numbers
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-3xl font-black uppercase leading-tight sm:text-4xl md:text-6xl"
          >
            Built For Premium Casualwear
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#C9ADA7] sm:text-base md:text-lg md:leading-8"
          >
            Our brand focuses on premium polo t-shirts, round neck essentials,
            modern regular fits, breathable fabric, and timeless everyday
            styling.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mx-auto mt-12 grid max-w-7xl overflow-hidden rounded-[28px] border border-[#4A4E69] bg-[#080808] sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.03 }}
              className="border-b border-[#4A4E69] p-8 text-center transition sm:p-10 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <h3 className="mb-3 text-4xl font-black text-[#C9ADA7] md:text-6xl">
                {item[0]}
              </h3>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white sm:text-sm">
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
          className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 md:grid-cols-3"
        >
          {["Premium Cotton", "Polo Fits", "Round Neck Essentials"].map(
            (item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl border border-[#4A4E69] bg-[#0B0B0B] p-6 text-center text-sm uppercase tracking-wider text-[#C9ADA7]"
              >
                {item}
              </motion.div>
            )
          )}
        </motion.div>
      </section>

      {/* STYLE SECTION */}
      <section className="bg-black px-4 py-20 sm:px-8 sm:py-24 md:px-14 lg:px-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-[#4A4E69] sm:min-h-[460px] lg:min-h-[540px]"
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
              className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C9ADA7] sm:text-sm"
            >
              Our Style
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-black uppercase leading-tight sm:text-4xl md:text-6xl lg:text-7xl"
            >
              Clean.
              <br />
              Premium.
              <br />
              Everyday.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-sm leading-7 text-[#C9ADA7] sm:text-base md:text-lg md:leading-8"
            >
              ZYROTH focuses on minimal design with maximum comfort. Our polo
              and round neck pieces are made for people who like simple outfits
              but still want their look to feel sharp, confident, and premium.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-sm leading-7 text-[#9A8C98] sm:text-base md:text-lg md:leading-8"
            >
              Every polo and round neck piece can be styled with denim,
              trousers, cargos, or layered for a clean premium everyday look.
            </motion.p>

            <Button onClick={goShop} variant="outline">
              Explore Collection
            </Button>
          </motion.div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="overflow-hidden bg-black px-4 py-20 sm:px-8 sm:py-24 md:px-14 lg:px-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-10 text-center sm:mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C9ADA7] sm:text-sm"
          >
            Gallery
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-3xl font-black uppercase sm:text-4xl md:text-6xl"
          >
            Latest Fits
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#C9ADA7] sm:text-base md:text-lg md:leading-8"
          >
            Explore different ZYROTH looks through smooth moving image cards —
            from polo styles to clean round neck everyday fits.
          </motion.p>
        </motion.div>

        <div className="overflow-hidden py-6">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-4 sm:gap-6"
          >
            {[...carouselData, ...carouselData].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04, y: -8 }}
                transition={{ duration: 0.3 }}
                className={`group relative h-[340px] w-[250px] shrink-0 overflow-hidden rounded-[26px] border border-[#4A4E69] bg-[#0B0B0B] sm:h-[420px] sm:w-[320px] md:h-[450px] md:w-[380px] ${
                  i % 2 === 1 ? "sm:mt-14" : ""
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
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <h3 className="text-xl font-black uppercase text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#C9ADA7] sm:leading-7">
                    {item.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* STYLE GUIDE */}
      <section className="bg-black px-4 py-20 sm:px-8 sm:py-24 md:px-14 lg:px-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-12 text-center sm:mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C9ADA7] sm:text-sm"
          >
            Style Guide
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-3xl font-black uppercase sm:text-4xl md:text-6xl"
          >
            How To Style ZYROTH
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#C9ADA7] sm:text-base md:text-lg md:leading-8"
          >
            ZYROTH fits are easy to style. Build premium everyday outfits with
            polos, round neck tees, denim, sneakers, jackets, and layered
            pieces.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[
            [
              "01",
              "Polo Fit",
              "Pair a classic polo t-shirt with trousers or denim for a smart casual everyday look.",
            ],
            [
              "02",
              "Round Neck Fit",
              "Style premium round neck tees with relaxed denim for a clean daily outfit.",
            ],
            [
              "03",
              "Layered Fit",
              "Add an open shirt or jacket over your tee to create more depth and shape.",
            ],
            [
              "04",
              "Sneaker Fit",
              "Match your polo or round neck tee with clean sneakers for a sharp finish.",
            ],
            [
              "05",
              "Minimal Fit",
              "Wear neutral shades with simple pants for a premium everyday look.",
            ],
            [
              "06",
              "Night Fit",
              "Choose dark tones, accessories, and relaxed pants for a polished evening vibe.",
            ],
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.35 }}
              className="group rounded-[26px] border border-[#4A4E69] bg-[#080808] p-7 transition hover:border-[#C9ADA7] hover:bg-[#111] sm:p-9"
            >
              <span className="mb-6 block text-5xl font-black text-[#F2E9E4]/10 transition group-hover:text-[#C9ADA7]/20 sm:text-6xl">
                {item[0]}
              </span>

              <h3 className="mb-4 text-xl font-black uppercase text-white sm:text-2xl">
                {item[1]}
              </h3>

              <p className="text-sm leading-7 text-[#C9ADA7] sm:text-base sm:leading-8">
                {item[2]}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* POLO STORY */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-8 sm:py-24 md:px-14 lg:px-20">
        <img
          src={poloBackground}
          alt="Polo Background"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-65"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/25 to-black/80 lg:bg-gradient-to-r lg:from-black/65 lg:via-black/25 lg:to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: false, amount: 0.25 }}
            className="mb-12 max-w-3xl sm:mb-16"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C9ADA7] sm:text-sm sm:tracking-[0.4em]">
              Our Polo Philosophy
            </p>

            <h2 className="text-3xl font-black uppercase leading-tight text-[#F2E9E4] sm:text-4xl md:text-6xl lg:text-7xl">
              Designed For
              <br />
              Quiet Confidence.
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#C9ADA7] sm:text-base md:text-lg md:leading-8">
              Our polo t-shirts are created for people who prefer clean style
              over loud fashion. Every detail — from the collar shape to the
              fabric feel — is made to look simple, premium, and effortless.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                no: "01",
                title: "Clean Collar Identity",
                text: "A sharp collar gives every polo a smarter look without making it feel too formal.",
              },
              {
                no: "02",
                title: "Balanced Everyday Fit",
                text: "Not too loose, not too tight — made for daily comfort with a premium silhouette.",
              },
              {
                no: "03",
                title: "Minimal Luxury Feel",
                text: "Soft colors, clean finishing, and breathable fabric make it easy to style every day.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                viewport={{ once: false }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[28px] border border-[#C9ADA7]/15 bg-black/55 p-7 backdrop-blur-xl sm:p-8"
              >
                <span className="absolute right-5 top-4 text-6xl font-black text-white/5 transition group-hover:text-[#C9ADA7]/10 sm:text-7xl">
                  {item.no}
                </span>

                <div className="relative z-10">
                  <div className="mb-7 h-12 w-12 rounded-full border border-[#C9ADA7]/30 bg-[#C9ADA7]/10 sm:h-14 sm:w-14" />

                  <h3 className="mb-4 text-xl font-black uppercase text-[#F2E9E4] sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-[#C9ADA7]">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 65 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: false }}
            className="mt-12 grid overflow-hidden rounded-[30px] border border-[#C9ADA7]/15 bg-black/55 backdrop-blur-xl lg:grid-cols-2"
          >
            <div className="p-7 sm:p-10 md:p-12">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C9ADA7]">
                Polo & Round Neck
              </p>

              <h3 className="text-3xl font-black uppercase leading-tight text-[#F2E9E4] md:text-5xl">
                Built Around
                <br />
                Everyday Ease.
              </h3>

              <p className="mt-6 text-sm leading-7 text-[#C9ADA7] sm:text-base sm:leading-8">
                ZYROTH is moving towards premium essentials — pieces that are
                easy to wear, easy to repeat, and easy to style. Polo and round
                neck t-shirts are the base of that idea.
              </p>
            </div>

            <div className="grid border-t border-[#C9ADA7]/15 lg:border-l lg:border-t-0">
              {[
                "Premium Cotton Feel",
                "Sharp Clean Details",
                "Modern Regular Fit",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 8 }}
                  className="flex items-center justify-between gap-4 border-b border-[#C9ADA7]/15 p-6 last:border-b-0 sm:p-7"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9ADA7] sm:text-sm sm:tracking-[0.25em]">
                    {item}
                  </span>

                  <span className="text-2xl text-[#F2E9E4]">↗</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUALITY SECTION */}
      <section className="bg-black px-4 py-20 sm:px-8 sm:py-24 md:px-14 lg:px-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C9ADA7] sm:text-sm">
              Quality Promise
            </p>

            <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl md:text-6xl">
              Made For Daily Wear.
              <br />
              Built To Look Premium.
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#C9ADA7] sm:text-base md:text-lg md:leading-8">
              Every ZYROTH piece focuses on comfortable fabric, clean stitching,
              modern regular fitting, and premium finishing so your outfit feels
              good and looks sharp.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#9A8C98] sm:text-base md:text-lg md:leading-8">
              Our goal is simple — create polo and round neck t-shirts that you
              can wear again and again without losing comfort, shape, or style.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="grid gap-4 sm:gap-5"
          >
            {[
              "Soft Fabric Feel",
              "Clean Collar Finish",
              "Premium Regular Fit",
            ].map((item) => (
              <motion.div
                key={item}
                variants={fadeRight}
                whileHover={{ x: 8, scale: 1.02 }}
                className="rounded-2xl border border-[#4A4E69] bg-[#080808] p-6 text-sm uppercase tracking-wider text-[#C9ADA7] sm:p-7 sm:text-base"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative min-h-[85svh] overflow-hidden bg-black px-4 py-20 sm:px-8 sm:py-24 md:px-14 lg:px-20">
        <video
          src={video2}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/85 lg:bg-gradient-to-r lg:from-black/85 lg:via-black/45 lg:to-transparent" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="relative z-10 flex min-h-[65svh] max-w-3xl flex-col justify-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 text-xs uppercase tracking-[0.3em] text-[#C9ADA7] sm:text-sm sm:tracking-[0.4em]"
          >
            New Drop Live
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-black uppercase leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Your Next Fit
            <br />
            Starts Here.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-sm leading-7 text-[#C9ADA7] sm:text-base md:text-lg md:leading-8"
          >
            Explore premium polo and round neck t-shirts made for clean everyday
            outfits. Pick your fit, style it your way, and build a look that
            feels confident from day to night.
          </motion.p>

          <Button onClick={goShop}>Shop Collection</Button>
        </motion.div>
      </section>
    </main>
  );
}