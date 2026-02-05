import { useState, useRef } from 'react';

interface QuestionScreenProps {
  onYes: () => void;
  question?: string;
  subtext?: string;
}

export default function QuestionScreen({ 
  onYes, 
  question = "Will you be my Valentine? ❤️",
  subtext = "(pick the right answer 👀)"
}: QuestionScreenProps) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noScale, setNoScale] = useState(1);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const funnyNoMessages = [
    "Nice try 😏",
    "Wrong choice detected ❌",
    "System error: NO not allowed 🚫",
    "Nope nope nope 🙅",
    "I didn't hear that 👂",
    "Try again? 🥺",
    "Bruh... 💀",
    "Negative ghost rider 👻"
  ];

  const handleNoHover = () => {
    const randomX = (Math.random() - 0.5) * 300;
    const randomY = (Math.random() - 0.5) * 300;
    const randomScale = Math.random() * 0.5 + 0.5; // 0.5 to 1

    setNoPosition({ x: randomX, y: randomY });
    setNoScale(randomScale);
  };

  const getRandomMessage = () => {
    return funnyNoMessages[Math.floor(Math.random() * funnyNoMessages.length)];
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-red-100 to-rose-200 animate-pulse" />

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              fontSize: `${Math.random() * 50 + 30}px`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 animate-slide-in">
        {/* Big emoji */}
        <div className="text-9xl md:text-9xl mb-8 animate-pulse-heart">
          ❤️
        </div>

        {/* Question text */}
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-12 text-gray-900">
          {question}
        </h1>

        <p className="text-xl text-gray-700 mb-16 opacity-80">
          {subtext}
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center relative">
          {/* YES Button - Always gorgeous */}
          <button
            onClick={onYes}
            className="button-primary text-2xl px-12 py-6 min-w-[150px] shadow-2xl hover:shadow-pink-400/50 hover:glow"
          >
            YES 🥰
          </button>

          {/* NO Button - Runs away */}
          <button
            ref={noButtonRef}
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            className="button-secondary text-xl px-8 py-4 min-w-[130px] relative transition-all duration-300"
            style={{
              transform: `translate(${noPosition.x}px, ${noPosition.y}px) scale(${noScale})`,
              pointerEvents: 'auto'
            }}
            title={getRandomMessage()}
          >
            NO
          </button>
        </div>

        {/* Playful disclaimer */}
        <div className="mt-16 text-gray-600 text-sm">
          <p className="italic opacity-70">The NO button has trust issues... 👻</p>
          <p className="text-xs opacity-50 mt-2">Hint: There's only one correct answer 😉</p>
        </div>
      </div>
    </div>
  );
}
