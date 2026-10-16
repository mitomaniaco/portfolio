import type { ImageMetadata } from 'astro';

const all = import.meta.glob<{ default: ImageMetadata }>('../assets/img/*.webp', { eager: true });

export function pic(file: string): ImageMetadata {
  const m = all[`../assets/img/${file}`];
  if (!m) throw new Error(`Imagem não encontrada: ${file}`);
  return m.default;
}
