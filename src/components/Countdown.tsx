import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

interface CountdownProps {
  month: number;
  day: number;
}

const Countdown = ({ month, day }: CountdownProps) => {
  const calculateTimeLeft = () => {
    const today = new Date();
    let year = today.getFullYear();
    let birthday = new Date(year, month - 1, day);

    if (birthday < today) {
      year += 1;
      birthday = new Date(year, month - 1, day);
    }

    const difference = birthday.getTime() - today.getTime();

    return {
      Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      Minutes: Math.floor((difference / (1000 * 60)) % 60),
      Seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // Check if it's birthday (all zero)
      if (
        newTimeLeft.Days === 0 &&
        newTimeLeft.Hours === 0 &&
        newTimeLeft.Minutes === 0 &&
        newTimeLeft.Seconds === 0
      ) {
        setCelebrate(true);

        // Launch emoji confetti 🎉
        confetti({
          particleCount: 80,
          spread: 120,
          origin: { y: 0.6 },
          gravity: 0.6,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, );

  return (
    <div className="flex flex-col items-center mt-12">
      <h2
        className="text-3xl md:text-4xl text-red-600 font-bold mb-6 text-center"
        style={{ fontFamily: "Pacifico, cursive", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
      >
        🎂 Age is just a number 🎂
      </h2>
      <p
        className="text-l md:text-xl text-black font-bold mb-10 text-center"
        style={{ fontFamily: " cursive" }}
      >
        Days left to QǑZ's next birthday
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {Object.entries(timeLeft).map(([key, value]) => (
          <div
            key={key}
            className={`relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center ${
              celebrate ? "animate-bounce" : ""
            }`}
          >
            <svg viewBox="0 0 32 29.6" className="w-full h-full">
              <path
                d="M23.6,0c-2.7,0-5.1,1.7-6,4.1C16.5,1.7,14.1,0,11.4,0C5.1,0,0,5.1,0,11.4
                   c0,7.1,9.2,13,16,18.2c6.8-5.2,16-11.1,16-18.2C32,5.1,26.9,0,23.6,0z"
                fill="red"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold px-1">
              <span className="text-xl md:text-2xl">{value}</span>
              <span className="text-[10px] md:text-sm font-serif italic truncate">{key}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;