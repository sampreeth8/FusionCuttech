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
      title: "Expert Solutions",
      description:
        "Providing innovative solutions for industries across the board. From design to production, we lead the way in quality craftsmanship.",
    },
    {
      title: "Precision Engineering",
      description:
        "State-of-the-art technology and expert craftsmanship come together to deliver precision-engineered solutions that meet the highest standards.",
    },
  ];

  // Set initial image index
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    // Change image every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5000ms (5 seconds)

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  //   // Function to go to the next image
  //   const nextImage = () => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   };

  //   // Function to go to the previous image
  //   const prevImage = () => {
  //     setCurrentImageIndex(
  //       (prevIndex) => (prevIndex - 1 + images.length) % images.length
  //     );
  //   };

  return (
    <div>
      <div className="absolute top-4 right-4 z-20">
        <button className="bg-yellow-500 text-black font-bold py-2 px-4">
          REQUEST A QUOTE
        </button>
      </div>
      <div className="relative w-full h-96">
        <img
          alt="Background image"
          className="w-full h-full object-cover"
          height="600"
          src={images[currentImageIndex]} // Dynamic background image
          width="1920"
        />
        {/* Content Overlay */}
        <div className="overlay">
          <h1 className="text-white text-4xl font-bold mb-4 text-right">
            {content[currentImageIndex].title}
          </h1>
          <p className="text-white text-lg mb-6 description">
            {content[currentImageIndex].description}
          </p>
        </div>

        {/* Request a Quote Button */}

        {/* Navigation Arrows
        <div className="absolute inset-y-0 left-0 flex items-center z-20">
          <button onClick={prevImage} className="text-white text-2xl px-4">
            <i className="fas fa-chevron-left"></i>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center z-20">
          <button onClick={nextImage} className="text-white text-2xl px-4">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
