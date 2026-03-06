import { useState } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import bgImage from "/images/pic1.jpg";

interface LoginProps {
  onSuccess: () => void; // Starts music in App
}

const Login = ({ onSuccess }: LoginProps) => {
  const [birthday, setBirthday] = useState("");
  const [error, setError] = useState("");
  const [isCelebrating, setIsCelebrating] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const correctDate = "2000-03-12";

    if (birthday === correctDate) {
      setIsCelebrating(true); // keep the form visible during celebration

      // Fire confetti repeatedly for 2 seconds
      const duration = 1000; // 2 seconds
      const end = Date.now() + duration;

      (function frame() {
        confetti({
          particleCount: 8,
          angle: 60,
          spread: 100,
          origin: { x: Math.random(), y: Math.random() * 0.6 },
          gravity: 0.6,
          scalar: Math.random() * 0.6 + 0.6,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();

      // Start music in App
      onSuccess();

      // Navigate to Home after confetti finishes
      setTimeout(() => {
        navigate("/home");
      }, duration);
    } else {
      setError("Oops… that's not your special date 💔");
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background image */}
      <img
        src={bgImage}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Login form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-3xl p-10 text-center border border-white/30">
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
            className="w-full p-4 rounded-xl text-center bg-white/80 text-gray-800 mb-5"
          />

          <button
            onClick={handleLogin}
            disabled={isCelebrating} // prevent clicks during confetti
            className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl disabled:opacity-50"
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