import { useState } from "react";

interface CalendarProps {
  month: number; // 0 = January, 2 = March
  year: number;
  specialDay: number; // 12
}

const Calendar = ({ month, year, specialDay }: CalendarProps) => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-pink-50 rounded-xl shadow-lg">
      {/* Title stays at top */}
      <h1 className="text-4xl md:text-5xl font-bold text-red-500 text-center mb-12"
        style={{ fontFamily: "Pacifico, cursive" }}>
        🎂 The Most Important Day🎂
      </h1>

      {/* Calendar + Info Panel */}
      <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-3">
          {dayNames.map((day) => (
            <div
              key={day}
              className="text-center font-bold text-sm md:text-base text-gray-600"
            >
              {day}
            </div>
          ))}

          {/* Empty slots */}
          {Array.from({ length: firstDay }).map((_, idx) => (
            <div key={"empty" + idx} />
          ))}

          {/* Days */}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const dayNum = i + 1;
            const isSpecial = dayNum === specialDay;
            const isSelected = dayNum === selectedDay;

            return (
              <button
                key={dayNum}
                onClick={() => setSelectedDay(dayNum)}
                className={`
                  w-10 h-10 md:w-12 md:h-12 flex items-center justify-center 
                  rounded-full font-semibold text-sm md:text-base
                  transition transform hover:scale-110
                  ${isSpecial ? "bg-red-500 text-white" : "bg-white text-gray-800"}
                  ${isSelected ? "ring-2 ring-red-400" : ""}
                  shadow-md
                `}
              >
                {isSpecial ? "12" : dayNum}
              </button>
            );
          })}
        </div>

        {/* Info Panel on side (desktop) */}
        {selectedDay === specialDay && (
          <div className="bg-red-50 border border-red-300 p-6 rounded-lg w-full md:w-146 shadow-lg items-center text-center">
  <h2 className="text-4xl md:text-2xl font-bold text-red-500 text-center mb-8"
        style={{ fontFamily: "Pacifico, cursive" }}>
    Gloria's Big Day!
  </h2>
<p
  className="text-gray-700 text-xl "
  style={{ fontFamily: " cursive" }}
>
  <span className="font-semibold text-red-500">Gloria</span> comes from Latin
  and means <span className="font-semibold">“glory,” “honor,” or “fame.” </span> 
   It is often associated with admiration, excellence, and a sense of greatness.
  <br /><br />

  In a spiritual and biblical context, the name reflects praise and reverence
  toward God, especially from the well-known Christian phrase{" "}
  <span className="font-semibold text-red-500">
    “Gloria in Excelsis Deo”
  </span>{" "}
  which means <span className="font-semibold">“Glory to God in the highest.”</span>
  <br /><br />

  Because of this connection, the name <span className="font-semibold text-red-500">Gloria</span>{" "}
  symbolizes a life that shines with honor, gratitude, and praise — someone
  who brings light, joy, and recognition wherever they go.
</p>
</div>
        )}
      </div>
    </div>
  );
};

export default Calendar;