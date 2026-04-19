/**
 * The Sovereign Standard — classical plinth (stepped base) supporting a
 * rising abstract network: foundation, authority, and connected capability.
 */
export function SovereignStandardMark({ className = "" }) {
  return (
    <svg
      className={`sovereign-standard-mark ${className}`.trim()}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      <title>The Sovereign Standard</title>
      <path
        d="M 9 27.5 H 31 V 30.5 H 9 Z M 6 30.5 H 34 V 34.5 H 6 Z M 3 34.5 H 37 V 39 H 3 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="miter"
      />
      <path
        d="
          M 20 27.2 V 21.2
          M 20 21.2 V 9.8
          M 20 21.2 L 13.2 15.2 L 9 8.5
          M 20 21.2 L 26.8 15.2 L 31 8.5
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle className="sovereign-standard-node" cx="20" cy="27.2" r="1.85" />
      <circle className="sovereign-standard-node" cx="20" cy="21.2" r="2.05" />
      <circle className="sovereign-standard-node" cx="20" cy="9.8" r="1.75" />
      <circle className="sovereign-standard-node" cx="13.2" cy="15.2" r="1.55" />
      <circle className="sovereign-standard-node" cx="26.8" cy="15.2" r="1.55" />
      <circle className="sovereign-standard-node" cx="9" cy="8.5" r="1.45" />
      <circle className="sovereign-standard-node" cx="31" cy="8.5" r="1.45" />
    </svg>
  );
}
