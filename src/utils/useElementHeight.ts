import { useEffect, useRef, useState } from 'react';

export function useElementHeight(isOpen: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? `${ref.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return { ref, height };
}
