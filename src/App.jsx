import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "home" && <Home />}
      {page === "shop" && <Shop setPage={setPage} />}
      {page === "about" && <About setPage={setPage} />}

      <Footer />
    </>
  );
}