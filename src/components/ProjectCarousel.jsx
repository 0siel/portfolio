import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

export default function ProjectCarousel() {
  const [currentImage, setCurrentImage] = useState("");

  const projects = [
    {
      title: "AI Business Assistant",
      description:
        "A full-stack site built with React, FastAPI, the Google sheet API and OpenAI.",
      url: "https://ai-analytics-frontend.vercel.app/",
      images: ["ai3.png", "ai2.png", "ai1.png"],
    },
    {
      title: "AI flower prediction app",
      description: "A web app that predicts iris flowers species using AI.",
      url: "https://ai-iris.streamlit.app/",
      images: ["iris2.jpg", "iris1.png"],
    },
    {
      title: "Hotel Website",
      description: "A full-stack site built with React, Flask and AWS.",
      url: "https://www.sanfelipe-hotel.com/",
      images: ["/sfelipe1.png", "sfelip2.png"],
    },
    {
      title: "Admin System for UNAM",
      description: "Built using Laravel, for a Neurodevelopment Institute.",
      url: "https://reha.xenodochial-beaver.74-208-224-90.plesk.page/",
      images: ["unid1.png", "unid2.png"],
    },
    {
      title: "Interactive Educational Website",
      description: "React + Tailwind site with games and learning sections.",
      url: "https://seven-habits.vercel.app/",
      images: ["seven1.png", "seven2.png", "seven3.png"],
    },

    {
      title: "Tesa VR",
      description: "A VR-based training application.",
      url: "https://tesavr.com/",
      images: ["tesa1.png", "tesa2.png"],
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
