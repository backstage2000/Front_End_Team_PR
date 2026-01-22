import { useEffect } from 'react';

export function useLockBodyScroll(isLocked: boolean) {
  useEffect(() => {
    if (isLocked) {
      document.body.classList.add('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [isLocked]);
}
