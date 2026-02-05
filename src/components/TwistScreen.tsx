import { useState } from 'react';

interface TwistScreenProps {
  onYes: () => void;
  question: string;
  yesText: string;
  celebration: string;
  emoji: string;
}

export default function TwistScreen({ 
  onYes, 
  question, 
  yesText, 
  celebration,
  emoji 
}: TwistScreenProps) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noScale, setNoScale] = useState(1);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleNoHover = () => {
    const randomX = (Math.random() - 0.5) * 250;
    const randomY = (Math.random() - 0.5) * 250;
    const randomScale = Math.random() * 0.4 + 0.4;
    setNoPosition({ x: randomX, y: randomY });
    setNoScale(randomScale);
  };

  const handleYesClick = () => {
    setShowCelebration(true);
    setTimeout(() => {
      onYes();
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-pink-100 to-rose-200" />

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-5xl opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Celebration overlay */}
      {showCelebration && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-pink-500/20 backdrop-blur-sm">
          <div className="text-center animate-bounce">
            <div className="text-8xl mb-4">🎉</div>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-pink-600">
              {celebration}
            </h2>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 animate-slide-in max-w-2xl">
        {/* Big emoji */}
        <div className="text-8xl md:text-9xl mb-8 animate-bounce-gentle">
          {emoji}
        </div>

        {/* Question text */}
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-12 text-gray-900">
          {question}
        </h1>

        {/* Buttons Container */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center relative">
          {/* YES Button */}
          <button
            onClick={handleYesClick}
            className="button-primary text-xl md:text-2xl px-10 py-5 min-w-[180px] shadow-xl"
          >
            {yesText}
          </button>

          {/* NO Button - Runs away */}
          <button
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            className="button-secondary text-lg px-6 py-3 min-w-[120px] relative transition-all duration-300"
            style={{
              transform: `translate(${noPosition.x}px, ${noPosition.y}px) scale(${noScale})`,
            }}
          >
            NO 😢
          </button>
        </div>

        {/* Playful hint */}
        <p className="mt-12 text-gray-600 text-sm italic opacity-70">
          The NO button has commitment issues... 👻
        </p>
      </div>
    </div>
  );
}
