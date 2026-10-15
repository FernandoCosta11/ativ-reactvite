// Gera curvas de nível (como num mapa topográfico) a partir de um relevo sintético.
// O relevo é uma soma de "morros" gaussianos definidos por uma semente,
// e as curvas são extraídas com o algoritmo marching squares.

function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// Gerador pseudoaleatório determinístico (mulberry32)
function rng(seed) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildTerrain(seed, width, height, hills) {
  const rand = rng(hashString(seed));
  const peaks = [];

  // Uma crista alongada e inclinada, como uma serra
  peaks.push({
    x: width * (0.45 + rand() * 0.2),
    y: height * (0.4 + rand() * 0.2),
    a: 1,
    sx: width * 0.32,
    sy: height * 0.1,
    rot: -0.35 + rand() * 0.2,
  });

  for (let i = 0; i < hills; i++) {
    peaks.push({
      x: width * rand(),
      y: height * rand(),
      a: 0.35 + rand() * 0.45,
      sx: width * (0.08 + rand() * 0.12),
      sy: height * (0.08 + rand() * 0.12),
      rot: rand() * Math.PI,
    });
  }

  const p1 = rand() * 6;
  const p2 = rand() * 6;

  const fn = (x, y) => {
    let h = 0;
    for (const p of peaks) {
      const dx = x - p.x;
      const dy = y - p.y;
      const c = Math.cos(p.rot);
      const s = Math.sin(p.rot);
      const u = dx * c + dy * s;
      const v = -dx * s + dy * c;
      h += p.a * Math.exp(-((u * u) / (2 * p.sx * p.sx) + (v * v) / (2 * p.sy * p.sy)));
    }
    // irregularidade para as curvas não ficarem perfeitas demais
    h += 0.05 * Math.sin(x * 0.034 + p1) * Math.cos(y * 0.029 + p2);
    h += 0.03 * Math.sin((x + y) * 0.052 + p2);
    return h;
  };

  return { fn };
}

const r1 = (n) => Math.round(n * 10) / 10;

/**
 * @returns {{ levels: {d: string, index: boolean}[], summit: {x:number,y:number} }}
 */
export function generateContours({ seed = 'fernando', width = 480, height = 400, step = 5, count = 16, hills = 4 }) {
  const { fn } = buildTerrain(seed, width, height, hills);

  const nx = Math.ceil(width / step) + 1;
  const ny = Math.ceil(height / step) + 1;
  const grid = new Float32Array(nx * ny);
  let min = Infinity;
  let max = -Infinity;
  let highest = { x: 0, y: 0 };
  for (let j = 0; j < ny; j++) {
    for (let i = 0; i < nx; i++) {
      const v = fn(i * step, j * step);
      grid[j * nx + i] = v;
      if (v < min) min = v;
      if (v > max) {
        max = v;
        highest = { x: i * step, y: j * step };
      }
    }
  }

  const levels = [];
  for (let k = 1; k <= count; k++) {
    const iso = min + ((max - min) * k) / (count + 1);
    let d = '';

    for (let j = 0; j < ny - 1; j++) {
      for (let i = 0; i < nx - 1; i++) {
        const tl = grid[j * nx + i];
        const tr = grid[j * nx + i + 1];
        const br = grid[(j + 1) * nx + i + 1];
        const bl = grid[(j + 1) * nx + i];
        const idx = (tl > iso ? 8 : 0) | (tr > iso ? 4 : 0) | (br > iso ? 2 : 0) | (bl > iso ? 1 : 0);
        if (idx === 0 || idx === 15) continue;

        const x0 = i * step;
        const y0 = j * step;
        const lerp = (a, b) => (iso - a) / (b - a);
        const top = [x0 + step * lerp(tl, tr), y0];
        const right = [x0 + step, y0 + step * lerp(tr, br)];
        const bottom = [x0 + step * lerp(bl, br), y0 + step];
        const left = [x0, y0 + step * lerp(tl, bl)];

        const seg = (a, b) => {
          d += `M${r1(a[0])} ${r1(a[1])}L${r1(b[0])} ${r1(b[1])}`;
        };

        switch (idx) {
          case 1: case 14: seg(left, bottom); break;
          case 2: case 13: seg(bottom, right); break;
          case 3: case 12: seg(left, right); break;
          case 4: case 11: seg(top, right); break;
          case 6: case 9: seg(top, bottom); break;
          case 7: case 8: seg(left, top); break;
          case 5: seg(left, top); seg(bottom, right); break;
          case 10: seg(top, right); seg(left, bottom); break;
          default: break;
        }
      }
    }

    // a cada 4 curvas, uma "curva mestra" mais grossa, como nos mapas reais
    levels.push({ d, index: k % 4 === 0 });
  }

  return { levels, summit: highest };
}
