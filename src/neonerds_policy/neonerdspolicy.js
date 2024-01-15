import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/HeaderDark";
import Footer from "../components/footer/Footer";

const NeoNerdsPolicy = () => {
  document.body.classList.add("dark");
  return (
    <div className="home-light" style={styles.homeLight}>
      <Header />
      {/* End Header */}

      <div style={styles.policyContainer}>
        <h1 style={styles.mainHeading}>Privacy Policy for NeoNerds Dating App</h1>
        <p style={styles.lastUpdated}>Last Updated: 15 Jan 2024</p>

        <section style={styles.policySection}>
          <h2>Introduction</h2>
          <p>Welcome to NeoNerds! We are committed to protecting your privacy and ensuring a secure online experience. This Privacy Policy outlines our practices concerning the collection, use, and disclosure of your information through the NeoNerds app.</p>
        </section>

        <section style={styles.policySection}>
          <h2>Information Collection</h2>
          <p><strong>Personal Information:</strong> We collect personal information you provide, such as name, email address, age, preferences, photos, and location.</p>
          <p><strong>Usage Data:</strong> Information on how you use the app, including app performance data.</p>
          <p><strong>Device Information:</strong> We collect information about the devices you use to access our service, such as IP address, browser type, and operating system.</p>
        </section>

        <section style={styles.policySection}>
          <h2>Use of Information</h2>
          <p>Your information is used to:</p>
          <ul>
            <li>Provide, maintain, and improve our services.</li>
            <li>Personalize your experience.</li>
            <li>Communicate with you about the service.</li>
            <li>Ensure a safe and secure service.</li>
          </ul>
        </section>

        <section style={styles.policySection}>
          <h2>Sharing of Information</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Service providers who assist us in our operations.</li>
            <li>Law enforcement if required by law.</li>
            <li>Other users within the app for matchmaking purposes.</li>
          </ul>
        </section>

        <section style={styles.policySection}>
          <h2>Data Security</h2>
          <p>We implement robust security measures to protect your data. However, no system can be completely secure, so we cannot guarantee absolute security.</p>
        </section>

        <section style={styles.policySection}>
          <h2>Your Rights</h2>
          <p>You have the right to access, update, or delete your personal information. You can exercise these rights through the app settings or by contacting us.</p>
        </section>

        <section style={styles.policySection}>
          <h2>Changes to This Policy</h2>
          <p>We may update
          this Privacy Policy. We will notify you of significant changes and update the “Last Updated” date at the top of this policy.</p>
        </section>

        <section style={styles.policySection}>
          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us at vyomadigitalsolutions@gmail.com.</p>
        </section>
      </div>

      <Footer />
      {/* End Footer */}
    </div>
  );
};

export default NeoNerdsPolicy;

// Inline CSS Styles
const styles = {
  homeLight: {
    color: '#333', // Adjust text color as needed
  },
  policyContainer: {
    padding: '20px',
    maxWidth: '800px', // Or any other width you prefer
    margin: 'auto',
  },
  mainHeading: {
    fontSize: '28px',
    marginBottom: '10px',
  },
  lastUpdated: {
    fontStyle: 'italic',
    marginBottom: '20px',
  },
  policySection: {
    marginBottom: '20px',
  },
  sectionHeading: {
    fontSize: '22px',
    color: '#222', // Adjust header color as needed
  },
};
