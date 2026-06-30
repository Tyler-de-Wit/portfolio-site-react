import projectCards from "../data/projectCards";

const MyWorkSection = () => {
  return (
    <>
      <h2 className="text-center mb-4 pt-4 heading-text">My Work</h2>
      <div className="container pb-5">
        <div className="row g-5">
          {projectCards.map((project) => (
            <div className="col-12 col-md-6 col-lg-4" key={project.id}>
              <div className="card h-100 card-background thin-border">
                <a href={project.linkHref}>
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
                    <a
                      href={project.linkHref}
                      className="btn button-link w-100"
                      target="_blank"
                    >
                      {project.linkText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyWorkSection;
