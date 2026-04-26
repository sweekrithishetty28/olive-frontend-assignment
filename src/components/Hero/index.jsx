import TrustBadge from "./TrustBadge";
import HeroText from "./HeroText";
import CTAButtons from "./CTAButtons";
import PhoneMockup from "../PhoneMockup";

export default function HeroSection() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "20px",
        paddingLeft: "24px",
        paddingRight: "24px",
        overflow: "hidden",
      }}
    >
      <div className="fade-in-up delay-100">
        <TrustBadge />
      </div>

      <div className="fade-in-up delay-200" style={{ marginTop: "24px" }}>
        <HeroText />
      </div>

      <div className="fade-in-up delay-300">
        <CTAButtons />
      </div>

      <div className="fade-in-up delay-400" style={{ width: "100%" }}>
        <PhoneMockup />
      </div>
    </section>
  );
}