import TopoMap from './TopoMap';
import styles from './ProjectCover.module.css';

// Mostra a imagem/GIF do projeto. Sem imagem, gera uma capa com curvas de nível
// única para cada projeto (a semente é o id), até você adicionar o GIF real.
export default function ProjectCover({ project, alt }) {
  return (
    <figure className={styles.cover}>
      {project.image ? (
        <img src={project.image} alt={alt} loading="lazy" decoding="async" />
      ) : (
        <TopoMap seed={project.id} width={320} height={200} count={10} step={4} hills={3} showSummit={false} />
      )}
    </figure>
  );
}
