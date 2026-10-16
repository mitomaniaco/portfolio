# DESIGN.md · Portfólio Caio Augusto · direção "Stories"

## Tese
O trabalho do Caio vive no feed, e cada marca tem a sua cara. O site fala a língua do Instagram (stories, destaques, grid, post com carrossel) e cada marca ganha um palco na própria cor. Moldura neutra; a cor vem do trabalho.

## Cor
| Token | Valor | Uso |
|---|---|---|
| --paper | #f7f6f3 | fundo da página |
| --paper-2 | #efede8 | fundo de mídia carregando |
| --ink | #111110 | texto, botão principal, palco de contato |
| --ink-2 | #55534e | texto de apoio |
| --ink-3 | #6f6c66 | rótulos, metadados |
| --rule | #dcd9d2 | linhas |
| --live | #5df29b | ponto "disponível" |
| --result | #0a3a4e | palco Result |
| --maxima | #13213b | palco Máxima (cor inicial do topo) |
| --nobre | #1d1718 | palco Nobre |
| --bsa | #8f1f1d | palco BSA |
| --vizu | #a8440f | palco VIZU, datas da experiência |
| --metodo | #2a1416 | palco Método Nobre |
| --rdf | #241a10 | palco Método RDF |
| --hub | #262a33 | palco Nobre Hub |

Texto sobre palco é sempre branco. Cores novas de marca entram como token, tiradas das próprias peças.

## Tipo
Bricolage Grotesque Variable (self-hosted). Display `.disp`: peso 780, largura 86%, tracking -0.03em, entrelinha 0.86. Texto: peso 400, 1.0625rem/1.55. Escala: nome clamp(4.5rem → 12.5rem), h2 clamp(3.5rem → 7.5rem), h3 clamp(2.5rem → 4.5rem).

## Forma
- Palco (`.stage`): raio 28px (22px no celular), padding clamp(20px, 3vw, 48px).
- Botões (`.pill`): cápsula, 46px de altura, peso 700.
- Destaques: círculos com anel; anel cheio = selecionado.
- Mídia: raio 4px no grid, 8px em peça solta, 10–12px em janela, 24px no celular.

## Movimento
Ease `cubic-bezier(0.23, 1, 0.32, 1)`. Troca de cor do palco 500–700ms. Story de 4,2s com barra de progresso; toque nas laterais passa, segurar pausa. Carrossel desliza 420ms. Tudo respeita `prefers-reduced-motion` (stories começam pausados).

## Estrutura
Topo (stories) → Social media (marcas → palco com grid + post) → Sites (texto + palco com navegador e celular) → Sistema (palco Hub) → Sobre → Contato (palco tinta).
