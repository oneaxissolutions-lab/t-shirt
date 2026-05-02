import { useState } from "react";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";

import logo from "../assets/logo.png";

export default function Navbar({ setPage }) {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Shop", "About", "Contact"];

  const handleNavigation = (item) => {
    if (item === "Home") setPage("home");
    if (item === "Shop") setPage("shop");
    if (item === "About") setPage("about");

    if (item === "Contact") {
      window.location.href = "tel:+918954535455";
    }

    setOpen(false);
  };

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4">
      <nav className="max-w-7xl mx-auto bg-black/95 border border-[#6B7090] rounded-full px-6 py-4 flex items-center justify-between shadow-[0_0_25px_rgba(74,78,105,0.25)] backdrop-blur-md">
        
        <div onClick={() => handleNavigation("Home")} className="cursor-pointer group">
          <img
            src={logo}
            alt="Logo"
            className="w-24 md:w-32 object-contain transition duration-500 group-hover:scale-110 group-hover:rotate-2"
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <button
              key={item}
              onClick={() => handleNavigation(item)}
              className="group relative text-sm uppercase tracking-wider text-[#F2E9E4] transition duration-300"
            >
              <span className="block transition duration-300 group-hover:-translate-y-1 group-hover:text-[#C9ADA7]">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#9A8C98] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {[Search, User, ShoppingBag].map((Icon, i) => (
            <button
              key={i}
              className="p-2 rounded-full border border-[#4A4E69] hover:bg-[#4A4E69] transition duration-300 hover:scale-110"
            >
              <Icon size={18} className="text-[#F2E9E4]" />
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-[#F2E9E4]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`md:hidden mt-3 overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black border border-[#6B7090] rounded-3xl px-6 py-5 flex flex-col gap-5 shadow-[0_0_20px_rgba(74,78,105,0.25)]">
          {links.map((item) => (
            <button
              key={item}
              onClick={() => handleNavigation(item)}
              className="text-left text-[#F2E9E4] uppercase text-sm tracking-wider hover:text-[#C9ADA7] transition"
            >
              {item}
            </button>
          ))}

          <div className="flex gap-4 pt-2">
            <Search className="text-[#F2E9E4]" size={18} />
            <User className="text-[#F2E9E4]" size={18} />
            <ShoppingBag className="text-[#F2E9E4]" size={18} />
          </div>
        </div>
      </div>
    </header>
  );
}