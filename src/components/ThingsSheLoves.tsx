import { useState } from "react";
import outingImg from "../assets/images/nails.jpg";
import makeupImg from "../assets/images/shopping.jpeg";
import shoppingImg from "../assets/images/pic3.jpg";
import travellingImg from "../assets/images/pic2.jpg";
import foodImg from "../assets/images/pic5.jpg";
import musicImg from "../assets/images/pic6.jpg";
import wig from "../assets/images/pic4.jpg";
import irish from "../assets/images/irish.jpeg";
import pray from "../assets/images/pray.jpeg";
import study from "../assets/images/study.jpeg";

interface FavoriteItem {
  name: string;
  image: string;
  description?: string;
}

const favorites: FavoriteItem[] = [
  { name: "Praying", image: pray, description: "Godaholic 🙏🏼" },
  { name: "Studying", image: study, description: "... in class and out of the class " },
  { name: "Nails", image: outingImg, description: "Life is not perfect, but my nails are 💅" },
  { name: "Outings", image: shoppingImg, description: "Moni na wata 💵😂" },
  { name: "Makeup", image: foodImg, description: "Face card is 10/10 minus nothing 😍" },
  { name: "Shopping", image: makeupImg, description: "I cannot afford shopping yet, but my man can 🤭" },
  { name: "Travelling", image: travellingImg, description: "Always finding my way out of this 7 hills town aka Japa Queen ✈️" },
  { name: "Sleeping", image: musicImg, description: "Sleeping beauty on duty 😴" },
  { name: "Wigging", image: wig, description: "Baddie na hair 😂, revamp your wig" },
  { name: "Eating", image: irish, description: "Certified Foodie: I owe no one a flat tummy 😌" },
];

const GloriaFavorites = () => {
  const [selectedItem, setSelectedItem] = useState<FavoriteItem | null>(null);

  const closeModal = () => setSelectedItem(null);

  return (
    <div className="flex flex-col items-center gap-6 my-12 px-4">
      <h2
        className="text-3xl md:text-5xl font-bold text-red-500 text-center mb-2"
        style={{ fontFamily: "Pacifico, cursive" }}
      >
        QǑZ❤️
      </h2>
      <h2
        className="text-3xl md:text-3xl font-bold text-red-300 text-center mb-10"
        style={{ fontFamily: "cursive" }}
      >
        Her World
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {favorites.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center p-4 rounded-3xl shadow-lg bg-linear-to-br from-red-100 to-red-200 hover:scale-105 transform transition cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white shadow-inner mb-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-red-600 font-semibold text-center text-sm md:text-base">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl p-4 md:p-6 relative max-w-md w-full mx-4 shadow-2xl transform transition-all duration-300 scale-90 md:scale-100"
            onClick={(e) => e.stopPropagation()}
            style={{ fontFamily: "Quicksand, sans-serif" }} // nicer font
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-2xl"
              onClick={closeModal}
            >
              ×
            </button>

            {/* Large Image */}
            <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden mb-4">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Description Text */}
            {selectedItem.description && (
              <p className="text-gray-800 text-center text-base md:text-lg leading-relaxed">
                {selectedItem.description}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GloriaFavorites;