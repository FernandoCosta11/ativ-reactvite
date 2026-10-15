import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { useTheme } from '../hooks/useTheme';
import { profile } from '../data/profile';
import Icon from './Icon';
import styles from './Header.module.css';

export default function Header() {
  const { t, lang, setLang } = useLanguage();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // fecha o menu mobile ao trocar de página
  useEffect(() => setOpen(false), [location.pathname]);

  // fecha com Esc
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const links = [
    { to: '/', label: t.nav.about, end: true },
    { to: '/projetos', label: t.nav.projects },
    { to: '/experiencias', label: t.nav.experiences },
    { to: '/contato', label: t.nav.contact },
  ];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link to="/" className={styles.brand}>
          {profile.name}
        </Link>

        <nav id="main-nav" className={`${styles.nav} ${open ? styles.navOpen : ''}`} aria-label="Principal">
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.tools}>
          <div className={styles.lang} role="group" aria-label={t.language}>
            {['pt', 'en'].map((code) => (
              <button
                key={code}
                type="button"
                className={styles.langBtn}
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            className={styles.iconBtn}
            onClick={toggle}
            aria-label={theme === 'dark' ? t.theme.toLight : t.theme.toDark}
            title={theme === 'dark' ? t.theme.toLight : t.theme.toDark}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>

          <button
            type="button"
            className={`${styles.iconBtn} ${styles.menuBtn}`}
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? t.menu.close : t.menu.open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
}
