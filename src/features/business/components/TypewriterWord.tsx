import { useEffect, useState } from 'react';

interface TypewriterWordProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

type Phase = 'typing' | 'deleting';

const TypewriterWord = ({
  words,
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseDuration = 2000,
}: TypewriterWordProps) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<Phase>('typing');
  const [reducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (reducedMotion) return;

    const currentWord = words[wordIndex % words.length] ?? '';
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (phase === 'typing') {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase('deleting'), pauseDuration);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), deletingSpeed);
      } else {
        setWordIndex((index) => (index + 1) % words.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration, reducedMotion]);

  if (reducedMotion) {
    return <span>{words[0]}</span>;
  }

  return (
    <span>
      {text}
      <span className="animate-pulse" aria-hidden="true">|</span>
    </span>
  );
};

export default TypewriterWord;
