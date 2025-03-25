import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function ProjectCarousel() {
  const projects = [
    {
      title: "Hotel Website",
      description: "A full-stack site built with React, Flask and AWS.",
    },
    {
      title: "Admin System for UNAM",
      description: "Built using Laravel, for a Neurodevelopment Institute.",
    },
    {
      title: "Interactive Educational Website",
      description: "React + Tailwind site with games and learning sections.",
    },
  ];

  return (
    <div className="max-w-xl mx-auto">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={4000}
        showStatus={false}
        showIndicators={true}
      >
        {projects.map((proj, index) => (
          <div key={index} className="p-6 border border-black">
            <h3 className="text-xl font-bold">{proj.title}</h3>
            <p className="mt-2">{proj.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
