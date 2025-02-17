import React, { useState, useEffect } from "react";
import "../styles/HomePage.css"; // Importing the CSS file

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
      title: "Metal Fabrication",
      description:
        "At Metal Tronics Inc., we combine our industry skills, 40 years of experience and state-of-the-art equipment to manufacture quality products at competitive prices.",
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
    <div>
      {/* Request a Quote Button */}
      {/* <div className="quote-btn-container">
        <button className="quote-btn">REQUEST A QUOTE</button>
      </div> */}

      {/* Banner Section */}
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
    </div>
  );
};

export default HomePage;
