import { useMemo, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { projects } from '../data/projects';
import ProjectCover from '../components/ProjectCover';
import Icon from '../components/Icon';
import styles from './Projects.module.css';

// do mais antigo para o mais recente
const ordered = [...projects].sort((a, b) => a.date.localeCompare(b.date));

// tecnologias em ordem de frequência (as mais usadas primeiro)
const technologies = (() => {
  const freq = new Map();
  ordered.forEach((p) => p.tech.forEach((tech) => freq.set(tech, (freq.get(tech) ?? 0) + 1)));
  return [...freq.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([tech]) => tech);
})();

export default function Projects() {
  const { t, tr, formatMonth } = useLanguage();
  const [filter, setFilter] = useState(null);

  const visible = useMemo(
    () => (filter ? ordered.filter((p) => p.tech.includes(filter)) : ordered),
    [filter],
  );
  const latestId = ordered[ordered.length - 1]?.id;

  return (
    <div className="container">
      <header className="page-head">
        <h1>{t.projects.title}</h1>
        <p>{t.projects.lead}</p>
      </header>

      <div className={styles.filters}>
        <span className={styles.filterLabel} id="filter-label">
          {t.projects.filterLabel}
        </span>
        <div className={styles.filterButtons} role="group" aria-labelledby="filter-label">
          {[null, ...technologies].map((tech) => (
            <button
              key={tech ?? 'all'}
              type="button"
              className={styles.chip}
              aria-pressed={filter === tech}
              onClick={() => setFilter(tech)}
            >
              {tech ?? t.projects.all}
            </button>
          ))}
        </div>
        <p className={styles.count} aria-live="polite">
          {t.projects.count(visible.length)}
        </p>
      </div>

      {visible.length === 0 ? (
        <p className={styles.empty}>{t.projects.empty}</p>
      ) : (
        <ol className={styles.timeline}>
          {visible.map((project) => (
            <li
              key={project.id}
              className={`${styles.item} ${project.id === latestId ? styles.latest : ''}`}
            >
              <time className={styles.when} dateTime={project.date}>
                {formatMonth(project.date)}
              </time>
              <span className={styles.marker} aria-hidden="true" />

              <article className={styles.card}>
                <ProjectCover project={project} alt={`${project.name}: ${tr(project.description)}`} />
                <div className={styles.text}>
                  <h2 className={styles.name}>{project.name}</h2>
                  <p className={styles.description}>{tr(project.description)}</p>
                  <ul className={styles.tech} aria-label={t.projects.techLabel}>
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <a className={styles.repo} href={project.repo} target="_blank" rel="noreferrer">
                    <Icon name="github" size={18} />
                    {t.projects.repo}
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
