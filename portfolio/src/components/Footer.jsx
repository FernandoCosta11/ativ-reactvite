import { useLanguage } from '../i18n/LanguageContext';
import { profile } from '../data/profile';
import Icon from './Icon';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          {profile.name}, {year}. {t.footer.built}.
        </p>
        <ul className={styles.social}>
          <li>
            <a href={profile.contacts.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Icon name="github" size={18} />
            </a>
          </li>
          <li>
            <a href={profile.contacts.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Icon name="linkedin" size={18} />
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.contacts.email}`} aria-label="E-mail">
              <Icon name="email" size={18} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
