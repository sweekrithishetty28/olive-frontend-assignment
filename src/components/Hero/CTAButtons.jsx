export default function CTAButtons() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        marginTop: "32px",
      }}
    >
      {/* iOS Download */}
      <button
        className="btn-glow"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "#1e3a06",
          color: "#fff",
          fontSize: "14px",
          fontWeight: 600,
          fontFamily: "'Georgia', serif",
          padding: "12px 24px",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          transition: "transform 0.15s",
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
      >
        {/* Apple icon */}
        <svg width="15" height="18" viewBox="0 0 15 18" fill="none">
          <path
            d="M12.5 9.4c0-1.9 1.56-2.82 1.63-2.87-.89-1.3-2.27-1.48-2.76-1.5-1.18-.12-2.31.7-2.91.7s-1.52-.68-2.5-.66c-1.28.02-2.47.75-3.13 1.9C1.5 9.3 2.47 12.7 3.73 14.54c.64.92 1.4 1.96 2.4 1.92.97-.04 1.33-.62 2.49-.62 1.17 0 1.49.62 2.51.6 1.04-.02 1.69-.94 2.32-1.87.74-1.07 1.04-2.1 1.05-2.16-.02-.01-2.01-.77-2.07-3.08v.07zM10.59 3.37c.53-.65.89-1.54.79-2.43-.77.03-1.7.51-2.25 1.16-.49.57-.92 1.49-.81 2.36.86.07 1.73-.44 2.27-1.09z"
            fill="white"
          />
        </svg>
        Download for iOS
      </button>

      {/* Community link */}
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: "none",
          border: "none",
          color: "#1e3a06",
          fontSize: "14px",
          fontWeight: 600,
          fontFamily: "'Georgia', serif",
          cursor: "pointer",
          transition: "color 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.color = "#3a6010")}
        onMouseLeave={e => (e.currentTarget.style.color = "#1e3a06")}
      >
        Join the Olive Community
        <span style={{ display: "inline-block", transition: "transform 0.2s" }}>→</span>
      </button>
    </div>
  );
}