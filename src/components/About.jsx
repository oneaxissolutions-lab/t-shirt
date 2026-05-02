import { motion } from "framer-motion";
import {
  ArrowLeft,
  Sparkles,
  Shirt,
  ShieldCheck,
  Truck,
  Scissors,
  PackageCheck,
  Heart,
  Star,
} from "lucide-react";

import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image7 from "../assets/image7.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 55 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14 },
  },
};

const values = [
  {
    icon: Shirt,
    title: "Oversized Comfort",
    text: "Relaxed silhouettes made for daily streetwear looks and all-day comfort.",
  },
  {
    icon: Sparkles,
    title: "Minimal Aesthetic",
    text: "Clean colors, simple details, and premium styling without extra noise.",
  },
  {
    icon: ShieldCheck,
    title: "Quality First",
    text: "Soft fabric feel, durable stitching, and finishing that feels premium.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    text: "Smooth order experience with quick shipping updates.",
  },
];

const stats = [
  ["30+", "Premium Products"],
  ["6", "Core Fits"],
  ["100%", "Streetwear Focus"],
  ["24/7", "Style Energy"],
];

const process = [
  {
    icon: Scissors,
    title: "Designed Clean",
    text: "Every drop starts with minimal design, balanced colors, and easy styling.",
  },
  {
    icon: Shirt,
    title: "Fit Tested",
    text: "Oversized proportions are made to look relaxed without feeling messy.",
  },
  {
    icon: PackageCheck,
    title: "Packed Premium",
    text: "Every order is prepared with a clean brand experience from start to finish.",
  },
];

