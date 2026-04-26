export default function ProductCard() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
        marginBottom: "8px",
      }}
    >
      {/* Top row: thumbnail + name */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px" }}>
        <div
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #eef7db, #d0e89a)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
            flexShrink: 0,
          }}
        >
          🫙
        </div>
        <div>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#1f2937",
              lineHeight: 1.4,
              margin: 0,
              fontFamily: "'Georgia', serif",
            }}
          >
            Fig and Olive Crackers, Fig and Olive
          </p>
          <p style={{ fontSize: "10px", color: "#9ca3af", margin: "3px 0 0", fontFamily: "'Georgia', serif" }}>
            Lesley Stowe
          </p>
        </div>
      </div>

      {/* Score row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Circle score */}
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #e76f51, #f4a261)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              boxShadow: "0 2px 8px rgba(231,111,81,0.4)",
            }}
          >
            <span style={{ fontSize: "11px", fontWeight: 700, lineHeight: 1 }}>46</span>
            <span style={{ fontSize: "7px", opacity: 0.85, lineHeight: 1 }}>/100</span>
          </div>
          <div>
            <p style={{ fontSize: "10px", color: "#6b7280", margin: 0, fontFamily: "'Georgia', serif" }}>Nutri</p>
            <p style={{ fontSize: "10px", color: "#9ca3af", margin: 0, fontFamily: "'Georgia', serif" }}>Score</p>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "#d1d5db", fontSize: "18px", lineHeight: 1 }}>♡</button>
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "#d1d5db", fontSize: "16px", lineHeight: 1 }}>⤴</button>
        </div>
      </div>
    </div>
  );
}