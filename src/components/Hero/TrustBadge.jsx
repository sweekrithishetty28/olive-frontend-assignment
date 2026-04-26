const AVATARS = [
  { initials: "J", bg: "#f4a261", color: "#fff" },
  { initials: "S", bg: "#e76f51", color: "#fff" },
  { initials: "M", bg: "#2a9d8f", color: "#fff" },
  { initials: "A", bg: "#457b9d", color: "#fff" },
  { initials: "K", bg: "#a8dadc", color: "#2a6b6b" },
];

export default function TrustBadge() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center" }}>
      {/* Stacked avatars */}
      <div style={{ display: "flex" }}>
        {AVATARS.map(({ initials, bg, color }, i) => (
          <div
            key={i}
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              border: "2.5px solid #eef6e2",
              background: bg,
              color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              fontWeight: 700,
              marginLeft: i === 0 ? 0 : "-10px",
              position: "relative",
              zIndex: AVATARS.length - i,
              boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
              fontFamily: "'Georgia', serif",
            }}
          >
            {initials}
          </div>
        ))}
      </div>

      {/* Text */}
      <p
        style={{
          fontSize: "13.5px",
          color: "#6b7280",
          fontFamily: "'Georgia', serif",
          margin: 0,
        }}
      >
        Trusted by thousands of healthy families
      </p>
    </div>
  );
}