import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { strings } from './strings';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'lang';

function initialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'pt' || saved === 'en') return saved;
  } catch {
    /* localStorage indisponível (aba privada, etc.) */
  }
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignora */
    }
  }, [lang]);

  const value = useMemo(() => {
    const locale = lang === 'pt' ? 'pt-BR' : 'en-US';
    return {
      lang,
      setLang,
      t: strings[lang],
      // Traduz um campo { pt, en } vindo dos arquivos de dados
      tr: (field) => (field && typeof field === 'object' ? field[lang] ?? field.pt : field),
      // 'AAAA-MM' -> "mar 2026" / "Mar 2026"
      formatMonth: (ym) => {
        const [y, m] = ym.split('-').map(Number);
        const month = new Intl.DateTimeFormat(locale, { month: 'short' })
          .format(new Date(y, m - 1, 1))
          .replace('.', '');
        return `${month} ${y}`;
      },
    };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage precisa estar dentro de <LanguageProvider>');
  return ctx;
}