export default function About({ setPage }) {
  return (
    <main className="min-h-screen overflow-hidden bg-black px-5 pb-24 pt-36 text-[#F2E9E4] sm:px-6 md:px-12 lg:px-20">
      <motion.button
        onClick={() => setPage("home")}
        initial={{ opacity: 0, x: -35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex items-center gap-2 rounded-full border border-[#4A4E69] bg-[#0B0B0B] px-5 py-3 text-xs uppercase tracking-wider text-[#C9ADA7] transition hover:border-[#C9ADA7] hover:bg-[#151515]"
      >
        <ArrowLeft size={16} />
        Back Home
      </motion.button>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative mb-16 overflow-hidden rounded-[42px] border border-[#4A4E69] bg-gradient-to-br from-[#22223B] via-black to-[#4A4E69] px-6 py-20 text-center md:px-16 md:py-28"
      >
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#9A8C98]/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-[#C9ADA7]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[34px] px-6 py-14 md:px-12">
          <img
            src={image5}
            alt="ZYROTH Hero"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />

          <div className="relative z-10">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#C9ADA7]">
              About ZYROTH
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Minimal Streetwear.
              <br />
              Maximum Presence.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#C9ADA7] md:text-base">
              ZYROTH is built for people who like clean outfits, oversized
              comfort, and premium everyday t-shirts. Our style is simple, bold,
              and made to feel effortless.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Premium Cotton", "Oversized Fit", "Limited Drops"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#C9ADA7]/40 bg-black/40 px-5 py-2 text-xs uppercase tracking-wider text-[#F2E9E4]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* STATS */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.02 }}
            className="rounded-[28px] border border-[#4A4E69] bg-[#0B0B0B] p-8 text-center transition hover:border-[#C9ADA7]"
          >
            <h3 className="mb-2 text-4xl font-bold text-[#C9ADA7]">
              {item[0]}
            </h3>
            <p className="text-sm uppercase tracking-[0.25em] text-[#F2E9E4]/80">
              {item[1]}
            </p>
          </motion.div>
        ))}
      </motion.section>

      {/* STORY */}
      <section className="mb-20 grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#C9ADA7]">
            Our Story
          </p>

          <h2 className="mb-5 text-3xl font-bold md:text-5xl">
            Born For The Everyday Fit.
          </h2>

          <p className="mb-5 text-sm leading-7 text-[#C9ADA7] md:text-base">
            We created ZYROTH because basic t-shirts should not feel boring. A
            clean oversized tee can change the whole outfit — cargos, jeans,
            sneakers, chains, jackets, everything starts looking sharper.
          </p>

          <p className="mb-8 text-sm leading-7 text-[#C9ADA7] md:text-base">
            Our focus is simple: premium feel, relaxed fit, and streetwear
            styling that works every day. No over-designed graphics. No messy
            colors. Just strong essentials with a bold brand mood.
          </p>

          <button
            onClick={() => setPage("shop")}
            className="rounded-full bg-[#9A8C98] px-8 py-4 text-xs font-semibold uppercase tracking-wider text-black transition hover:bg-[#C9ADA7]"
          >
            Shop Collection
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85 }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative h-[460px] overflow-hidden rounded-[38px] border border-[#4A4E69]"
        >
          <img
            src={image6}
            alt="ZYROTH Brand"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute bottom-6 left-6 rounded-3xl border border-[#C9ADA7]/30 bg-black/60 p-5 backdrop-blur-md">
            <p className="mb-1 text-xs uppercase tracking-[0.25em] text-[#9A8C98]">
              ZYROTH Mood
            </p>
            <h3 className="text-xl font-semibold">Clean. Bold. Everyday.</h3>
          </div>
        </motion.div>
      </section>

      {/* MISSION */}
      <motion.section
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true, amount: 0.25 }}
        className="mb-20 overflow-hidden rounded-[42px] border border-[#4A4E69] bg-[#0B0B0B] p-8 md:p-14"
      >
        <div className="mb-10 h-[420px] overflow-hidden rounded-[36px] border border-[#4A4E69]">
          <img
            src={image7}
            alt="ZYROTH Mission"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#C9ADA7]">
              Our Mission
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Make Dressing Simple.
            </h2>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm leading-7 text-[#C9ADA7] md:text-base">
              ZYROTH is not about loud fashion. It is about confidence through
              clean styling. We want every piece to be easy to wear, easy to
              match, and strong enough to become your go-to everyday fit.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Clean Fits", "Soft Feel", "Modern Drop"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#4A4E69] bg-black p-5 text-center text-sm text-[#F2E9E4]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* BRAND PROMISE */}
      <motion.section
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true, amount: 0.25 }}
        className="mb-20 grid gap-8 lg:grid-cols-3"
      >
        <div className="rounded-[35px] border border-[#4A4E69] bg-gradient-to-br from-[#22223B] via-black to-[#4A4E69] p-8 lg:col-span-2 md:p-12">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#C9ADA7]">
            Brand Promise
          </p>

          <h2 className="mb-5 text-3xl font-bold md:text-5xl">
            We Don’t Make Random Basics.
          </h2>

          <p className="mb-5 text-sm leading-7 text-[#C9ADA7] md:text-base">
            Every ZYROTH piece is made to feel like your go-to fit — something
            you can wear again and again without overthinking. The design stays
            minimal, but the fit and brand mood stay strong.
          </p>

          <p className="text-sm leading-7 text-[#C9ADA7] md:text-base">
            Our focus is on clean silhouettes, wearable colors, and premium
            everyday comfort so your outfit looks sharp with less effort.
          </p>
        </div>

        <div className="rounded-[35px] border border-[#4A4E69] bg-[#0B0B0B] p-8 md:p-12">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#C9ADA7]">
            Made For
          </p>

          <ul className="space-y-5 text-sm text-[#C9ADA7]">
            <li>✓ College fits</li>
            <li>✓ Streetwear looks</li>
            <li>✓ Daily comfort</li>
            <li>✓ Minimal outfits</li>
            <li>✓ Oversized styling</li>
          </ul>
        </div>
      </motion.section>

      {/* STYLE GUIDE */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-20"
      >
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#C9ADA7]">
            Style Guide
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            How To Wear ZYROTH
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            [
              "01",
              "With Cargos",
              "Pair oversized tees with cargos and sneakers for a clean streetwear look.",
            ],
            [
              "02",
              "With Denim",
              "Style minimal colors with relaxed jeans for everyday outfits.",
            ],
            [
              "03",
              "Layered Fit",
              "Add an open shirt or jacket over your ZYROTH tee for extra depth.",
            ],
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="rounded-[32px] border border-[#4A4E69] bg-[#0B0B0B] p-8 transition hover:border-[#C9ADA7]"
            >
              <span className="mb-6 block text-5xl font-bold text-[#F2E9E4]/10">
                {item[0]}
              </span>

              <h3 className="mb-3 text-xl font-semibold">{item[1]}</h3>

              <p className="text-sm leading-6 text-[#C9ADA7]">{item[2]}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* VALUES */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-20"
      >
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#C9ADA7]">
            What We Stand For
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            The ZYROTH Standard
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.03 }}
                className="rounded-[30px] border border-[#4A4E69] bg-[#0B0B0B] p-7 transition hover:border-[#C9ADA7]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#9A8C98] text-black">
                  <Icon size={24} />
                </div>

                <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>

                <p className="text-sm leading-6 text-[#C9ADA7]">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* PROCESS */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-20"
      >
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#C9ADA7]">
            How We Build
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            From Idea To Drop
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {process.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative overflow-hidden rounded-[32px] border border-[#4A4E69] bg-gradient-to-br from-[#0B0B0B] via-black to-[#22223B] p-8"
              >
                <span className="absolute right-6 top-6 text-6xl font-bold text-[#F2E9E4]/5">
                  0{i + 1}
                </span>

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#9A8C98] text-black">
                  <Icon size={24} />
                </div>

                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>

                <p className="text-sm leading-6 text-[#C9ADA7]">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-20"
      >
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#C9ADA7]">
            Reviews
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">What People Say</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Rahul",
              text: "Fit mast hai yrr, oversized perfect baithta hai. Quality bhi solid hai.",
            },
            {
              name: "Aman",
              text: "Minimal design but looks premium. Daily wear ke liye best hai.",
            },
            {
              name: "Karan",
              text: "ZYROTH tees are different. Simple but stylish, sab notice karte hain.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="rounded-[30px] border border-[#4A4E69] bg-[#0B0B0B] p-8 transition hover:border-[#C9ADA7]"
            >
              <p className="mb-6 text-sm leading-6 text-[#C9ADA7]">
                "{item.text}"
              </p>

              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F2E9E4]">
                — {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#C9ADA7]">
            FAQ
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Frequently Asked
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-6">
          {[
            {
              q: "What is the fit of ZYROTH t-shirts?",
              a: "All our t-shirts come in a relaxed oversized fit for modern streetwear styling.",
            },
            {
              q: "Is the fabric good for daily wear?",
              a: "Yes, we use soft premium cotton that feels comfortable for all-day use.",
            },
            {
              q: "Do you restock limited drops?",
              a: "Most drops are limited and may not be restocked once sold out.",
            },
            {
              q: "How long does delivery take?",
              a: "Delivery usually takes 3–7 days depending on your location.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-[24px] border border-[#4A4E69] bg-[#0B0B0B] p-6"
            >
              <h3 className="mb-2 text-lg font-semibold">{item.q}</h3>

              <p className="text-sm leading-6 text-[#C9ADA7]">{item.a}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* QUOTE WITH IMAGE8 */}
      <motion.section
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true, amount: 0.25 }}
        className="relative mb-20 overflow-hidden rounded-[42px] border border-[#4A4E69] px-6 py-16 text-center md:px-20"
      >
        <img
          src={image8}
          alt="ZYROTH Quote"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10">
          <Star className="mx-auto mb-6 text-[#C9ADA7]" size={34} />

          <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
            “Style should feel effortless, but still make people notice.”
          </h2>

          <p className="mt-5 text-sm uppercase tracking-[0.3em] text-[#9A8C98]">
            ZYROTH Philosophy
          </p>
        </div>
      </motion.section>

      {/* FINAL CTA WITH IMAGE9 */}
      <motion.section
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true, amount: 0.25 }}
        className="relative overflow-hidden rounded-[42px] border border-[#4A4E69] px-6 py-16 text-center md:px-20"
      >
        <img
          src={image9}
          alt="ZYROTH CTA"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10">
          <Heart className="mx-auto mb-5 text-[#C9ADA7]" size={32} />

          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#C9ADA7]">
            Wear ZYROTH
          </p>

          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Ready For Your Next Fit?
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-sm leading-7 text-[#C9ADA7] md:text-base">
            Explore oversized t-shirts made for clean streetwear, premium
            comfort, and daily confidence.
          </p>

          <button
            onClick={() => setPage("shop")}
            className="rounded-full bg-[#9A8C98] px-8 py-4 text-xs font-semibold uppercase tracking-wider text-black transition hover:bg-[#C9ADA7]"
          >
            Explore Collection
          </button>
        </div>
      </motion.section>
    </main>
  );
}