import React from "react";
import "../styles/welding.css"; // Import Welding-specific styles
import weldingBanner from "../images/wpgv2.jpg";
import weldingSection1 from "../images/wpsection1.jpg";
import weldingSection2 from "../images/wpgsection2.jpg";
import AnimatedBanner from "../components/AnimatedBanner";
// Update with actual image path

const Welding: React.FC = () => {
  return (
    <div className="welding-page">
      {/* ✅ Welding Banner (Unchanged) */}
      <div className="welding-banner-container">
        <img
          src={weldingBanner}
          alt="Welding Banner"
          className="welding-banner-image"
        />
        <div className="welding-banner-overlay">
          <div className="welding-yellow-line"></div>
          <h1 className="welding-banner-text">Welding</h1>
        </div>
      </div>

      {/* ✅ Welding Content Section (Matches Reference Image) */}
      <div className="welding-content">
        {/* ✅ Left Side - Welding Info */}
        <div className="welding-text">
          <p className="welding-description">
            <b>At FUSIONCUT</b>, welding is more than just a service—it's an art
            form we've mastered. Our state-of-the-art facility houses a team of
            certified welders who bring precision and expertise to every
            project. We specialize in a variety of welding techniques, including
            MIG, TIG, and stick welding, allowing us to work with diverse
            materials such as steel, aluminum, and stainless steel.
          </p>
          <p className="welding-description">
            Our welding capabilities extend from intricate custom fabrications
            to large-scale industrial projects. We pride ourselves on delivering
            high-quality welds that meet and exceed industry standards, ensuring
            structural integrity and longevity in every piece we create.
          </p>
          <p className="welding-description">
            At FUSIONCUT, we understand that strong welds are the
            backbone of durable metal structures. That's why we invest in
            ongoing training for our team and utilize the latest welding
            technologies to deliver results that stand the test of time.
          </p>
        </div>

        {/* ✅ Right Side - Image (This remains unchanged) */}
        <div className="welding-image-container">
          <img
            src={weldingSection1}
            alt="Metal Welding Machine"
            className="welding-image"
          />
        </div>
      </div>
      {/* ✅ Sheet Metal Welding Section (Integrated Below Welding Content) */}
      <div className="sheet-metal-container-welding">
        {/* ✅ Left Side - Images Grid */}
        <div className="sheet-metal-images-welding">
          <img
            src={weldingSection2}
            alt="Sheet metal parts arranged in a grid"
            className="sheet-metal-img-welding"
          />
        </div>

        {/* ✅ Right Side - Information Section */}
        <div className="sheet-metal-info-welding">
          <h2 className="sheet-metal-title-welding">
            <span className="welding-border-metal"></span> Mastering the Art of
            Metal Fusion
          </h2>
          <p>
            At FUSIONCUT, our welding expertise goes beyond mere metal
            joining—it's about creating seamless connections that stand the test
            of time. Our welding services include:
          </p>
          {/* ✅ Material List */}
          <ul className="welding-list">
            <li>
              <i className="fas fa-check welding-icon"></i> Precision TIG
              Welding: For intricate projects requiring the highest level of
              accuracy and aesthetics.
            </li>
            <li>
              <i className="fas fa-check welding-icon"></i> Robust MIG Welding:
              Ideal for larger fabrications and structural components, offering
              speed and strength.
            </li>
            <li>
              <i className="fas fa-check welding-icon"></i> Versatile Stick
              Welding: Perfect for outdoor projects and repairs, adaptable to
              various conditions.
            </li>
            <li>
              <i className="fas fa-check welding-icon"></i> Custom Alloy
              Welding: Expertise in joining exotic metals and alloys for unique
              project requirements.
            </li>
          </ul>
          <p>
            Our certified welders combine years of experience with
            state-of-the-art equipment to tackle projects of any complexity.
            From delicate aerospace components to heavy-duty industrial
            structures, we ensure every weld meets the highest quality
            standards.
          </p>
          <p>
            <a href="/metal-fabrication" className="fc-accent-2-steel">
              At FUSIONCUT's,
            </a>{" "}
            commitment to excellence extends to our rigorous quality control
            processes, ensuring consistency and reliability in every project we
            undertake. Experience the FUSIONCUT difference—where precision meets
            passion in the world of welding.
          </p>
          <a href="/gallery">
            <button className="sheet-metal-btn-welding">View more &gt;</button>
          </a>
        </div>
      </div>
      <AnimatedBanner />
    </div>
  );
};

export default Welding;
