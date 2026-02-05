import { TypewriterText } from '@/components/TypewriterText';

interface LandingScreenProps {
  onContinue: () => void;
}

export default function LandingScreen({ onContinue }: LandingScreenProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-red-50 to-purple-100 animate-pulse" />
      
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              fontSize: `${Math.random() * 40 + 40}px`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 animate-fade-in">
        <div className="mb-8">
          <div className="text-7xl md:text-8xl mb-6 animate-bounce-gentle">💕</div>
        </div>

        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
          <TypewriterText
            text="Hey… I have a very important question 👀"
            delay={50}
          />
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-12 opacity-80">
          This might be worth your time...
        </p>

        {/* Continue Button */}
        <button
          onClick={onContinue}
          className="button-primary text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 shadow-lg"
        >
          Continue
        </button>

        {/* Subtle hint */}
        <p className="text-sm text-gray-500 mt-12 animate-bounce">
          ✨ Click to reveal ✨
        </p>
      </div>
    </div>
  );
}
