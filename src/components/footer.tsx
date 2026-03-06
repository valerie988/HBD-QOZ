import {  FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const BirthdayFooter = () => {
  return (
    <footer className="relative w-full bg-linear-to-r bg-rose-400 mt-12 p-8 flex flex-col items-center gap-3 rounded-t-3xl overflow-hidden">

      {/* Main Footer Message */}
      <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-2"  style={{ fontFamily: " cursive", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
        🎉 Happy Birthday my yellow pawpaw 🎉
      </h2>
      <p className="text-red-100 italic text-center md:text-lg max-w-xl">
        Made with love, laughter, and lots of love just for you! Let’s celebrate
        your special day with joy, music, cake, and sparkling memories.
      </p>

      {/* Social Media Links */}
      <div className="flex gap-6 mt-4">
        <a href="https://www.instagram.com/the_glow_rious_effect?igsh=MW5iYWpoMHJiM2llZg==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white text-2xl hover:text-red-600 transition" />
        </a>
        <a href="https://www.tiktok.com/@theglow_riouseffect?_r=1&_t=ZS-94RRc0e7ac9" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="text-white text-2xl hover:text-black transition" />
        </a>
        <a
  href="https://wa.me/237676057776"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp className="text-white text-2xl hover:text-green-500 transition" />
</a>
      </div>

      {/* Copyright */}
      <p className="text-red-200 text-[10px] md:text-xs mt-2 text-center">
        © 2026 The Glow-Rious Effect✨🌸
      </p>
    </footer>
  );
};

export default BirthdayFooter;