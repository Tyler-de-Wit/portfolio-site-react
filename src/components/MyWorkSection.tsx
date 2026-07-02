import ProjectCard from "./ProjectCard";
import projectCards from "../data/projectCards";
import { useState, useEffect } from "react";

const MyWorkSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);

  // Calculate the current visible project cards
  const visibleProjectCards = Array.from({ length: 3 }, (_, i) => {
    return projectCards[(startIndex + i) % projectCards.length];
  });

  // Handle previous card button press
  const handlePreviousProjectCard = () => {
    setStartIndex(
      (prev) => (prev - 1 + projectCards.length) % projectCards.length,
    );
    setButtonClicked(true);
  };

  // Handle next card button press
  const handleNextProjectCard = () => {
    cycleToNextProjectCard();
    setButtonClicked(true);
  };

  // Move the visible project cards along once
  const cycleToNextProjectCard = () => {
    setStartIndex((prev) => (prev + 1) % projectCards.length);
  };

  // Cycle through projects every 6 seconds
  useEffect(() => {
    if (!buttonClicked) {
      const interval = setInterval(() => {
        cycleToNextProjectCard();
      }, 6000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [buttonClicked]);

  return (
    <>
      <h2 className="text-center mb-4 pt-4 heading-text">My Work</h2>
      <div className="container pb-5">
        <div className="row g-4">
          {/* Projects */}
          {visibleProjectCards.map((project, index) => (
            <ProjectCard key={project.id} project={project} position={index} />
          ))}

          {/* Carousel Indicator */}
          <div className="d-flex justify-content-center my-4">
            {projectCards.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${startIndex === index ? "active" : ""}`}
                onClick={() => {
                  setStartIndex(index);
                  setButtonClicked(true);
                }}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="d-flex justify-content-center mt-1">
            <button
              onClick={handlePreviousProjectCard}
              className="btn button-link-2 me-2"
            >
              <i className="bi bi-arrow-left me-2"></i>Previous
            </button>
            <button
              onClick={handleNextProjectCard}
              className="btn button-link-2 ms-2"
            >
              Next<i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWorkSection;
