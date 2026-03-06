import BirthdayMessages from "../components/BirthdayMessages";
import BirthdayVideo from "../components/BirthdayVideo";
import Calendar from "../components/Calendar";
import Countdown from "../components/Countdown";
import BirthdayFooter from "../components/footer";

import Gallery from "../components/Gallery";
import HeroBanner from "../components/HeroBanner";
import ThingsSheLoves from "../components/ThingsSheLoves";


const Home = () => {
  return (
    <div className="scroll-smooth">
      <HeroBanner />
      <Gallery />
       
       <Calendar month={2} year={2026} specialDay={12} />
      <BirthdayMessages />
      <ThingsSheLoves />
       <div className="min-h-4.5 flex flex-col items-center bg-pink-50 p-6 gap-8">
     <BirthdayVideo title="" />
    </div>
    <Countdown month={3} day={12} />
     <BirthdayFooter />
    </div>
  );
};

export default Home;