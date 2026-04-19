/**
 * SAS monogram mark — cream disc, charcoal ring, serif "SAS" with the
 * middle "A" and a fine underline rendered in the brand rust accent.
 */
export function SovereignStandardMark({ className = "" }) {
  return (
    <svg
      className={`sovereign-standard-mark ${className}`.trim()}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      <title>Southern Agentic Systems</title>
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="#f5f0e6"
        stroke="#1f2733"
        strokeWidth="4.5"
      />
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fontFamily='"Playfair Display", Georgia, "Times New Roman", serif'
        fontWeight="600"
        fontSize="34"
        letterSpacing="1.5"
      >
        <tspan fill="#1f2733">S</tspan>
        <tspan fill="#c2542d">A</tspan>
        <tspan fill="#1f2733">S</tspan>
      </text>
      <line
        x1="30"
        y1="68"
        x2="70"
        y2="68"
        stroke="#c2542d"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
