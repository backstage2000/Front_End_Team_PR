import { useEffect, useRef, useState } from 'react';

export const useTypingPlaceholder = (phrases, speed = 170, pauseTime = 800) => {
  const [placeholder, setPlaceholder] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const forward = useRef(true);
  const pause = useRef(false);

  useEffect(() => {
    if (!isTyping) {
      phraseIndex.current = 0;
      charIndex.current = 0;
      forward.current = true;
      pause.current = false;

      return;
    }

    const tick = () => {
      if (pause.current) return;

      const currentPhrase = phrases[phraseIndex.current];

      if (forward.current) {
        setPlaceholder(currentPhrase.slice(0, charIndex.current + 1));
        charIndex.current++;

        if (charIndex.current === currentPhrase.length) {
          forward.current = false;
          pause.current = true;

          setTimeout(() => {
            pause.current = false;
          }, pauseTime);
        }
      } else {
        setPlaceholder(currentPhrase.slice(0, charIndex.current - 1));
        charIndex.current--;

        if (charIndex.current === 0) {
          forward.current = true;
          phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
        }
      }
    };

    const interval = setInterval(tick, speed);

    return () => clearInterval(interval);
  }, [isTyping, speed, pauseTime, phrases]);

  return { placeholder, setIsTyping, setPlaceholder };
};
