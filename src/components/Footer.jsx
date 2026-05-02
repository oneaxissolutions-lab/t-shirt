import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#4A4E69] px-6 py-14 md:px-20 text-[#F2E9E4]">
      
      <div className="grid gap-10 md:grid-cols-4">
        
        {/* BRAND */}
        <div>
          <img
            src={logo}
            alt="ZYROTH Logo"
            className="mb-4 h-10 w-auto object-contain"
          />

          <p className="text-sm leading-6 text-[#C9ADA7]">
            Premium oversized t-shirts made for clean streetwear looks and everyday comfort.
          </p>
        </div>

        {/* SHOP */}
        <div>
          <h3 className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9ADA7]">
            Shop
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="cursor-pointer hover:text-[#C9ADA7]">New Drops</li>
            <li className="cursor-pointer hover:text-[#C9ADA7]">T-Shirts</li>
            <li className="cursor-pointer hover:text-[#C9ADA7]">Best Sellers</li>
            <li className="cursor-pointer hover:text-[#C9ADA7]">Limited Edition</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9ADA7]">
            Support
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="cursor-pointer hover:text-[#C9ADA7]">Contact Us</li>
            <li className="cursor-pointer hover:text-[#C9ADA7]">Shipping Policy</li>
            <li className="cursor-pointer hover:text-[#C9ADA7]">Return Policy</li>
            <li className="cursor-pointer hover:text-[#C9ADA7]">Size Guide</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9ADA7]">
            Follow
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="cursor-pointer hover:text-[#C9ADA7]">Instagram</li>
            <li className="cursor-pointer hover:text-[#C9ADA7]">Facebook</li>
            <li className="cursor-pointer hover:text-[#C9ADA7]">YouTube</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-12 border-t border-[#4A4E69] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#9A8C98]">
        <p>© 2026 ZYROTH. All rights reserved.</p>

        <div className="flex gap-6">
          <span className="cursor-pointer hover:text-[#C9ADA7]">Privacy</span>
          <span className="cursor-pointer hover:text-[#C9ADA7]">Terms</span>
        </div>
      </div>

    </footer>
  );
}