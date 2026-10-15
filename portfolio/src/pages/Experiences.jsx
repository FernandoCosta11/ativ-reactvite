import { useLanguage } from '../i18n/LanguageContext';
import { experiences } from '../data/experiences';
import styles from './Experiences.module.css';

const typeOrder = ['work', 'opensource', 'event', 'academic'];

export default function Experiences() {
  const { t, tr, formatMonth } = useLanguage();

  // agrupa por tipo; dentro do grupo, o mais recente primeiro
  const groups = typeOrder
    .map((type) => ({
      type,
      items: experiences
        .filter((e) => e.type === type)
        .sort((a, b) => (b.end ?? '9999').localeCompare(a.end ?? '9999') || b.start.localeCompare(a.start)),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="container">
      <header className="page-head">
        <h1>{t.experiences.title}</h1>
        <p>{t.experiences.lead}</p>
      </header>

      {groups.map((group) => (
        <section key={group.type} className={styles.group} aria-labelledby={`exp-${group.type}`}>
          <h2 id={`exp-${group.type}`} className={styles.groupTitle}>
            {t.experiences.types[group.type]}
          </h2>

          <ul className={styles.list}>
            {group.items.map((exp) => (
              <li key={exp.id} className={styles.item}>
                <p className={styles.period}>
                  <time dateTime={exp.start}>{formatMonth(exp.start)}</time>
                  {' – '}
                  {exp.end ? (
                    <time dateTime={exp.end}>{formatMonth(exp.end)}</time>
                  ) : (
                    <span className={styles.current}>{t.experiences.present}</span>
                  )}
                </p>
                <div>
                  <h3 className={styles.role}>{tr(exp.role)}</h3>
                  <p className={styles.org}>{exp.org}</p>
                  <p className={styles.description}>{tr(exp.description)}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
