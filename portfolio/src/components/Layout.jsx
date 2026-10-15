import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import Header from './Header';
import Footer from './Footer';

const titles = {
  '/': 'about',
  '/projetos': 'projects',
  '/experiencias': 'experiences',
  '/contato': 'contact',
};

export default function Layout() {
  const { t } = useLanguage();
  const { pathname } = useLocation();

  // volta ao topo e atualiza o título da aba a cada troca de página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const key = titles[pathname];
    document.title = key ? `${t.nav[key]} | Fernando` : 'Fernando';
  }, [pathname, t]);

  return (
    <>
      <a href="#conteudo" className="skip-link">
        {t.skip}
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
