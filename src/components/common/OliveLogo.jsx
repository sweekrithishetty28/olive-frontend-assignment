export default function OliveLogo() {
  return (
    <a href="/" className="flex items-center gap-1" style={{ textDecoration: "none" }}>
      {/* SVG olive with face */}
      <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* stem */}
        <path d="M14 6 Q18 1 22 2.5 Q18 6.5 14 6Z" fill="#4a7c20" />
        {/* body */}
        <ellipse cx="14" cy="19" rx="9.5" ry="11.5" fill="#5a8a26" />
        {/* highlight */}
        <ellipse cx="10.5" cy="15" rx="2.8" ry="4" fill="#7ab830" opacity="0.55" />
        {/* eyes */}
        <circle cx="11.5" cy="18.5" r="1.3" fill="#3a6015" opacity="0.75" />
        <circle cx="16.5" cy="18.5" r="1.3" fill="#3a6015" opacity="0.75" />
      </svg>
      <span
        style={{
          fontFamily: "'Georgia', serif",
          fontWeight: 700,
          fontSize: "22px",
          color: "#2b4a0c",
          letterSpacing: "-0.5px",
        }}
      >
        live
      </span>
    </a>
  );
}