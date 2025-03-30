import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

export default function ProjectCarousel() {
  const [currentImage, setCurrentImage] = useState("");

  const projects = [
    {
      title: "Hotel Website",
      description: "A full-stack site built with React, Flask and AWS.",
      url: "https://example-hotel.com",
      images: [
        "https://picsum.photos/seed/1200/800",
        "https://picsum.photos/seed/1200/800",
      ],
    },
    {
      title: "Admin System for UNAM",
      description: "Built using Laravel, for a Neurodevelopment Institute.",
      url: "https://example-unam.com",
      images: [
        "https://picsum.photos/seed/1200/800",
        "https://picsum.photos/seed/1200/800",
      ],
    },
    {
      title: "Interactive Educational Website",
      description: "React + Tailwind site with games and learning sections.",
      url: "https://example-education.com",
      images: [
        "https://picsum.photos/1200/800",
        "https://picsum.photos/1200/800",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={18000}
        showStatus={false}
        showIndicators
      >
        {projects.map((proj, index) => (
          <div key={index} className="p-2 border-none rounded-lg shadow-md">
            <h3 className="text-2xl text-white font-bold mb-2">{proj.title}</h3>
            <p className="mb-4 text-white">{proj.description}</p>
            <Carousel
              showThumbs
              infiniteLoop
              autoPlay
              interval={6000}
              showStatus={false}
              showArrows={false}
              className="mt-4"
            >
              {proj.images.map((img, idx) => (
                <div key={idx}>
                  <a href={proj.url} target="_blank" rel="noopener noreferrer">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={img}
                        alt={`${proj.title} image ${idx + 1}`}
                        className="object-cover rounded-lg shadow-md"
                      />
                    </div>
                  </a>
                </div>
              ))}
            </Carousel>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
