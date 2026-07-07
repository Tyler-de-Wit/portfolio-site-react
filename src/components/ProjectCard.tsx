import bootstrapIcon from "../assets/icons/bootstrap.svg";
import cssIcon from "../assets/icons/css.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import nextjsIcon from "../assets/icons/nextjs.svg";
import phpIcon from "../assets/icons/php.svg";
import reactIcon from "../assets/icons/react.svg";
import sassIcon from "../assets/icons/sass.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import wordpressIcon from "../assets/icons/wordpress.svg";

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
      skillClass: string;
      skillIcon: string;
    }[];
  };
  position: number;
}

const ProjectCard = ({ project, position }: ProjectCardProps) => {
  // Check and output the svg based on the passed technology name
  const outputSvgIcon = (currentIcon: string) => {
    let svgSource;

    switch (currentIcon) {
      case "bootstrap":
        svgSource = bootstrapIcon;
        break;
      case "css":
        svgSource = cssIcon;
        break;
      case "javascript":
        svgSource = javascriptIcon;
        break;
      case "nextjs":
        svgSource = nextjsIcon;
        break;
      case "php":
        svgSource = phpIcon;
        break;
      case "react":
        svgSource = reactIcon;
        break;
      case "sass":
        svgSource = sassIcon;
        break;
      case "typescript":
        svgSource = typescriptIcon;
        break;
      case "wordpress":
        svgSource = wordpressIcon;
        break;
    }

    return (
      <img
        src={svgSource}
        width={25}
        height={25}
        className="mb-1 me-2"
        alt={svgSource}
      />
    );
  };

  return (
    <div
      className={`project-card fade-in ${position === 1 ? "col-12 col-lg-6" : "col-12 col-lg-3"} ${position > 0 ? "d-none d-lg-block" : ""}`}
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
                  <span key={skill.skillName}>
                    {outputSvgIcon(skill.skillIcon)}
                    <span className={`me-3 fs-6 ${skill.skillClass}`}>
                      {skill.skillName}
                    </span>
                  </span>
                ) : (
                  <span key={skill.skillName} className="me-2">
                    {outputSvgIcon(skill.skillIcon)}
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
