import { useState } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import bgImage from "../assets/images/pic1.jpg";
import birthdayAudio from "../assets/videos/audio.mp3"; // mp3

const Login = () => {
  const [birthday, setBirthday] = useState(""); // YYYY-MM-DD
  const [error, setError] = useState("");
  const [, setShowConfetti] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    const correctDate = new Date("2000-03-12").toISOString().split("T")[0];

    if (birthday === correctDate) {
      setShowConfetti(true);

      // Play birthday audio
      const audio = new Audio(birthdayAudio);
      audio.volume = 0.5;
      audio.play().catch((err) => console.log("Autoplay blocked:", err));

      // Launch emoji confetti 🎉
      launchEmojiConfetti();

      // Navigate after 2.5s
      setTimeout(() => navigate("/home"), 2500);
    } else {
      setError("Oops… that's not your special date 💔");
    }
  };

  const launchEmojiConfetti = () => {
    const duration = 2 * 1000; // 2 seconds of confetti
    const end = Date.now() + duration;

    (function frame() {
      // 🎉 emoji confetti burst
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 100,
        origin: { x: Math.random(), y: Math.random() * 0.6 },
        gravity: 0.6,
        scalar: Math.random() * 0.6 + 0.6, // random size
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Centered Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-3xl p-10 shadow-2xl text-center border border-white/30">
          <h1
            className="text-3xl text-white mb-4"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            Hey My Yellow Pawpaw 💕
          </h1>

          <p className="text-white/90 mb-6">
            Select or type your special date to unlock your surprise 🎁
          </p>

          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            className="w-full p-4 rounded-xl text-center bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400 mb-5"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl transition transform hover:scale-105"
          >
            Enter Your World 
          </button>

          {error && <p className="text-red-300 mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;