import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="container">
      <header className="page-head">
        <h1>{t.notFound.title}</h1>
        <p>{t.notFound.text}</p>
      </header>
      <Link to="/" className="btn btn-primary">
        {t.notFound.back}
      </Link>
    </div>
  );
}
