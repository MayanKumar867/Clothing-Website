import { FaInstagram, FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#ffe0f0] via-[#eafff6] to-[#ffffff] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Intro */}
        <div>
          <h2 className="text-2xl font-bold text-black">Riyu’s Fashion</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Crafted with passion by VSR, a fashion designer who believes 
            every outfit tells a story. Discover pieces that inspire 
            confidence, elegance, and your true vibe.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:items-center">
          <h3 className="text-lg font-bold text-black mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="hover:text-black">Shop</a></li>
            <li><a href="#" className="hover:text-black">About </a></li>
            <li><a href="#" className="hover:text-black">Contact</a></li>
            <li><a href="#" className="hover:text-black">Policies</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="md:text-right">
          <h3 className="text-lg font-bold text-black mb-4">Follow Us</h3>
          <div className="flex md:justify-end space-x-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transform transition">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transform transition">
              <FaPinterestP />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transform transition">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transform transition">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} VSR Fashion. All rights reserved.</p>
        <p className="mt-2 text-gray-500 italic">Designed with love by VSR 💖</p>
      </div>
    </footer>
  );
}
