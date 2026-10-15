import { useMemo } from 'react';
import { generateContours } from './topo';
import styles from './TopoMap.module.css';

/**
 * Mapa de curvas de nível gerado por código.
 * animate: as curvas aparecem da base para o topo uma única vez, ao carregar.
 */
export default function TopoMap({
  seed = 'fernando',
  width = 480,
  height = 400,
  count = 16,
  step = 5,
  hills = 4,
  animate = false,
  showSummit = true,
  className = '',
}) {
  const { levels, summit } = useMemo(
    () => generateContours({ seed, width, height, count, step, hills }),
    [seed, width, height, count, step, hills],
  );

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`${styles.map} ${animate ? styles.animate : ''} ${className}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      {levels.map((level, i) => (
        <path
          key={i}
          d={level.d}
          className={level.index ? styles.indexLine : styles.line}
          style={animate ? { animationDelay: `${i * 70}ms` } : undefined}
        />
      ))}
      {showSummit && (
        <g
          className={styles.summit}
          style={animate ? { animationDelay: `${levels.length * 70 + 120}ms` } : undefined}
        >
          <circle cx={summit.x} cy={summit.y} r="11" className={styles.halo} />
          <circle cx={summit.x} cy={summit.y} r="5" className={styles.dot} />
        </g>
      )}
    </svg>
  );
}
