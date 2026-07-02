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
          {visibleProjectCards.map((project) => (
            <div className="col-12 col-md-6 col-lg-4 fade-in" key={project.id}>
              <div className="card h-100 card-background thin-border">
                <a href={project.liveSitelinkHref}>
                  <img
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="card-img-top"
                  />
                </a>
                <hr className="m-0" />
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title fs-4 heading-text">
                    {project.title}
                  </h3>
                  <p className="card-text body-text">{project.text}</p>
                  <div className="mt-auto">
                    <div className="mb-2 mt-2">
                      <span className="fw-semibold heading-text">
                        Built With:
                      </span>
                      <br />
                      {project.projectSkills.map((skill) => (
                        <span
                          key={skill.skillName}
                          className="me-3 fs-6 secondary-text"
                        >
                          <i className={`${skill.skillIcon} fs-4`}></i>
                          {skill.skillName}
                        </span>
                      ))}
                    </div>
                    <div className="d-flex gap-2">
                      <a
                        href={project.liveSitelinkHref}
                        className="btn button-link w-50"
                        target="_blank"
                      >
                        {project.liveSitelinkText}
                        <i className="bi bi-arrow-up-right-square ms-2"></i>
                      </a>
                      <a
                        href={project.repositorylinkHref}
                        className="btn button-link w-50"
                        target="_blank"
                      >
                        {project.repositorylinkText}
                        <i className="bi bi-arrow-up-right-square ms-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center">
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
