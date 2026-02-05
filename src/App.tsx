import '@/index.css';
import { useState } from 'react';
import LandingScreen from '@/components/LandingScreen';
import MemeScreen from '@/components/MemeScreen';
import QuestionScreen from '@/components/QuestionScreen';
import TwistScreen from '@/components/TwistScreen';
import FinalQuestionScreen from '@/components/FinalQuestionScreen';
import FinalScreen from '@/components/FinalScreen';

export type Screen = 'landing' | 'meme' | 'question1' | 'twist1' | 'twist2' | 'twist3' | 'finalQuestion' | 'final';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [memeIndex, setMemeIndex] = useState(0);

  const memeMessages = [
    {
      text: "Are you ready Nana? 👀",
      emoji: "🤔"
    },
    {
      text: "This question may change EVERYTHING.",
      emoji: "⚡"
    },
    {
      text: "No pressure madam ji. Okay maybe some pressure. 😅",
      emoji: "💫"
    },
    {
      text: "we are entering inka ❤️",
      emoji: "🚨"
    },
    {
      text: "Plot twist coming up... 👀",
      emoji: "🎬"
    }
  ];

  const handleLandingContinue = () => {
    setCurrentScreen('meme');
  };

  const handleMemeNext = () => {
    if (memeIndex < memeMessages.length - 1) {
      setMemeIndex(memeIndex + 1);
    } else {
      setCurrentScreen('question1');
    }
  };

  const handleQuestion1Yes = () => {
    setCurrentScreen('twist1');
  };

  const handleTwist1Yes = () => {
    setCurrentScreen('twist2');
  };

  const handleTwist2Yes = () => {
    setCurrentScreen('twist3');
  };

  const handleTwist3Yes = () => {
    setCurrentScreen('finalQuestion');
  };

  const handleFinalYes = () => {
    setCurrentScreen('final');
  };

  const handleReset = () => {
    setCurrentScreen('landing');
    setMemeIndex(0);
  };

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {currentScreen === 'landing' && (
        <LandingScreen onContinue={handleLandingContinue} />
      )}
      {currentScreen === 'meme' && (
        <MemeScreen
          message={memeMessages[memeIndex]}
          onNext={handleMemeNext}
          progress={memeIndex + 1}
          total={memeMessages.length}
        />
      )}
      {currentScreen === 'question1' && (
        <QuestionScreen 
          onYes={handleQuestion1Yes}
          question="Do you like me? 🥺"
          subtext="(be honest... or don't 😏)"
        />
      )}
      {currentScreen === 'twist1' && (
        <TwistScreen
          onYes={handleTwist1Yes}
          question="Do you think I'm cute? 🙈"
          yesText="Obviously 😍"
          celebration="I KNEW IT! 🥰"
          emoji="✨"
        />
      )}
      {currentScreen === 'twist2' && (
        <TwistScreen
          onYes={handleTwist2Yes}
          question="Would you share your fries with me? 🍟"
          yesText="Always! 🍟"
          celebration="True love confirmed! 💕"
          emoji="🍟"
        />
      )}
      {currentScreen === 'twist3' && (
        <TwistScreen
          onYes={handleTwist3Yes}
          question="Do you promise to laugh at my kullu jokes? 😂"
          yesText="Even the worst ones 😂"
          celebration="You're myyyyy pooookiee nana'! 💝"
          emoji="😂"
        />
      )}
      {currentScreen === 'finalQuestion' && (
        <FinalQuestionScreen onYes={handleFinalYes} />
      )}
      {currentScreen === 'final' && (
        <FinalScreen onReset={handleReset} />
      )}
    </div>
  );
}

export default App;
