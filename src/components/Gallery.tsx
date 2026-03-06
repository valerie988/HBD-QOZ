import { useState, useEffect } from "react";

import pic1 from "../assets/images/pic1.jpg";
import pic2 from "../assets/images/pic2.jpg";
import pic3 from "../assets/images/pic3.jpg";
import pic4 from "../assets/images/pic4.jpg";
import pic5 from "../assets/images/pic5.jpg";
import pic6 from "../assets/images/pic6.jpg";
import pic7 from "../assets/images/pic7.jpg";
import pic8 from "../assets/images/pic8.jpg";
import pic9 from "../assets/images/pic9.jpg";
import pic10 from "../assets/images/pic10.jpg";
import pic11 from "../assets/images/pic11.jpg";
import pic12 from "../assets/images/pic12.jpg";
import pic13 from "../assets/images/pic13.jpg";
import pic14 from "../assets/images/pic14.jpg";
import pic15 from "../assets/images/pic15.jpg";
import pic16 from "../assets/images/pic16.jpg";
import pic17 from "../assets/images/pic17.jpg";
import pic18 from "../assets/images/pic18.jpg";
import pic19 from "../assets/images/pic19.jpg";
import pic20 from "../assets/images/pic20.jpg";
import pic21 from "../assets/images/pic21.jpg";
import pic22 from "../assets/images/pic22.jpg";

interface GalleryImage {
  src: string;
  caption: string;
}

const images: GalleryImage[] = [
  { src: pic1, caption: "A beautiful smile that carries warmth..." },
  { src: pic2, caption: "Shining effortlessly..." },
  { src: pic3, caption: "A joyful glimpse..." },
  { src: pic4, caption: "Elegance and grace captured in a single frame, reflecting the calm confidence and beauty that defines who you are." },
  { src: pic5, caption: "A memory worth keeping forever, because moments like these quietly tell the story of your laughter and happiness." },
  { src: pic6, caption: "The kind of joy that reminds everyone how beautiful genuine smiles truly are." },
  { src: pic7, caption: "Showing the warmth and love you bring into the lives around you." },
  { src: pic8, caption: "A special moment frozen in time, reflecting the gentle charm and sincerity that makes you uniquely." },
  { src: pic9, caption: "Pure joy shining through, a reminder that the best moments in life are the ones shared with an open heart." },
  { src: pic10, caption: "Golden memories that sparkle with laughter, friendship, and the beautiful energy you carry so effortlessly." },
  { src: pic11, caption: "A soul filled with kindness, laughter, and the quiet strength that inspires everyone around you." },
  { src: pic12, caption: "Moments in motion that reveal your laughter, energy, and heartfelt warmth — memories that live far beyond still frames." },
  { src: pic13, caption: "Beautiful as always, with a presence that blends simplicity, grace, and a natural glow that never goes unnoticed." },
  { src: pic14, caption: "Your radiant presence — a blend of grace, light, and effortless beauty that brightens every space you step into." },
  { src: pic15, caption: "Smiles everywhere, the kind that spread naturally because joy seems to follow you wherever you go." },
  { src: pic16, caption: "The most beautiful moments are the ones shared with genuine happiness." },
  { src: pic17, caption: "Lively spirit and the vibrant energy that makes every gathering more alive." },
  { src: pic18, caption: "A celebration of love, friendship, and the meaningful connections that surround your life." },
  { src: pic19, caption: "Your radiant presence — a blend of grace, light, and effortless beauty that brightens every space you step into." },
  { src: pic20, caption: "A joyful glimpse into your playful charm — spontaneous, spirited, and wonderfully full of life." },
  { src: pic21, caption: "A tender heart that is sensitive, empathetic, and full of depth, revealing the beauty of loving fiercely and sincerely." },
  { src: pic22, caption: "A reminder that today celebrates the beautiful person you are." },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect touch devices
  useEffect(() => {
    const checkTouch = () => setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  const handleToggleCaption = (index: number) => {
    if (isMobile) {
      setActiveIndex(prev => (prev === index ? null : index));
    }
  };

  return (
    <div className="py-16 bg-red-50" id="next-section">
      <h2
        className="text-4xl md:text-5xl font-bold text-red-700 text-center mb-4"
        style={{ fontFamily: "Pacifico, cursive" }}
      >
        The Glow-Rious Effect ✨🌸
      </h2>
      <h2
        className="text-3xl font-bold text-black text-center mb-12"
        style={{ fontFamily: "cursive" }}
      >
        Aging Younger
      </h2>

      {/* Masonry-style grid */}
      <div className="columns-2 md:columns-4 gap-4 px-4 md:px-16 space-y-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => handleToggleCaption(index)}
          >
            <img
              src={img.src}
              alt={`Birthday pic ${index + 1}`}
              className="w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
            />

            {/* Caption overlay */}
            <div
              className={`absolute inset-0 bg-red-700/20 flex items-end justify-center p-4 rounded-2xl transition-all duration-500
                ${isMobile 
                  ? (activeIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6") 
                  : "opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0"
                }`}
            >
              <p className="text-white text-sm md:text-base font-semibold text-center">
                {img.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;