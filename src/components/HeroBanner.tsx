import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import pic1 from "../assets/images/pic21.jpg";
import pic8 from "../assets/images/pic5.jpg";
import pic3 from "../assets/images/pic20.jpg";
import type { CSSProperties } from "react";

interface ArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const NextArrow = ({ style, onClick }: ArrowProps) => {
  return (
    <button
      className="absolute top-1/2 right-4 -translate-y-1/2 z-20 text-white bg-red-600/70 hover:bg-red-700 p-2 rounded-full focus:outline-none"
      style={style}
      onClick={onClick}
    >
      
    </button>
  );
};

const PrevArrow = ({  style, onClick }: ArrowProps) => {
  return (
    <button
      className="absolute top-1/2 left-4 -translate-y-1/2 z-20 text-white bg-red-600/70 hover:bg-red-700 p-2 rounded-full focus:outline-none"
      style={style}
      onClick={onClick}
    >
     
    </button>
  );
};

const HeroBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
    arrows: true,           // enable arrows
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

const slides = [
  {
    title: "Happy Birthday 🎂",
    message: "Wishing you a day full of love, joy, laughter, and all the little moments that make life magical! May this year bring you endless smiles, beautiful memories, and everything your heart desires. 🎉🥰",
    bg: pic1,
  },
  {
    title: "A Prayer for You 🙏",
    message: "May God bless you abundantly with health, happiness, and endless joy. May every step you take lead to new opportunities, success, and the fulfillment of your dreams. Always remember you are loved and cherished. ✨",
    bg: pic8,
  },
  {
    title: "A Special Wish ✨",
    message: "May all your dreams come true and your heart stay happy! May laughter and love surround you every day, and may your life be filled with beautiful surprises and unforgettable moments. 💖",
    bg: pic3,
  },
];

  const scrollToNext = () => {
    const nextSection = document.getElementById("next-section");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      <div className="h-screen w-full relative overflow-hidden">
        <Slider {...settings} className="h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative h-screen w-full flex items-center justify-center">
              <img
                src={slide.bg}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* Blueish blur overlay */}
              <div className="absolute inset-0 backdrop-blur-sm"></div>

              {/* Centered text */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 h-full">
                <h1
  className="text-5xl md:text-7xl font-extrabold mb-10 text-white drop-shadow-[0_4px_10px_rgba(220,38,38,0.7)]"
  style={{ fontFamily: "Pacifico, cursive" }}
>
  {slide.title}
</h1>
                <p className="text-white/90 text-xl md:text-3xl drop-shadow-md mb-8 max-w-4xl">
                  {slide.message}
                </p>

                <button
                  onClick={scrollToNext}
                  className="mt-4 px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full text-lg font-semibold transition transform hover:scale-105"
                >
                  Discover More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroBanner;