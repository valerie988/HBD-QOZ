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
        <a href="https://www.tiktok.com/@theglow_riouseffect?_r=1&_d=e5jk4k8dj6l1ce&sec_uid=MS4wLjABAAAAJo1vFFYog78t2a5tj2mnGcp6w0CbzLORj2VHYBkNl8GAHPHY_y5cTXQnFDBvEEDN&share_author_id=6850127733453816837&sharer_language=fr&source=h5_m&u_code=dmlhjdjf9693m9&item_author_type=2&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=1B982274-0574-4E64-B60B-28BE9BD419B1&user_id=7055343005200663557&sec_user_id=MS4wLjABAAAAdkoNE1hVIisjuB8ixGAuVvo78nULnGXFwW2PfxxQcjP-tMc_hYM3vyko3dI_8NjN&social_share_type=5&ug_btm=b6880,b5836&utm_campaign=client_share&share_app_id=1233" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white text-2xl hover:text-red-600 transition" />
        </a>
        <a href="https://www.tiktok.com/@theglow_riouseffect?_r=1&_d=e5jk4k8dj6l1ce&sec_uid=MS4wLjABAAAAJo1vFFYog78t2a5tj2mnGcp6w0CbzLORj2VHYBkNl8GAHPHY_y5cTXQnFDBvEEDN&share_author_id=6850127733453816837&sharer_language=fr&source=h5_m&u_code=dmlhjdjf9693m9&item_author_type=2&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=1B982274-0574-4E64-B60B-28BE9BD419B1&user_id=7055343005200663557&sec_user_id=MS4wLjABAAAAdkoNE1hVIisjuB8ixGAuVvo78nULnGXFwW2PfxxQcjP-tMc_hYM3vyko3dI_8NjN&social_share_type=5&ug_btm=b6880,b5836&utm_campaign=client_share&share_app_id=1233" target="_blank" rel="noopener noreferrer">
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