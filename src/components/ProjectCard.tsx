import { useInView } from "react-intersection-observer";

interface ProjectCardProps {
  project: {
    id: number;
    imageSrc: string;
    imageAlt: string;
    title: string;
    text: string;
    liveSitelinkHref: string;
    liveSitelinkText: string;
    repositorylinkHref: string;
    repositorylinkText: string;
    projectSkills: {
      skillName: string;
      skillIcon: string;
    }[];
  };
  position: number;
}

const ProjectCard = ({ project, position }: ProjectCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: 200,
  });

  return (
    <div
      className={`project-card ${position === 1 ? "col-12 col-lg-6" : "col-12 col-lg-3"} ${position > 0 ? "d-none d-lg-block" : ""} ${
        inView ? "fade-in-right" : "invisible"
      }`}
      ref={ref}
    >
      <div
        className={`card h-100 card-background thin-border ${position === 1 ? "border-2" : ""}`}
      >
        {/* Image */}
        <a href={project.liveSitelinkHref}>
          <img
            src={project.imageSrc}
            alt={project.imageAlt}
            className="card-img-top"
          />
        </a>

        <hr className="m-0" />

        <div className="card-body d-flex flex-column">
          {/* Title */}
          <h3 className="card-title fs-4 heading-text fw-bold">
            {project.title}
          </h3>

          {/* Description */}
          <p className="card-text body-text">{project.text}</p>

          <div className="mt-auto">
            {/* Project Built With */}
            <div className="mb-2 mt-2">
              <span className="fw-semibold heading-text">Built With:</span>

              <br />

              {project.projectSkills.map((skill) =>
                position === 1 ? (
                  <span
                    key={skill.skillName}
                    className="me-3 fs-6 secondary-text"
                  >
                    <i className={`${skill.skillIcon} fs-4`}></i>
                    {skill.skillName}
                  </span>
                ) : (
                  <span
                    key={skill.skillName}
                    className="me-3 fs-6 secondary-text"
                  >
                    <i className={`${skill.skillIcon} fs-4`}></i>
                  </span>
                ),
              )}
            </div>

            {/* Link Buttons */}
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
  );
};

export default ProjectCard;
