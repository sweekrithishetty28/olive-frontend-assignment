export default function HeroText() {
  return (
    <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
      <h1
        style={{
          fontFamily: "'Georgia', serif",
          fontWeight: 700,
          fontSize: "clamp(40px, 6vw, 60px)",
          color: "#1a2e07",
          lineHeight: 1.1,
          letterSpacing: "-1.5px",
          marginBottom: "20px",
        }}
      >
        The Safest Way to
        <br />
        Shop for Groceries
      </h1>

      <p
        style={{
          fontFamily: "'Georgia', serif",
          fontSize: "16px",
          color: "#6b7280",
          lineHeight: 1.7,
          maxWidth: "440px",
          margin: "0 auto",
        }}
      >
        Use the Olive Food Scanner App to Instantly Eliminate
        Harmful Ingredients from Your Family's Diet and Get
        Expert-Backed Food Insights
      </p>
    </div>
  );
}