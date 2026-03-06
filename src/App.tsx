import { useState, useRef, useEffect } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Play music when user logs in
  useEffect(() => {
    if (isLoggedIn && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => console.log("Autoplay blocked:", err));
      }
    }
  }, [isLoggedIn]);

  return (
    <>
      {/* Persistent background music */}
      <audio
        ref={audioRef}
        src="https://res.cloudinary.com/dgxhlomww/video/upload/audio_wzmbxa.mp3"
        
        hidden
      />

      {/* Conditional rendering instead of router */}
      {isLoggedIn ? (
        <Home />
      ) : (
        <Login onSuccess={() => setIsLoggedIn(true)} />
      )}
    </>
  );
}

export default App;