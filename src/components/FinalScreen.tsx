import { useEffect, useState } from 'react';
import { Confetti } from '@/components/Confetti';

interface FinalScreenProps {
  onReset: () => void;
}

export default function FinalScreen({ onReset }: FinalScreenProps) {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Create floating hearts on mount
    const newHearts = [...Array(15)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setHearts(newHearts);

    // Auto-hide confetti after a bit
    const timer = setTimeout(() => setShowConfetti(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden relative">
      {/* Festive gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-red-100 to-rose-300 animate-pulse" />

      {/* Floating celebration elements */}
      <div className="absolute inset-0 pointer-events-none">
        {hearts.map(heart => (
          <div
            key={heart.id}
            className="absolute text-6xl animate-float opacity-30"
            style={{
              left: `${heart.x}%`,
              top: `${heart.y}%`,
              animationDelay: `${heart.id * 0.15}s`,
            }}
          >
            ❤️
          </div>
        ))}

        {/* Stars and sparkles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute text-5xl animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Confetti */}
      {showConfetti && <Confetti count={50} />}

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-2xl animate-fade-in">
        {/* Celebration emojis */}
        <div className="text-9xl mb-8 flex justify-center gap-4">
          <span className="animate-bounce-gentle">🥹</span>
          <span className="animate-bounce-gentle" style={{ animationDelay: '0.2s' }}>❤️</span>
          <span className="animate-bounce-gentle" style={{ animationDelay: '0.4s' }}>🎉</span>
        </div>

        {/* Main message */}
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-gray-900">
          YAYYYY!
        </h1>

        <p className="text-3xl md:text-4xl text-red-600 font-semibold mb-8">
          You just made me the happiest person alive ❤️
        </p>

        {/* Celebratory text */}
        <div className="space-y-4 mb-12 text-lg md:text-xl text-gray-700">
          <p className="italic opacity-80">
            "I promise to be your lovely bf altime nana" 💕
          </p>
          <p className="opacity-70">
            You're officially locked in as my Valentine 🔒
          </p>
          <p className="font-semibold text-pink-600">
            Again asking nana will be my valentine, u are my trueee poookieee 😍
          </p>
        </div>

        {/* Fun facts */}
        <div className="bg-pink-50 rounded-2xl p-8 mb-12 border-2 border-pink-200">
          <p className="text-sm uppercase tracking-wider text-gray-600 mb-4">~ Fun Facts ~</p>
          <ul className="space-y-2 text-gray-700">
            <li>✅ You made my heart go boom boom pureeeyeeee</li>
            <li>✅ You're officially the best decision maker</li>
            <li>✅ I'm not crying, you're crying 🥺</li>
          </ul>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={onReset}
            className="button-secondary text-lg px-8 py-4"
          >
            Replay This Magic ✨
          </button>
        </div>

        
      </div>
    </div>
  );
}
