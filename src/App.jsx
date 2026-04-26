import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #eaf4d8 0%, #f2f8e8 50%, #eaf3d6 100%)",
        fontFamily: "'Georgia', serif",
      }}
    >
      <Navbar />
      <HeroSection />
    </div>
  );
}