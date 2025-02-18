import React, { useState, useEffect } from "react";
import "../styles/HomePage.css"; // Importing the CSS file
import logo from "../images/homeCompany.jpg";

const HomePage: React.FC = () => {
  // Array of background images
  const images: string[] = [
    "https://www.metaltronics.ca/img/backgrounds/mt_hero-slide-bg-3.jpg",
    "https://www.metaltronics.ca/img/backgrounds/mt_hero-slide-bg-2.jpg",
    "https://www.metaltronics.ca/img/backgrounds/mt_hero-slide-bg-1.jpg",
  ];

  // Array of content that corresponds to each image
  const content = [
    {
      title: "Customer Service",
      description:
        "Boasting 40 years of industry experience, we provide our clients with quality and personalized service no one can match.",
    },
    {
      title: "Laser Cutting",
      description:
        "We use the latest technology in laser cutting to achieve precise edges and high-quality finishes.",
    },
    {
      title: "FusionCut Technologies",
      description:
        "At FusionCut Technologies., we combine our industry skills, 40 years of experience and state-of-the-art equipment to manufacture quality products at competitive prices.",
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
          <h1><i>{content[currentImageIndex].title}</i></h1>
          <p className="description">{content[currentImageIndex].description}</p>
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
            Fusioncut Technologies. has been a trusted name in metal manufacturing for over 40 years, providing comprehensive solutions tailored to our customers’ needs. From concept to completion, we handle every aspect of the process-including design, prototyping, fabrication, and testing to ensure top-quality results.
            </p>
            <p>
            Our facility is equipped with cutting-edge automation technology, allowing us to enhance efficiency, precision, and production speed. In addition to delivering high-quality products, we are committed to sustainability. Our processes are designed to minimize waste, optimize energy use, and reduce environmental impact.
            </p>
            <p>
            As part of our commitment to a greener future, we have adopted eco-friendly practices such as integrating energy-efficient laser machines, reusing packaging materials, and transitioning to a digital production system to cut down on paper waste. These initiatives help us lower our carbon footprint while maintaining high manufacturing standards.
            </p>
            <p>
            In recent years, we have embraced technological advancements that have revolutionized our production methods, benefiting both our workforce and our clients. By implementing automation, we have significantly improved efficiency, enabling us to offer faster turnaround times and cost-effective metal fabrication services.
            </p>
            <p>
            With rapid growth and expansion in Toronto, Metal Tronics is dedicated to pushing the boundaries of innovation. We continue to invest in our capabilities to serve our customers better, providing superior products and solutions that drive success.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="about-image">
            <img
              src={logo}
              alt="Metal Fabrication"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
