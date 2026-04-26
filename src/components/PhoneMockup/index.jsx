import ProductCard from "./ProductCard";
import OliverSaysCard from "./OliverSaysCard";

function GhostPhone({ style }) {
  return (
    <div
      style={{
        position: "absolute",
        width: "220px",
        height: "360px",
        borderRadius: "32px",
        background: "linear-gradient(160deg, #dff0c8, #c2e090)",
        border: "7px solid #d0d0d0",
        opacity: 0.28,
        filter: "blur(2px)",
        ...style,
      }}
    />
  );
}

export default function PhoneMockup() {
  return (
    <div
      className="phone-float"
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
        height: "460px",
        marginTop: "56px",
      }}
    >
      {/* Left ghost phone */}
      <GhostPhone
        style={{
          left: "50%",
          transform: "translateX(-290px) rotate(-3deg)",
          top: "30px",
        }}
      />

      {/* Right ghost phone */}
      <GhostPhone
        style={{
          left: "50%",
          transform: "translateX(70px) rotate(3deg)",
          top: "30px",
        }}
      />

      {/* Main phone */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "270px",
          borderRadius: "38px",
          border: "8px solid #181818",
          background: "#fff",
          boxShadow: "0 32px 80px rgba(0,0,0,0.25), 0 8px 24px rgba(0,0,0,0.12)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Dynamic island / notch bar */}
        <div
          style={{
            background: "#181818",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "80px",
              height: "14px",
              background: "#111",
              borderRadius: "999px",
            }}
          />
        </div>

        {/* Screen */}
        <div
          style={{
            background: "#f4f4f4",
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <ProductCard />
          <OliverSaysCard />
        </div>
      </div>
    </div>
  );
}