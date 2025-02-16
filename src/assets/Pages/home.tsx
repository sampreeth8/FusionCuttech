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
    // Change image every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000); // Change every 5000ms (5 seconds)

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
      <div className="absolute top-4 right-4 z-20">
        <button className=" quote-btn bg-yellow-500 text-black font-bold py-2 px-4">
          REQUEST A QUOTE
        </button>
      </div>

      {/* Banner Section */}
      <div className="relative w-full h-96">
        <img
          alt="Background image"
          className="w-full h-full object-cover"
          height="600"
          src={images[currentImageIndex]} // Dynamic background image
          width="1536"
        />
        {/* Content Overlay */}
        <div className="overlay">
          <h1 className="text-white text-4xl font-bold mb-4 text-right">
            <i>{content[currentImageIndex].title}</i>
          </h1>
          <p className="text-white text-lg mb-6 description">
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
    </div>
  );
};

export default HomePage;
