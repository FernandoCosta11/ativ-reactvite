import { useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

function systemPrefersDark() {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
}

// Tema claro/escuro. Começa pelo que foi salvo; se nada foi salvo, segue o sistema.
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const attr = document.documentElement.dataset.theme;
    if (attr === 'dark' || attr === 'light') return attr;
    return systemPrefersDark() ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#142120' : '#2f5d50');
  }, [theme]);

  const toggle = () => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignora */
      }
      return next;
    });
  };

  return { theme, toggle };
}
