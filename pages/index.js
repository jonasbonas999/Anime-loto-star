import React, { useState } from "react";
import { Sparkles, Stars } from "lucide-react";

const generateTicket = () => {
  const nums = new Set();
  while (nums.size < 6) nums.add(Math.floor(Math.random() * 49) + 1);
  return Array.from(nums).sort((a, b) => a - b);
};

const mockDrawResults = [5, 12, 18, 23, 36, 42];

export default function Home() {
  const [ticket, setTicket] = useState([]);
  const [userTicket, setUserTicket] = useState("");
  const [result, setResult] = useState(null);

  const checkTicket = () => {
    const userNums = userTicket.split(",").map(n => parseInt(n.trim())).filter(n => !isNaN(n));
    setResult(userNums.filter(n => mockDrawResults.includes(n)).length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-extrabold text-pink-600 mb-6 font-[Comic_Sans_MS]">
        🌸 Anime Loto Star ✨
      </h1>

      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 mb-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-purple-700 flex items-center gap-2 mb-4">
          <Sparkles className="text-pink-500" /> Генерация билета
        </h2>
        <button
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full shadow"
          onClick={() => setTicket(generateTicket())}
        >
          Сгенерировать билет
        </button>
        {ticket.length > 0 && (
          <p className="text-lg text-indigo-700 font-mono mt-4">
            Ваш билет: {ticket.join(", ")}
          </p>
        )}
      </div>

      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 mb-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-pink-700 flex items-center gap-2 mb-4">
          <Stars className="text-indigo-500" /> Проверка билета
        </h2>
        <input
          type="text"
          placeholder="Введите 6 чисел через запятую"
          value={userTicket}
          onChange={e => setUserTicket(e.target.value)}
          className="w-full border border-pink-400 rounded-full py-2 px-4 shadow-sm mb-4"
        />
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full"
          onClick={checkTicket}
        >
          Проверить
        </button>
        {result !== null && (
          <p className="text-lg text-fuchsia-700 font-semibold mt-4">
            Совпадений: {result} / 6
          </p>
        )}
      </div>

      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-indigo-700 mb-2">🎯 Последний тираж</h2>
        <p className="text-lg text-purple-800 font-mono">
          Выпавшие числа: {mockDrawResults.join(", ")}
        </p>
      </div>
    </div>
  );
}
