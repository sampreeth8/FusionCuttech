import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/banner.css"; // Import the scoped CSS

const AnimatedBanner: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for animations
  }, []);

  return (
    <section
      className="animated-banner aos-init aos-animate"
      data-aos="fade-right"
    >
      <div className="animated-banner-container">
        <div className="animated-banner__text">
          <h3>
            Looking to discuss your project or get a{" "}
            <span className="animated-banner-highlight">
              personalized quote
            </span>
            ?
            <br /> Let us help bring your{" "}
            <span className="animated-banner-highlight">vision</span> to life!
          </h3>
        </div>
        <a href="/contact" className="animated-banner__button">
          CONTACT US TODAY
        </a>
      </div>
    </section>
  );
};

export default AnimatedBanner;
