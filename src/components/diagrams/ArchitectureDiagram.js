'use client';

// Data-driven animated architecture diagram.
// Renders nodes (Controller/Service/Repository/etc.) and animated edges with
// "data packets" flowing along the connections.

const NODE_W = 150;
const NODE_H = 58;

const ACCENTS = {
  blue: 'var(--blue)',
  cyan: 'var(--cyan)',
  purple: 'var(--purple)',
  green: 'var(--green)',
  red: 'var(--red)',
};

function center(node) {
  return { cx: node.x + NODE_W / 2, cy: node.y + NODE_H / 2 };
}

export default function ArchitectureDiagram({ nodes = [], edges = [], title }) {
  const map = Object.fromEntries(nodes.map((n) => [n.id, n]));

  // Compute bounds for the viewBox.
  const maxX = Math.max(...nodes.map((n) => n.x + NODE_W)) + 30;
  const maxY = Math.max(...nodes.map((n) => n.y + NODE_H)) + 30;

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
        {/* edges first so nodes paint over the endpoints */}
        {edges.map((e, i) => {
          const a = map[e.from];
          const b = map[e.to];
          if (!a || !b) return null;
          const { cx: x1, cy: y1 } = center(a);
          const { cx: x2, cy: y2 } = center(b);
          const path = `M ${x1} ${y1} L ${x2} ${y2}`;
          return (
            <g key={`edge-${i}`}>
              <path
                d={path}
                fill="none"
                stroke="var(--border)"
                strokeWidth="2"
                strokeDasharray={e.dashed ? '5 5' : 'none'}
              />
              {e.animated && (
                <circle r="4" fill="var(--cyan)">
                  <animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    path={path}
                    begin={`${(i % 4) * 0.4}s`}
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="2s"
                    repeatCount="indefinite"
                    begin={`${(i % 4) * 0.4}s`}
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* nodes */}
        {nodes.map((n) => {
          const color = ACCENTS[n.accent] || 'var(--cyan)';
          return (
            <g key={n.id}>
              <rect
                x={n.x}
                y={n.y}
                width={NODE_W}
                height={NODE_H}
                rx="11"
                fill="var(--surface)"
                stroke={color}
                strokeWidth="1.5"
              />
              <rect x={n.x} y={n.y} width="4" height={NODE_H} rx="2" fill={color} />
              <text className="node-label" x={n.x + 16} y={n.y + 24}>
                {n.label}
              </text>
              {n.sub && (
                <text className="node-sub" x={n.x + 16} y={n.y + 42}>
                  {n.sub}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
