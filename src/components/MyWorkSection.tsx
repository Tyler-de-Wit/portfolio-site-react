import projectCards from "../data/projectCards";

const MyWorkSection = () => {
  return (
    <>
      <h2 className="text-center mb-4">My Work</h2>
      <div className="container mb-5">
        <div className="row g-5">
          {projectCards.map((project) => (
            <div className="col-12 col-md-6 col-lg-4" key={project.id}>
              <div className="card h-100">
                <a href={project.linkHref}>
                  <img
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="card-img-top"
                  />
                </a>
                <hr className="m-0" />
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title fs-5">{project.title}</h3>
                  <p className="card-text">{project.text}</p>
                  <a
                    href={project.linkHref}
                    className="btn button-link mt-auto"
                    target="_blank"
                  >
                    {project.linkText}
                  </a>
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
