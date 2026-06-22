'use client';

// Data-driven Entity-Relationship diagram with animated relationship links.

const TABLE_W = 190;
const ROW_H = 22;
const HEADER_H = 30;

function tableBox(t) {
  const h = HEADER_H + t.columns.length * ROW_H;
  return { x: t.x, y: t.y, w: TABLE_W, h, cx: t.x + TABLE_W / 2, cy: t.y + h / 2 };
}

export default function ERDiagram({ tables = [], relations = [], title }) {
  const boxes = Object.fromEntries(tables.map((t) => [t.name, tableBox(t)]));
  const maxX = Math.max(...tables.map((t) => t.x + TABLE_W)) + 30;
  const maxY = Math.max(...tables.map((t) => tableBox(t).y + tableBox(t).h)) + 30;

  return (
    <figure className="diagram-wrap" style={{ margin: 0 }}>
      {title && (
        <figcaption
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.8rem',
            color: 'var(--muted)',
            marginBottom: '0.75rem',
          }}
        >
          {title}
        </figcaption>
      )}
      <svg viewBox={`0 0 ${maxX} ${maxY}`} xmlns="http://www.w3.org/2000/svg" role="img">
        {/* relationships */}
        {relations.map((r, i) => {
          const a = boxes[r.from];
          const b = boxes[r.to];
          if (!a || !b) return null;
          const path = `M ${a.cx} ${a.cy} L ${b.cx} ${b.cy}`;
          const midX = (a.cx + b.cx) / 2;
          const midY = (a.cy + b.cy) / 2;
          return (
            <g key={`rel-${i}`}>
              <path d={path} fill="none" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle r="3.5" fill="var(--green)">
                <animateMotion dur="2.4s" repeatCount="indefinite" path={path} begin={`${i * 0.3}s`} />
              </circle>
              {r.label && (
                <text className="edge-label" x={midX} y={midY - 4} textAnchor="middle">
                  {r.label}
                </text>
              )}
            </g>
          );
        })}

        {/* tables */}
        {tables.map((t) => {
          const b = tableBox(t);
          return (
            <g key={t.name}>
              <rect
                x={b.x}
                y={b.y}
                width={TABLE_W}
                height={b.h}
                rx="8"
                fill="var(--surface)"
                stroke="var(--border)"
                strokeWidth="1.5"
              />
              {/* header */}
              <path
                d={`M ${b.x} ${b.y + 8} Q ${b.x} ${b.y} ${b.x + 8} ${b.y} L ${b.x + TABLE_W - 8} ${b.y} Q ${b.x + TABLE_W} ${b.y} ${b.x + TABLE_W} ${b.y + 8} L ${b.x + TABLE_W} ${b.y + HEADER_H} L ${b.x} ${b.y + HEADER_H} Z`}
                fill="rgba(45,212,167,0.14)"
              />
              <text
                x={b.x + 12}
                y={b.y + 20}
                style={{ fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 700 }}
                fill="var(--green)"
              >
                {t.name}
              </text>
              {/* columns */}
              {t.columns.map((c, ci) => {
                const ry = b.y + HEADER_H + ci * ROW_H;
                return (
                  <g key={c.name}>
                    {ci > 0 && (
                      <line
                        x1={b.x}
                        y1={ry}
                        x2={b.x + TABLE_W}
                        y2={ry}
                        stroke="var(--border-soft)"
                        strokeWidth="1"
                      />
                    )}
                    <text
                      x={b.x + 12}
                      y={ry + 15}
                      style={{ fontFamily: 'var(--mono)', fontSize: '11px' }}
                      fill={c.key === 'PK' ? 'var(--cyan)' : 'var(--text)'}
                    >
                      {c.name}
                    </text>
                    <text
                      x={b.x + TABLE_W - 12}
                      y={ry + 15}
                      textAnchor="end"
                      style={{ fontFamily: 'var(--mono)', fontSize: '10px' }}
                      fill="var(--faint)"
                    >
                      {c.key ? `${c.key} · ${c.type}` : c.type}
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
