import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import homeB from "../assets/homeB.png";
import botLogo from "../assets/logo.png";

export default function Home() {
  return (
    <div className="app">
      <Navbar />

      {/* HERO BANNER */}
      <motion.div
        className="hero-banner"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img src={homeB} alt="Hero Banner" />
      </motion.div>

      {/* HERO TEXT */}
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2>AI Powered Women Safety Intelligence Platform</h2>
        <p>
          NyayaSakhi is an advanced analytical platform to visualize, analyze and
          understand crimes against women across India using intelligent data
          science and interactive geospatial mapping.
        </p>
      </motion.div>

      {/* FEATURES */}
      <motion.div
        className="feature-grid"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Feature
          title="Nationwide Crime Intelligence"
          text="Analyze 20+ years of crime data across all Indian states using AI-driven insights."
        />

        <Feature
          title="Interactive Geo-Visualization"
          text="Dynamic heatmaps and state-wise ranking to uncover regional patterns."
        />

        <Feature
          title="Policy & Awareness Support"
          text="Empowering researchers, NGOs and policymakers for data-backed decisions."
        />
      </motion.div>

      {/* FLOATING CHATBOT */}
      <motion.div
        className="chatbot-float"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={botLogo} alt="Chatbot" />
      </motion.div>

      <div className="footer">
        © 2026 NyayaSakhi — Empowering justice through data.
      </div>
    </div>
  );
}

function Feature({ title, text }) {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
