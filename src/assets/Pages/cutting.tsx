import React from "react";
import "../styles/cutting.css"; // Import Cutting-specific styles
import cuttingBanner from "../images/ccc.jpg"; // Keep this unchanged
import { FaFileInvoice, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AnimatedBanner from "../components/AnimatedBanner";
// Update with actual image path

const Cutting: React.FC = () => {
  return (
    <div className="cutting-page">
      {/* ✅ Cutting Banner (Unchanged) */}
      <div className="cutting-banner-container">
        <img
          src={cuttingBanner}
          alt="Cutting Banner"
          className="cutting-banner-image"
        />
        <div className="cutting-banner-overlay">
          <div className="cutting-yellow-line"></div>
          <h1 className="cutting-banner-text">Laser Cutting</h1>
        </div>
      </div>

      {/* Additional Cutting Content Section */}
      <div className="cutting-content">
        {/* ✅ Left Side - Cutting Info */}
        <div className="cutting-text">
          <div className="cutting-title">
            <span className="cutting-border"></span>
            <i>Metal Cutting</i>
          </div>
          <p className="cutting-description">
            As a leading metal cutter in the Greater Toronto Area, Metal Tronics
            Inc. is dedicated to using specialized equipment and focusing on
            precision during operation. Our capabilities allow us to work with
            material thicknesses ranging from .001” to 1”. This range means we
            are better able to meet your varying needs.
          </p>
          <p className="cutting-description">
            Cutting edge equipment aside, the true stars of the show are our
            experienced employees. Their decades of combined experience in the
            metalworking industry means your project is always in safe hands.
            They have received special training, honed their skills over the
            years, and can predict and meet your expectations quickly and
            effectively. Providing top-notch metal cutting to Toronto’s powerful
            businesses isn’t an easy task, but we do it exceptionally well.
            Learn more about who we are and what we do on our{" "}
            <a href="/company-profile" className="fc-accent-2-steel-cutting">
              Company Profile page.
            </a>
          </p>
          <p className="cutting-description">
            The combination of skilled personnel and advanced equipment allows
            us to weld, cut, form, machine, and perfect your fabricated product
            before we ship it out to you. The end result is a structure that is
            of the best quality, sticks to tight tolerances, has been precisely
            cut, and is tested for structural integrity.
          </p>
          <div className="cutting-divider"></div>

          {/* ✅ Contact Information */}
          <div className="precision-actions-cutting">
            <div className="precision-action-cutting">
              <Link to="/contact" className="precision-action-link-cutting">
                <FaPhoneAlt className="precision-icon-cutting" />
                CALL US: <strong>289-933-7005</strong>
              </Link>
            </div>
            <div className="precision-action-cutting">
              <Link to="/contact" className="precision-action-link-cutting">
                <FaFileInvoice className="precision-icon-cutting" />
                <span>REQUEST A QUOTE</span>
              </Link>
            </div>
            <div className="precision-action-cutting">
              <a
                href="https://www.google.com/maps/dir//21+Kenview+Blvd+%2329+Brampton,+ON+L6T+5G7/@43.73756,-79.64931,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x882b3b808ed14e9f:0xac94b3ffabf91a9a"
                className="precision-action-link-cutting"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt className="precision-icon-cutting" />
                <span>FIND US ON THE MAP</span>
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Right Side - Image (This remains unchanged) */}
        <div className="cutting-image-container">
          <img
            src="https://storage.googleapis.com/a1aa/image/2Po9bXrjypSRk-lwypX1vXovTSk5XtMcm_oHSjPobMg.jpg"
            alt="Metal Cutting Machine"
            className="cutting-image"
          />
        </div>
      </div>

      {/* ✅ Sheet Metal Cutting Section (Integrated Below Cutting Content) */}
      <div className="sheet-metal-container-cutting">
        {/* ✅ Left Side - Images Grid */}
        <div className="sheet-metal-images-cutting">
          <img
            src="https://storage.googleapis.com/a1aa/image/HpPvGHVdTsDqN_4icKNAf4Snr09Qkj_TWR2qsvgpK7g.jpg"
            alt="Sheet metal parts arranged in a grid"
            className="sheet-metal-img-cutting"
          />
          <img
            src="https://storage.googleapis.com/a1aa/image/gYFB27KOMMBSMjq47IXHP1h1VBcMni_WJ4SqVyM1nwo.jpg"
            alt="Stacked sheet metal parts wrapped in plastic"
            className="sheet-metal-img-cutting"
          />
          <img
            src="https://storage.googleapis.com/a1aa/image/7W-zuM5u5OVPV1clLSuzLW6dv4QP7hMtAMGl2CDHUPc.jpg"
            alt="Cylindrical sheet metal parts"
            className="sheet-metal-img-cutting"
          />
          <img
            src="https://storage.googleapis.com/a1aa/image/y4cT4Ql-f9GQuEIMI2pfCHxyQNrlkvtGqGbOkl-Vl8c.jpg"
            alt="Various sheet metal parts in different shapes"
            className="sheet-metal-img-cutting"
          />
        </div>

        {/* ✅ Right Side - Information Section */}
        <div className="sheet-metal-info-cutting">
          <h2 className="sheet-metal-title-cutting">
            <span className="cutting-border-metal"></span> Sheet Metal Cutting
          </h2>
          <p>
            Cutting of sheet metal is necessary for a range of industries,
            including construction, electronics, medical, furniture, automotive,
            and aerospace, to name a few. Our technicians, designers, and other
            personnel have all been involved in many metal cutting projects of
            varying complexity and scale in the past. They know what you need,
            when you need it, and how to supply the solution to satisfy all
            expectations.
          </p>
          <p>
            <a href="/metal-cutting" className="fc-accent-2-steel-cutting">
              At Metal Tronics Inc.,
            </a>{" "}
            we understand that every client has their own set of needs,
            production scale, and timelines. Our capabilities allow us to take
            on both large production volumes and large project dimensions. Some
            of the structures, products, and sheet metal cutting projects we
            have done can be viewed in our Gallery.
          </p>
          <a href="/gallery">
            <button className="sheet-metal-btn-cutting">View more &gt;</button>
          </a>
        </div>
      </div>

      {/* ✅ Cutting Content Section (Matches Reference Image) */}
      <div className="cutting-content">
        {/* ✅ Left Side - Cutting Info */}
        <div className="cutting-text">
          <div className="cutting-title">
            <span className="cutting-border"></span>
            <i>Metal Cutting</i>
          </div>
          <p className="cutting-description">
            Metal cutting is one of our key specializations. We are a dedicated
            metal shop serving Toronto and the GTA region, which has an almost
            endless demand for metal structures, either for decoration or
            structural support in buildings, offices, and other locations. We
            supply high-quality products to meet this demand.
          </p>
          <p className="cutting-description">
            Our team has experience cutting products using a range of materials
            including:
          </p>

          {/* ✅ Material List */}
          <ul className="cutting-list">
            <li>
              <i className="fas fa-check cutting-icon"></i> Steel
            </li>
            <li>
              <i className="fas fa-check cutting-icon"></i> Stainless steel
            </li>
            <li>
              <i className="fas fa-check cutting-icon"></i> Copper
            </li>
            <li>
              <i className="fas fa-check cutting-icon"></i> Brass
            </li>
            <li>
              <i className="fas fa-check cutting-icon"></i> Aluminum (sheets and
              extrusions)
            </li>
          </ul>

          <div className="cutting-divider"></div>

          {/* ✅ Contact Information */}
          <div className="precision-actions-cutting">
            <div className="precision-action-cutting">
              <Link to="/contact" className="precision-action-link-cutting">
                <FaPhoneAlt className="precision-icon-cutting" />
                CALL US: <strong>289-933-7005</strong>
              </Link>
            </div>
            <div className="precision-action-cutting">
              <Link to="/contact" className="precision-action-link-cutting">
                <FaFileInvoice className="precision-icon-cutting" />
                <span>REQUEST A QUOTE</span>
              </Link>
            </div>
            <div className="precision-action-cutting">
              <a
                href="https://www.google.com/maps/dir//21+Kenview+Blvd+%2329+Brampton,+ON+L6T+5G7/@43.73756,-79.64931,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x882b3b808ed14e9f:0xac94b3ffabf91a9a"
                className="precision-action-link-cutting"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt className="precision-icon-cutting" />
                <span>FIND US ON THE MAP</span>
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Right Side - Image (This remains unchanged) */}
        <div className="cutting-image-container">
          <img
            src="https://storage.googleapis.com/a1aa/image/2Po9bXrjypSRk-lwypX1vXovTSk5XtMcm_oHSjPobMg.jpg"
            alt="Metal Cutting Machine"
            className="cutting-image"
          />
        </div>
      </div>
      <AnimatedBanner />
    </div>
  );
};

export default Cutting;
