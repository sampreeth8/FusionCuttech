import "../styles/company.css"; // Import Scoped CSS
import companyProfileBanner from "../images/cpbanner.jpg"; // Update with actual image path
import fusionCutMachine from "../images/cpinfo.png";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import AnimatedBanner from "../components/AnimatedBanner";
import { Link } from "react-router-dom";

const CompanyProfile = () => {
  return (
    <div className="company-profile-container">
      {/* ✅ Banner Section */}
      {/* ✅ Banner Section */}
      <div className="company-banner-wrapper">
        <img
          src={companyProfileBanner}
          alt="Company Profile Banner"
          className="company-banner-img"
        />
        <div className="company-banner-text-overlay">
          <div className="company-yellow-divider"></div>
          <h1 className="company-banner-title">Company Profile</h1>
        </div>
      </div>

      {/* ✅ About Metal Tronics Inc. Section */}
      <div className="about-company-container">
        <div className="company-section-header">
          <div className="company-blue-bar"></div>
          <h2 className="company-section-title">
            About FusionCut Technologies Inc.
          </h2>
        </div>

        {/* ✅ Company Information Section */}
        <div className="about-welcome__text">
          <strong>FusionCut Technologies Inc.</strong> is a leading innovator in
          metal manufacturing, specializing in custom fabrication and cutting
          solutions. With over a decade of experience, we provide comprehensive
          services from design to final installation, meeting and exceeding
          customer expectations for custom steel fabrication needs
          <br />
          <br />
          Our state-of-the-art facility employs the latest technology and
          knowledge to create precisely what our customers envision. We offer a
          wide range of cutting equipment, including slicers, shredders,
          grinders, and band saws, all designed with extensive safety features
          and sanitary considerations
          <br />
          <br />
          FusionCut Technologies is committed to sustainability and reducing our
          carbon footprint. We're actively working on innovative solutions to
          minimize CO2 emissions in metal production. Our research focuses on
          carbon looping technology, which allows us to recycle and reuse carbon
          within the manufacturing process, potentially reducing scope 1 CO2
          emissions by up to 95%. In addition, we are investing in
          energy-efficient equipment and renewable energy sources to further
          enhance our sustainability efforts. By integrating these advancements,
          we aim to set new industry standards for environmentally responsible
          metal manufacturing.
          <br />
          <br />
          Our team of experienced designers utilizes 3D modeling to create full
          models of parts or products, ensuring accuracy and efficiency. We
          handle projects of all sizes, from single parts to thousand-piece
          orders, delivering on time and within budget. For clients requiring
          on-site assistance, our mobile crews are available for repairs and
          maintenance across North America.
          <br />
          <br />
          At FusionCut Technologies, we're not just focused on current needs but
          are also investing in the future of metal manufacturing. We're
          exploring greener production methods, including the use of renewable
          hydrogen and sustainable carbon sources, to transform European
          production of critical raw materials like silicon and manganese and{" "}
          <a href="/fabrication" className="fc-accent-2">
            About Metal Fabrication
          </a>{" "}
          services to our clients.
        </div>
      </div>

      {/* ✅ Services Section */}
      <div className="services-section">
        <div className="services-container">
          {/* Left Side - Title & Description */}
          <div className="services-text-cp">
            <h2>
              <i>Our Diverse Range Of Industries</i>
            </h2>
          </div>

          {/* Right Side - Services List */}
          <div className="services-list">
            <div className="services-column industry-columncp">
              <p>
                <img
                  src="https://www.metaltronics.ca/img/icons/fa_checkmark.svg"
                  alt="✔"
                />{" "}
                Manufacturing
              </p>
              <p>
                <img
                  src="https://www.metaltronics.ca/img/icons/fa_checkmark.svg"
                  alt="✔"
                />{" "}
                Construction
              </p>
              <p>
                <img
                  src="https://www.metaltronics.ca/img/icons/fa_checkmark.svg"
                  alt="✔"
                />{" "}
                Transportation
              </p>
              <p>
                <img
                  src="https://www.metaltronics.ca/img/icons/fa_checkmark.svg"
                  alt="✔"
                />{" "}
                Telecom
              </p>
              <p>
                <img
                  src="https://www.metaltronics.ca/img/icons/fa_checkmark.svg"
                  alt="✔"
                />{" "}
                Medical
              </p>
              <p>
                <img
                  src="https://www.metaltronics.ca/img/icons/fa_checkmark.svg"
                  alt="✔"
                />{" "}
                Retail
              </p>
            </div>

            <div className="services-column">
              <p style={{ paddingBottom: "32px" }}></p>
              <p>
                <img
                  src="https://www.metaltronics.ca/img/icons/fa_checkmark.svg"
                  alt="✔"
                />{" "}
                Design
              </p>
              <p>
                <img
                  src="https://www.metaltronics.ca/img/icons/fa_checkmark.svg"
                  alt="✔"
                />{" "}
                Consulting
              </p>
              <p>
                <img
                  src="https://www.metaltronics.ca/img/icons/fa_checkmark.svg"
                  alt="✔"
                />{" "}
                Laser Cutting
              </p>
              <p>
                <img
                  src="https://www.metaltronics.ca/img/icons/fa_checkmark.svg"
                  alt="✔"
                />{" "}
                Fabrication
              </p>
              <p>
                <img
                  src="https://www.metaltronics.ca/img/icons/fa_checkmark.svg"
                  alt="✔"
                />{" "}
                CNC Machining (5 Axis)
              </p>
              <p>
                <img
                  src="https://www.metaltronics.ca/img/icons/fa_checkmark.svg"
                  alt="✔"
                />{" "}
                Metal Bending
              </p>
            </div>

            <div className="services-column">
              <p style={{ paddingBottom: "32px" }}></p>
              <p>
                <img
                  src="https://www.metaltronics.ca/img/icons/fa_checkmark.svg"
                  alt="✔"
                />{" "}
                Self-clenching
              </p>
              <p>
                <img
                  src="https://www.metaltronics.ca/img/icons/fa_checkmark.svg"
                  alt="✔"
                />{" "}
                Tapping
              </p>
              <p>
                <img
                  src="https://www.metaltronics.ca/img/icons/fa_checkmark.svg"
                  alt="✔"
                />{" "}
                Forming
              </p>
              <p>
                <img
                  src="https://www.metaltronics.ca/img/icons/fa_checkmark.svg"
                  alt="✔"
                />{" "}
                Assembly
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="precision-section">
        <div className="precision-container">
          {/* Left Side - Text Content */}
          <div className="precision-text">
            <p>
              <strong>FusionCut Technologies</strong> is dedicated to precision
              and efficiency. We use our skills, experience, and
              state-of-the-art machinery to meet project specifications as
              closely as possible while minimizing waste and using recyclable
              materials.
            </p>

            <p>
              Over the years, we’ve built a collection of advanced metalworking
              equipment. Our latest addition is a{" "}
              <strong>5-Axis machine with 4 arms</strong> which allows us to
              produce four parts at a time, significantly increasing production
              volume. This, along with other energy-efficient automated
              equipment, keeps us at the forefront of the metal cutting
              business.
            </p>

            <p>
              Your needs are unique. The project you have in mind may be complex
              and unlike any other you’ve encountered. At{" "}
              <strong>FusionCut Technologies</strong>, our goal is to meet these
              challenging situations head-on and create products that satisfy
              every requirement. Our versatile products are used in various
              industries today, including retail, entertainment, electronics,
              medical, and transportation industries. Browse through our gallery
              to see some of the projects that we have done in the past.
            </p>

            {/* ✅ Contact/Action Buttons */}
            <div className="precision-actions">
              <div className="precision-action">
                <Link to="/contact" className="precision-action-link">
                  <FaPhoneAlt className="precision-icon" />
                  CALL US: <strong>289-933-7005</strong>
                </Link>
              </div>
              <div className="precision-action">
                <Link to="/contact" className="precision-action-link">
                  <FaMapMarkerAlt className="precision-icon" />
                  <span>FIND US ON THE MAP</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="precision-image">
            <img src={fusionCutMachine} alt="FusionCut Machine in Action" />
          </div>
        </div>
      </div>
      <AnimatedBanner />
      <div className="facility-container">
        <div className="facility-wrapper">
          {/* Left Content */}
          <div className="facility-text">
            <h2>
              <span className="facility-title">Our Facility</span>
            </h2>
            <p>
              Our Brampton, Ontario facility has been upgraded with
              energy-efficient equipment, advanced automation, robust quality
              control systems, and streamlined waste reduction processes.
            </p>
            <Link to="/gallery">
              {" "}
              <button className="facility-button">View more &gt;</button>
            </Link>
          </div>

          {/* Right - Images */}
          <div className="facility-images">
            <img
              src="https://storage.googleapis.com/a1aa/image/2aTCZy75tRKpzxwuy1-SAL2c1W0Rpni2oShSXaDwAow.jpg"
              alt="A person welding in a workshop"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/5ueaBGmlkOMLPs-cw4fuX8PT3lpZvOsGx91pQEQewzI.jpg"
              alt="A Mitsubishi Electric machine in a factory"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/oII1lU8mU-0eMQXUSAZ_jrlbc11q8R3oxxFCRBhjfnM.jpg"
              alt="Rows of metal components in a factory"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
