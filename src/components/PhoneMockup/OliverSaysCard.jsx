export default function OliverSaysCard() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
        <div
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            background: "#5a8a26",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
            <path d="M4.5 1.5V5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="4.5" cy="7" r="0.7" fill="white" />
          </svg>
        </div>
        <span style={{ fontSize: "11px", fontWeight: 700, color: "#374151", fontFamily: "'Georgia', serif" }}>
          Oliver Says:
        </span>
      </div>

      {/* Quote */}
      <p
        style={{
          fontSize: "9.5px",
          color: "#6b7280",
          lineHeight: 1.65,
          fontStyle: "italic",
          fontFamily: "'Georgia', serif",
          margin: 0,
        }}
      >
        "This product's low score mainly comes from the processed sugars, like honey and brown sugar,
        which can impact your family's health when consumed frequently, especially for kids who are
        still developing. Additionally, there are several additives that aren't ideal for your goal
        of avoiding processed foods, making this a choice to consider more carefully."
      </p>

      {/* Breakdown */}
      <div style={{ marginTop: "10px", paddingTop: "8px", borderTop: "1px solid #f3f4f6" }}>
        <p style={{ fontSize: "11px", fontWeight: 700, color: "#4b5563", margin: 0, fontFamily: "'Georgia', serif" }}>
          Breakdown
        </p>
      </div>
    </div>
  );
}