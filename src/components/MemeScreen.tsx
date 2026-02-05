

interface MemeScreenProps {
  message: {
    text: string;
    emoji: string;
  };
  onNext: () => void;
  progress: number;
  total: number;
}

export default function MemeScreen({ message, onNext, progress, total }: MemeScreenProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-red-50" />

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-5xl opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            {['💕', '✨', '🌹', '💫', '🎀', '💝', '🌺', '⚡'][i]}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-2xl animate-slide-in">
        {/* Progress bar */}
        <div className="mb-12">
          <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-pink-500 to-red-500 h-full transition-all duration-500"
              style={{ width: `${(progress / total) * 100}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-3">
            {progress} of {total}
          </p>
        </div>

        {/* Big emoji */}
        <div className="text-8xl md:text-9xl mb-8 animate-bounce-gentle">
          {message.emoji}
        </div>

        {/* Message text */}
        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-12 text-gray-900 leading-tight">
          {message.text}
        </h2>

        {/* Fun meme-style comments */}
        <div className="space-y-3 mb-12 opacity-70">
          {progress === 1 && <p className="text-lg italic text-gray-600">*nervous system noises* 👀</p>}
          {progress === 2 && <p className="text-lg italic text-gray-600">no pressure tho 😅</p>}
          {progress === 3 && <p className="text-lg italic text-gray-600">jk lots of pressure 💫</p>}
          {progress === 4 && <p className="text-lg italic text-gray-600">but like... in a fun way? 🤔</p>}
          {progress === 5 && <p className="text-lg italic text-gray-600">*drumroll* 🥁</p>}
        </div>

        {/* Next button */}
        <button
          onClick={onNext}
          className="button-primary text-lg px-8 py-4 shadow-lg"
        >
          {progress === total ? 'Show Question' : 'Next'}
        </button>
      </div>
    </div>
  );
}
