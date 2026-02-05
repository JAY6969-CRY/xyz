import { useState } from 'react';

interface FinalQuestionScreenProps {
  onYes: () => void;
}

export default function FinalQuestionScreen({ onYes }: FinalQuestionScreenProps) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noScale, setNoScale] = useState(1);
  const [noAttempts, setNoAttempts] = useState(0);
  const [showMessage, setShowMessage] = useState('');

  const funnyMessages = [
    "Nice try 😏",
    "Wrong answer detected! 🚫",
    "That button doesn't work 🤷",
    "Are you sure about that nana? 🤔",
    "My heart says NO to your NO 💔",
    "Error 404: NO not found 💻",
    "KYaaaaaaaaaaaaaaaa reee👨‍⚖️",
    "Uno reverse! ↩️",
    "I'm going to pretend I didn't see that 🙈",
    "That's  wrong madam 🚔"
  ];

  const handleNoHover = () => {
    const randomX = (Math.random() - 0.5) * 400;
    const randomY = (Math.random() - 0.5) * 400;
    const randomScale = Math.max(0.3, 1 - (noAttempts * 0.1));
    
    setNoPosition({ x: randomX, y: randomY });
    setNoScale(randomScale);
    setNoAttempts(prev => prev + 1);
    setShowMessage(funnyMessages[Math.floor(Math.random() * funnyMessages.length)]);

    // Clear message after 1.5s
    setTimeout(() => setShowMessage(''), 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden relative">
      {/* Dramatic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-200 via-pink-200 to-rose-300" />

      {/* Floating hearts - more intense! */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-5xl opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.15}s`,
              fontSize: `${Math.random() * 60 + 30}px`
            }}
          >
            {['❤️', '💕', '💗', '💖', '💝'][i % 5]}
          </div>
        ))}
      </div>

      {/* Funny message popup */}
      {showMessage && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
          <div className="bg-white px-6 py-3 rounded-full shadow-lg border-2 border-pink-300">
            <p className="font-heading text-lg text-pink-600">{showMessage}</p>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 animate-fade-in max-w-3xl">
        {/* Dramatic intro */}
        <p className="text-lg md:text-xl text-pink-600 mb-4 uppercase tracking-widest font-semibold">
          ✨ The moment of truth ✨
        </p>

        {/* Big pulsing heart */}
        <div className="text-8xl md:text-9xl mb-6 animate-pulse-heart">
          💖
        </div>

        {/* THE Question */}
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
          Will you be my Valentine NANAAA? 
        </h1>

        <p className="text-2xl md:text-3xl text-red-500 mb-12 font-semibold">
          ❤️🥹❤️
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center relative min-h-[150px]">
          {/* YES Button - BIG and gorgeous */}
          <button
            onClick={onYes}
            className="button-primary text-2xl md:text-3xl px-12 py-6 min-w-[200px] shadow-2xl hover:shadow-pink-400/50 animate-pulse"
          >
            YES! 🥰💕
          </button>

          {/* NO Button - Gets smaller and runs away */}
          <button
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            className="button-secondary text-base px-4 py-2 relative transition-all duration-300 opacity-70"
            style={{
              transform: `translate(${noPosition.x}px, ${noPosition.y}px) scale(${noScale})`,
            }}
          >
            no...
          </button>
        </div>

        {/* Stats */}
        {noAttempts > 0 && (
          <p className="mt-8 text-pink-600 text-sm">
            NO attempts blocked: {noAttempts} 🛡️
          </p>
        )}

        {/* Playful footer */}
        <div className="mt-12 text-gray-600 text-sm space-y-2">
          <p className="italic opacity-70">
            "The NO button is having an existential crisis" 👻
          </p>
          {noAttempts >= 5 && (
            <p className="text-pink-500 font-semibold animate-bounce">
              Just click YES already! 😂💕
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
