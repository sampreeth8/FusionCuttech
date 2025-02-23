import React, { useState } from "react";
import "../styles/gallery.css"; // Import Gallery-specific styles
import galleryBanner from "../images/gallerypageBanner2.jpg"; // Banner Image

// ✅ Import Lightbox Modules
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  Thumbnails,
  Fullscreen,
  Zoom,
  Counter,
  Slideshow,
} from "yet-another-react-lightbox/plugins";
import AnimatedBanner from "../components/AnimatedBanner";

// ✅ Import images dynamically from fab, cutting, welding folders
const imageImports = import.meta.glob(
  "../images/{fab,cutting,welding}/*.{jpg,jpeg,png,gif,jfif,webp}",
  { eager: true }
);

const images = Object.entries(imageImports).map(([path, mod]) => {
  const category = path.includes("/fab/")
    ? "fabrication"
    : path.includes("/cutting/")
    ? "laser-cutting"
    : path.includes("/welding/")
    ? "welding"
    : "";

  return { src: (mod as { default: string }).default, category };
});

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = images.filter(
    (img) => selectedCategory === "all" || img.category === selectedCategory
  );

  return (
    <div className="gallery-banner-page">
      {/* ✅ Gallery Banner */}
      <div className="gallery-banner-container">
        <img
          src={galleryBanner}
          alt="Gallery Banner"
          className="gallery-banner-image"
        />
        <div className="gallery-banner-overlay">
          <div className="gallery-yellow-line"></div>
          <h1 className="gallery-banner-text">Gallery</h1>
        </div>
      </div>

      {/* ✅ Gallery Content */}
      <div className="gallery-container">
        <h1 className="gallery-title">Gallery</h1>
        <p className="gallery-description">
          FUSIONCUT Inc. has delivered a wide range of laser cutting and
          fabrication projects over the years. Explore this gallery to see our
          completed works and products.
        </p>

        {/* ✅ Category Filters */}
        <div className="gallery-filters">
          {["all", "fabrication", "laser-cutting", "welding"].map(
            (category) => (
              <button
                key={category}
                className={`gallery-filter-button ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.replace("-", " ").toUpperCase()}
              </button>
            )
          )}
        </div>

        {/* ✅ Image Grid */}
        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt="Gallery Image"
              className="gallery-image"
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            />
          ))}
        </div>

        {/* ✅ Lightbox with Plugins */}
        <Lightbox
          slides={filteredImages.map((img) => ({ src: img.src }))}
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          plugins={[Thumbnails, Fullscreen, Zoom, Counter, Slideshow]} // ✅ Added ShowThumbnails plugin
          carousel={{ finite: false }}
          counter={{
            container: { style: { fontSize: "18px", color: "#fff" } },
          }}
          fullscreen={{ auto: false }}
          zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
          thumbnails={{
            position: "bottom", // ✅ Ensure thumbnails are at the bottom
            width: 100, // ✅ Set appropriate thumbnail size
            height: 80,
            border: 2,
            gap: 5,
            showToggle: false, // ✅ Enables Show/Hide Thumbnails Button
          }}
        />
      </div>
      <AnimatedBanner />
    </div>
  );
};

export default Gallery;
