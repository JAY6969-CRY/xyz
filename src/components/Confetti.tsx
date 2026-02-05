import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  rotation: number;
  size: number;
  color: string;
}

interface ConfettiProps {
  count?: number;
}

export function Confetti({ count = 50 }: ConfettiProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = ['#ff1744', '#ff5252', '#ff7043', '#ffab91', '#ff69b4', '#ff1493', '#ffd4e5'];
    const confetti: ConfettiPiece[] = [];

    for (let i = 0; i < count; i++) {
      confetti.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 20 - 20,
        delay: Math.random() * 0.3,
        duration: Math.random() * 1.5 + 2,
        rotation: Math.random() * 360,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    setPieces(confetti);
  }, [count]);

  return (
    <>
      {pieces.map(piece => (
        <div
          key={piece.id}
          className="confetti"
          style={{
            left: `${piece.left}%`,
            top: `${piece.top}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
            opacity: 0.8,
            animation: `confetti-fall ${piece.duration}s ease-out ${piece.delay}s`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
    </>
  );
}
