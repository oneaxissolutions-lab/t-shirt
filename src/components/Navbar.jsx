// src/components/Navbar.jsx

import { useState } from "react";
import {
  Menu,
  X,
  Search,
  User,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";

import logo from "../assets/logo.png";

export default function Navbar({ setPage }) {
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  const goTo = (page) => {
    setPage(page);

    setOpen(false);
    setShopOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-4 left-0 z-50 w-full px-3 sm:px-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#6B7090] bg-black/90 px-4 py-3 backdrop-blur-xl sm:px-6">

        {/* LOGO */}
        <div
          onClick={() => goTo("home")}
          className="cursor-pointer"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-24 object-contain sm:w-28 md:w-32"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-8 md:flex">

          <button
            onClick={() => goTo("home")}
            className="text-sm font-medium uppercase tracking-wider text-[#F2E9E4] transition hover:text-[#C9ADA7]"
          >
            Home
          </button>

          {/* SHOP DROPDOWN */}
          <div className="relative">

            <button
              onClick={() => setShopOpen(!shopOpen)}
              className="flex items-center gap-1 text-sm font-medium uppercase tracking-wider text-[#F2E9E4] transition hover:text-[#C9ADA7]"
            >
              Shop
              <ChevronDown
                size={16}
                className={`transition duration-300 ${
                  shopOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* DROPDOWN */}
            <div
              className={`absolute left-1/2 top-12 w-64 -translate-x-1/2 overflow-hidden rounded-[24px] border border-[#4A4E69] bg-[#0B0B0B] shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition-all duration-300 ${
                shopOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-3 opacity-0"
              }`}
            >

              <button
                onClick={() => goTo("polo")}
                className="flex w-full items-center justify-between border-b border-[#1F1F1F] px-5 py-4 text-left text-[#F2E9E4] transition hover:bg-[#151515]"
              >
                <div>
                  <p className="text-sm font-semibold">
                    Polo T-Shirts
                  </p>

                  <p className="mt-1 text-xs text-[#9A8C98]">
                    Premium luxury polos
                  </p>
                </div>

                <span className="text-[#C9ADA7]">→</span>
              </button>

              <button
                onClick={() => goTo("roundneck")}
                className="flex w-full items-center justify-between px-5 py-4 text-left text-[#F2E9E4] transition hover:bg-[#151515]"
              >
                <div>
                  <p className="text-sm font-semibold">
                    Round Neck
                  </p>

                  <p className="mt-1 text-xs text-[#9A8C98]">
                    Oversized printed tees
                  </p>
                </div>

                <span className="text-[#C9ADA7]">→</span>
              </button>

            </div>

          </div>

          <button
            onClick={() => goTo("about")}
            className="text-sm font-medium uppercase tracking-wider text-[#F2E9E4] transition hover:text-[#C9ADA7]"
          >
            About
          </button>

          <button
            onClick={() =>
              (window.location.href = "tel:+918954535455")
            }
            className="text-sm font-medium uppercase tracking-wider text-[#F2E9E4] transition hover:text-[#C9ADA7]"
          >
            Contact
          </button>

        </div>

        {/* DESKTOP ICONS */}
        <div className="hidden items-center gap-3 md:flex">

          {[Search, User, ShoppingBag].map((Icon, i) => (
            <button
              key={i}
              className="rounded-full border border-[#4A4E69] p-2 transition duration-300 hover:scale-110 hover:bg-[#4A4E69]"
            >
              <Icon
                size={18}
                className="text-[#F2E9E4]"
              />
            </button>
          ))}

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="text-[#F2E9E4] md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

      </nav>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          open
            ? "max-h-[650px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="mx-2 mt-3 rounded-[28px] border border-[#4A4E69] bg-[#0B0B0B]/95 p-5 backdrop-blur-xl">

          <div className="flex flex-col gap-4">

            <button
              onClick={() => goTo("home")}
              className="rounded-2xl border border-[#1F1F1F] px-4 py-4 text-left text-sm uppercase tracking-wider text-[#F2E9E4]"
            >
              Home
            </button>

            {/* MOBILE SHOP */}
            <div className="overflow-hidden rounded-2xl border border-[#1F1F1F]">

              <button
                onClick={() => setShopOpen(!shopOpen)}
                className="flex w-full items-center justify-between px-4 py-4 text-left text-sm uppercase tracking-wider text-[#F2E9E4]"
              >
                Shop

                <ChevronDown
                  size={18}
                  className={`transition duration-300 ${
                    shopOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  shopOpen
                    ? "max-h-60 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >

                <div className="border-t border-[#1F1F1F]">

                  <button
                    onClick={() => goTo("polo")}
                    className="flex w-full items-center justify-between px-4 py-4 text-left text-[#F2E9E4] transition hover:bg-[#151515]"
                  >
                    <div>
                      <p className="text-sm font-semibold">
                        Polo T-Shirts
                      </p>

                      <p className="mt-1 text-xs text-[#9A8C98]">
                        Premium polo collection
                      </p>
                    </div>

                    <span className="text-[#C9ADA7]">
                      →
                    </span>
                  </button>

                  <button
                    onClick={() => goTo("roundneck")}
                    className="flex w-full items-center justify-between border-t border-[#1F1F1F] px-4 py-4 text-left text-[#F2E9E4] transition hover:bg-[#151515]"
                  >
                    <div>
                      <p className="text-sm font-semibold">
                        Round Neck
                      </p>

                      <p className="mt-1 text-xs text-[#9A8C98]">
                        Printed oversized tees
                      </p>
                    </div>

                    <span className="text-[#C9ADA7]">
                      →
                    </span>
                  </button>

                </div>

              </div>

            </div>

            <button
              onClick={() => goTo("about")}
              className="rounded-2xl border border-[#1F1F1F] px-4 py-4 text-left text-sm uppercase tracking-wider text-[#F2E9E4]"
            >
              About
            </button>

            <button
              onClick={() =>
                (window.location.href =
                  "tel:+918954535455")
              }
              className="rounded-2xl border border-[#1F1F1F] px-4 py-4 text-left text-sm uppercase tracking-wider text-[#F2E9E4]"
            >
              Contact
            </button>

            {/* MOBILE ICONS */}
            <div className="flex items-center gap-4 border-t border-[#1F1F1F] pt-5">

              {[Search, User, ShoppingBag].map(
                (Icon, i) => (
                  <button
                    key={i}
                    className="rounded-full border border-[#4A4E69] p-3"
                  >
                    <Icon
                      size={18}
                      className="text-[#F2E9E4]"
                    />
                  </button>
                )
              )}

            </div>

          </div>

        </div>

      </div>
    </header>
  );
}