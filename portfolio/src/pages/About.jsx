import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { profile } from '../data/profile';
import TopoMap from '../components/TopoMap';
import styles from './About.module.css';

export default function About() {
  const { t, tr } = useLanguage();

  return (
    <>
      <section className={`container ${styles.hero}`}>
        <div className={styles.heroText}>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.role}>{tr(profile.role)}</p>
          <p className={styles.location}>{tr(profile.location)}</p>
          <p className={styles.intro}>{tr(profile.intro)}</p>
          <div className={styles.actions}>
            <Link to="/projetos" className="btn btn-primary">
              {t.about.seeProjects}
            </Link>
            <Link to="/contato" className="btn btn-ghost">
              {t.about.getInTouch}
            </Link>
          </div>
        </div>

        <div className={styles.heroMap}>
          <TopoMap seed="fernando-serra" animate count={18} hills={5} />
        </div>
      </section>

      <section className={`container ${styles.section}`} aria-labelledby="details-title">
        <h2 id="details-title" className={styles.sectionTitle}>
          {t.about.detailsTitle}
        </h2>
        <dl className={styles.details}>
          {profile.details.map((item) => (
            <div key={item.label.pt} className={styles.detail}>
              <dt>{tr(item.label)}</dt>
              <dd>{tr(item.text)}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={`container ${styles.section}`} aria-labelledby="skills-title">
        <h2 id="skills-title" className={styles.sectionTitle}>
          {t.about.skillsTitle}
        </h2>
        <div className={styles.skills}>
          {profile.skills.map((group) => (
            <div key={group.group.pt}>
              <h3 className={styles.skillGroup}>{tr(group.group)}</h3>
              <ul className={styles.skillList}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
