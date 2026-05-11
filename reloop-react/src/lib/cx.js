// Thay thế Astro `class:list` — nhận string | array | object (key:bool), phẳng hoá, bỏ falsy, join.
export function cx(...args) {
  const out = [];
  const walk = (a) => {
    if (!a) return;
    if (typeof a === 'string' || typeof a === 'number') { out.push(String(a)); return; }
    if (Array.isArray(a)) { a.forEach(walk); return; }
    for (const k in a) if (a[k]) out.push(k);
  };
  args.forEach(walk);
  return out.join(' ');
}
export default cx;

// Parse chuỗi CSS inline "a: b; c: d" → object {a:'b', c:'d'} cho React style prop.
// Dùng cho các chỗ Astro viết style={`...`} có nhiều prop. Tên dài __css để không đụng biến map (s, t...).
export function __css(css) {
  if (!css || typeof css === 'object') return css || {};
  const out = {};
  for (const part of String(css).split(';')) {
    const i = part.indexOf(':');
    if (i === -1) continue;
    const k = part.slice(0, i).trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    if (k) out[k] = part.slice(i + 1).trim();
  }
  return out;
}
