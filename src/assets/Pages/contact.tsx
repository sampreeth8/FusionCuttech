// import React from "react";
import "../styles/contact.css";
import contactbanner from "../images/ccc.jpg";
import AnimatedBanner from "../components/AnimatedBanner";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* ✅ Contact Banner */}
      <div className="contact-banner-container">
        <img
          src={contactbanner}
          alt="Contact Us Banner"
          className="contact-banner-image"
        />
        <div className="contact-banner-overlay">
          <div className="contact-yellow-line"></div>
          <h1 className="contact-banner-text">Contact Us</h1>
        </div>
      </div>

      {/* ✅ Contact Details & Map Section */}
      <div className="contact-details">
        {/* Left Side: Address & Info */}
        <div className="contact-info">
          <h2>Reach out</h2>
          <div className=""></div>
          <h3>ADDRESS & PHONE</h3>
          <p>📍 21 Kenview Blvd Unit #29, Brampton, ON L6T 5G7</p>
          <p>📞 Call: 289.933.7005</p>
          <p>📠 Fax: 000.000.0000</p>

          <h3>BUSINESS HOURS:</h3>
          <p>
            ⏰ <b>Mon - Fri:</b> 8:30am - 5:00pm
          </p>
        </div>

        {/* Right Side: Google Map */}
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5429788583565!2d-79.70167918451058!3d43.72198997911944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3c9f2ef4e5fb%3A0xc1a78c6f9949d91d!2s21%20Kenview%20Blvd%20Unit%20%2329%2C%20Brampton%2C%20ON%20L6T%205G7%2C%20Canada!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <AnimatedBanner />
    </div>
  );
};

export default Contact;
