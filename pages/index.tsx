"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const generateNumbers = () => {
  const numbers = new Set<number>();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 49) + 1);
  }
  return Array.from(numbers).sort((a, b) => a - b);
};

export default function AnimeLotoStar() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [revealed, setRevealed] = useState(false);

  const handleStart = () => {
    setNumbers(generateNumbers());
    setRevealed(false);
    setTimeout(() => setRevealed(true), 500);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-purple-200 p-4">
      <h1 className="text-4xl font-bold text-pink-700 mb-6 animate-bounce">
        ✨ Anime Loto Star ✨
      </h1>

      <button
        className="mb-8 text-lg bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-2xl shadow-md"
        onClick={handleStart}
      >
        Начать розыгрыш
      </button>

      <div className="flex gap-4 flex-wrap justify-center">
        {numbers.map((num, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: -180 }}
            animate={revealed ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: i * 0.3, type: "spring" }}
            className="w-16 h-16 bg-pink-400 text-white flex items-center justify-center text-xl font-bold rounded-full shadow-xl border-4 border-white"
          >
            {revealed ? num : "?"}
          </motion.div>
        ))}
      </div>
    </main>
  );
}
