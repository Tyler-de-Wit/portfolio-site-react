import SocialMediaLinks from "./SocialMediaLinks";

const AboutSection = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="row g-5 align-items-center">
          <div className="col-12 col-lg-6 mb-4">
            <div className="row">
              <div className="col-12 col-lg-6">
                {/* Frameworks / Libraries */}
                <h2 className="fs-4">Frameworks / Libraries</h2>
                <ul className="list-group mb-4">
                  <li className="list-group-item list-group-item-secondary list-group-item-action fs-5">
                    <i className="bi bi-filetype-js me-3 fs-5"></i>
                    Next.js
                  </li>
                  <li className="list-group-item list-group-item-action fs-5">
                    <i className="bi bi-filetype-js me-3 fs-5"></i>React
                  </li>
                  <li className="list-group-item list-group-item-secondary list-group-item-action fs-5">
                    <i className="bi bi-filetype-php me-3 fs-5"></i>Laravel
                  </li>
                  <li className="list-group-item list-group-item-action fs-5">
                    <i className="bi bi-filetype-php me-3 fs-5"></i>WordPress
                  </li>
                  <li className="list-group-item list-group-item-secondary list-group-item-action fs-5">
                    <i className="bi bi-filetype-css me-3 fs-5"></i>Bootstsrap
                  </li>
                  <li className="list-group-item list-group-item-action fs-5">
                    <i className="bi bi-filetype-css me-3 fs-5"></i>SASS
                  </li>
                </ul>
              </div>
              <div className="col-12 col-lg-6">
                {/* Languages */}
                <h2 className="fs-4">Languages</h2>
                <ul className="list-group mb-4">
                  <li className="list-group-item list-group-item-secondary list-group-item-action fs-5">
                    <i className="bi bi-javascript me-3 fs-5"></i>JavaScript
                  </li>
                  <li className="list-group-item list-group-item-action fs-5">
                    <i className="bi bi-typescript me-3 fs-5"></i>TypeScript
                  </li>
                  <li className="list-group-item list-group-item-secondary list-group-item-action fs-5">
                    <i className="bi bi-filetype-php me-3 fs-5"></i>PHP
                  </li>
                  <li className="list-group-item list-group-item-action fs-5">
                    <i className="bi bi-css me-3 fs-5"></i>CSS
                  </li>
                  <li className="list-group-item list-group-item-secondary list-group-item-action fs-5">
                    <i className="bi bi-filetype-html me-3 fs-5"></i>HTML
                  </li>
                  <li className="list-group-item list-group-item-action fs-5">
                    <i className="bi bi-filetype-xml me-3 fs-5"></i>XML
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-6">
                {/* Tools */}
                <h2 className="fs-4">Tools</h2>
                <ul className="list-group mb-4">
                  <li className="list-group-item list-group-item-secondary list-group-item-action">
                    <i className="bi bi-git me-3"></i>Git
                  </li>
                  <li className="list-group-item list-group-item-action">
                    <i className="bi bi-easel me-3"></i>Figma
                  </li>
                  <li className="list-group-item list-group-item-secondary list-group-item-action">
                    <i className="bi bi-camera me-3"></i>Photoshop
                  </li>
                  <li className="list-group-item list-group-item-action">
                    <i className="bi bi-filetype-json me-3"></i>Postman
                  </li>
                  <li className="list-group-item list-group-item-secondary list-group-item-action">
                    <i className="bi bi-filetype-js me-3"></i>Vercel
                  </li>
                </ul>
              </div>
              <div className="col-12 col-lg-6">
                {/* Soft Skills */}
                <h2 className="fs-4">Soft Skills</h2>
                <ul className="list-group mb-4">
                  <li className="list-group-item list-group-item-secondary list-group-item-action">
                    <i className="bi bi-alarm me-3"></i>Efficient Time
                    Management
                  </li>
                  <li className="list-group-item list-group-item-action">
                    <i className="bi bi-person me-3"></i>Strong Leadership
                  </li>
                  <li className="list-group-item list-group-item-secondary list-group-item-action">
                    <i className="bi bi-people me-3"></i>Collaborative Teamwork
                  </li>
                  <li className="list-group-item list-group-item-action">
                    <i className="bi bi-gear me-3"></i>Effective Organisation
                  </li>
                  <li className="list-group-item list-group-item-secondary list-group-item-action">
                    <i className="bi bi-chat me-3"></i>Consistent Communication
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <h2 className="fs-6 m-0">Who am I?</h2>
            <h3 className="fs-1 mb-3">Web Development Freelancer</h3>
            <p>
              I have a passion for creating pleasurable front-end layouts that
              are largely focused on UX and Accessibility. As well as functional
              back-end systems that help you achieve your goals. I also enjoy
              photography as a hobby and taking professional photos for your
              website.
            </p>
            <p>
              <strong>Email:</strong> tylerdewitdev@gmail.com
            </p>
            <SocialMediaLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
