import React, { useState, useEffect } from "react";
import "../styles/HomePage.css"; // Importing the CSS file
import logo from "../images/homeCompany.jpg";
import hero1 from "../images/weldingBanner.jpg";
import hero2 from "../images/lasercuttingBanner.jpg";
import hero3 from "../images/fabricationBanner.jpg";
import AnimatedBanner from "../components/AnimatedBanner";
import gall1 from "../images/cutting/cutting6.jfif";
import gall4 from "../images/cutting/cutting10.webp";
import gall5 from "../images/fab/fab3.jfif";
import gall8 from "../images/fab/fab12.jfif";
import gall6 from "../images/welding/welding3.jfif";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  // Array of background images
  const images: string[] = [hero1, hero2, hero3];

  // Array of content that corresponds to each image
  const content = [
    {
      title: "Welding",
      description:
        "Welding precision into every project, one bead at a time.Strength and quality, built to last a lifetime.",
    },
    {
      title: "Laser Cutting",
      description:
        "We leverage the latest laser tech for metal cutting that's precise, efficient, and delivers unmatched quality.",
    },
    {
      title: "Metal Fabrication",
      description:
        "We forge quality and built trust, one weld at a time.Custom metal work, crafted just for you",
    },
  ];

  // Set initial image index
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    // Change image every 15 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000); // Change every 15000ms (15 seconds)

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="homepage-container">
      {/* ✅ Banner Section */}
      <div className="banner-container">
        <img
          alt="Background image"
          className="background-image"
          src={images[currentImageIndex]}
          width="1536"
          height="600"
        />
        {/* Overlay */}
        <div className="overlay">
          <h1>
            <i>{content[currentImageIndex].title}</i>
          </h1>
          <p className="description">
            {content[currentImageIndex].description}
          </p>
        </div>

        {/* Navigation Arrows */}
        <button className="nav-arrow left-arrow" onClick={prevImage}>
          ❮
        </button>
        <button className="nav-arrow right-arrow" onClick={nextImage}>
          ❯
        </button>
      </div>

      {/* ✅ New Section Below Banner (Matches Reference Image) */}
      <div className="about-section">
        <div className="about-content">
          {/* Left Side Content */}
          <div className="about-text">
            <h2 className="section-title">
              <span className="blue-bar"></span>
              <i>Industry Leader in Metal Manufacturing</i>
            </h2>
            <p>
              Fusioncut Technologies. has been a trusted name in metal
              manufacturing for over 40 years, providing comprehensive solutions
              tailored to our customers’ needs. From concept to completion, we
              handle every aspect of the process-including design, prototyping,
              fabrication, and testing to ensure top-quality results.
            </p>
            <p>
              Our facility is equipped with cutting-edge automation technology,
              allowing us to enhance efficiency, precision, and production
              speed. In addition to delivering high-quality products, we are
              committed to sustainability. Our processes are designed to
              minimize waste, optimize energy use, and reduce environmental
              impact.
            </p>
            <p>
              As part of our commitment to a greener future, we have adopted
              eco-friendly practices such as integrating energy-efficient laser
              machines, reusing packaging materials, and transitioning to a
              digital production system to cut down on paper waste. These
              initiatives help us lower our carbon footprint while maintaining
              high manufacturing standards.
            </p>
            <p>
              In recent years, we have embraced technological advancements that
              have revolutionized our production methods, benefiting both our
              workforce and our clients. By implementing automation, we have
              significantly improved efficiency, enabling us to offer faster
              turnaround times and cost-effective metal fabrication services.
            </p>
            <p>
              With rapid growth and expansion in Toronto, Metal Tronics is
              dedicated to pushing the boundaries of innovation. We continue to
              invest in our capabilities to serve our customers better,
              providing superior products and solutions that drive success.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="about-image">
            <img src={logo} alt="Metal Fabrication" />
          </div>
        </div>
      </div>
      {/* ✅ Services Section */}
      <div className="services-section">
        <div className="services-container">
          {/* Left Side - Title & Description */}
          <div className="services-text">
            <h2>
              <i>Our Services</i>
            </h2>
            <p>
              At <b>FusionCut Technologies</b>, we specialize in precision
              manufacturing solutions tailored to meet the diverse needs of our
              clients. Our expertise extends across multiple industries,
              providing high-quality services with a commitment to **innovation,
              accuracy, and efficiency**.
            </p>
          </div>

          {/* Vertical Divider */}
          <div className="services-divider"></div>

          {/* Right Side - Services List */}
          <div className="services-list">
            <div className="services-column industry-column">
              <p className="services-title">Our Diverse Range Of Industries</p>
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

            <div className="services-column industry-column">
              <p className="services-title">Our Diverse Range Of Services</p>
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
      <div className="home-gallery">
        {/* ✅ Gallery Heading & Description */}
        <div className="home-gallery-header">
          <h1 className="home-gallery-title">Gallery</h1>
          <p className="home-gallery-description">
            FUSIONCUT Inc. has delivered a wide range of laser cutting and
            fabrication projects over the years. Explore this gallery to see our
            completed works and products.
          </p>
          <Link to="/gallery">
          <button className="home-view-more-btn">View more &gt;</button>
          </Link>
        </div>

        {/* ✅ Gallery Grid */}
        <div className="home-gallery-grid">
          <img
            src={gall1}
            alt="Stack of metal plates with labels"
            className="home-gallery-image"
          />
          <img
            src="https://storage.googleapis.com/a1aa/image/VfmHjOlV-ooqrXAmKibcE7B3wiM2eN2KXa_X2hlFlKQ.jpg"
            alt="Metal fabrication machine"
            className="home-gallery-image"
          />
          <img
            src="https://storage.googleapis.com/a1aa/image/lG88HVUyapE-51N__qGeEYox6c2SQfUTd0d54X7uixM.jpg"
            alt="Person welding metal"
            className="home-gallery-image"
          />
          <img
            src={gall4}
            alt="Laser cutting machine in action"
            className="home-gallery-image"
          />
          <img
            src={gall5}
            alt="Stack of metal boxes with cutouts"
            className="home-gallery-image"
          />
          <img
            src={gall6}
            alt="Worker operating a metal fabrication machine"
            className="home-gallery-image"
          />
          <img
            src="https://storage.googleapis.com/a1aa/image/HMnvKMkZZgoDEMsomRxD6C7JvS-n3lD-MnLKJ-g9AIk.jpg"
            alt="Laser cutting machine working on metal"
            className="home-gallery-image"
          />
          <img
            src={gall8}
            alt="Stack of metal boxes"
            className="home-gallery-image"
          />
        </div>
      </div>
      <AnimatedBanner />
    </div>
  );
};

export default HomePage;
