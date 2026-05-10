import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Polo from "./components/Polo";
import RoundNeck from "./components/RoundNeck";
import About from "./components/About";
import Footer from "./components/Footer";

import logo from "./assets/logo.png";

function Loader() {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4A4E69_0%,#111_42%,#000_100%)]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-[#C9ADA7]/30 bg-white/5 p-4 shadow-[0_0_80px_rgba(201,173,167,0.25)] backdrop-blur-md sm:h-36 sm:w-36">
          <img
            src={logo}
            alt="ZYROTH Logo"
            className="h-full w-full object-contain animate-[logoPulse_1.6s_ease-in-out_infinite]"
          />
        </div>

        <h1 className="text-3xl font-black uppercase tracking-[0.35em] text-[#F2E9E4] sm:text-5xl">
          ZYROTH
        </h1>

        <p className="mt-4 text-[10px] uppercase tracking-[0.35em] text-[#C9ADA7] sm:text-xs">
          Loading Collection
        </p>

        <div className="mt-7 h-[3px] w-56 overflow-hidden rounded-full bg-[#4A4E69] sm:w-72">
          <div className="h-full w-1/2 animate-[loadbar_1.2s_ease-in-out_infinite] rounded-full bg-[#C9ADA7]" />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "home" && <Home setPage={setPage} />}
      {page === "shop" && <Shop setPage={setPage} />}
      {page === "polo" && <Polo setPage={setPage} />}
      {page === "roundneck" && <RoundNeck setPage={setPage} />}
      {page === "about" && <About setPage={setPage} />}

      <Footer />
    </>
  );
}