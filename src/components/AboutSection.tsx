import SocialMediaLinks from "./SocialMediaLinks";
import { useInView } from "react-intersection-observer";

const useInViewOptions = {
  triggerOnce: true,
  threshold: 0.2,
  delay: 200,
};

const AboutSection = () => {
  const { ref: refFrameworks, inView: inViewFrameworks } =
    useInView(useInViewOptions);
  const { ref: refLanguages, inView: inViewLanguages } =
    useInView(useInViewOptions);
  const { ref: refTools, inView: inViewTools } = useInView(useInViewOptions);
  const { ref: refSkills, inView: inViewSkills } = useInView(useInViewOptions);

  return (
    <>
      <div className="container mt-5 mb-4">
        <div className="row g-5 align-items-center">
          <div className="col-12 col-lg-6 mb-4">
            <div className="row">
              <div
                className={`col-12 col-lg-6 ${inViewFrameworks ? "fade-in-top" : "invisible"}`}
                ref={refFrameworks}
              >
                {/* Frameworks / Libraries */}
                <h2 className="fs-4 heading-text">Frameworks / Libraries</h2>
                <ul className="list-group mb-4">
                  <li className="list-group-item list-group-item-action card-background thin-border text-next">
                    <i className="bi bi-filetype-js me-3 text-next"></i>
                    Next.js
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border text-react">
                    <i className="bi bi-filetype-js me-3 text-react"></i>
                    React
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border text-laravel">
                    <i className="bi bi-filetype-php me-3 text-laravel"></i>
                    Laravel
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border text-wordpress">
                    <i className="bi bi-filetype-php me-3 text-wordpress"></i>
                    WordPress
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border text-bootstrap">
                    <i className="bi bi-filetype-css me-3 text-bootstrap"></i>
                    Bootstsrap
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border text-sass">
                    <i className="bi bi-filetype-css me-3 text-sass"></i>
                    SASS
                  </li>
                </ul>
              </div>
              <div
                className={`col-12 col-lg-6 ${inViewLanguages ? "fade-in-top" : "invisible"}`}
                ref={refLanguages}
              >
                {/* Languages */}
                <h2 className="fs-4 heading-text">Languages</h2>
                <ul className="list-group mb-4">
                  <li className="list-group-item list-group-item-action card-background thin-border text-js">
                    <i className="bi bi-javascript me-3 text-js"></i>
                    JavaScript
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border text-ts">
                    <i className="bi bi-typescript me-3 text-ts"></i>
                    TypeScript
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border text-php">
                    <i className="bi bi-filetype-php me-3 text-php"></i>PHP
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border text-css">
                    <i className="bi bi-css me-3 text-css"></i>CSS
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border text-html">
                    <i className="bi bi-filetype-html me-3 text-html"></i>
                    HTML
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border text-xml">
                    <i className="bi bi-filetype-xml me-3 text-xml"></i>XML
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div
                className={`col-12 col-lg-6 ${inViewTools ? "fade-in-top" : "invisible"}`}
                ref={refTools}
              >
                {/* Tools */}
                <h2 className="fs-4 heading-text">Tools</h2>
                <ul className="list-group mb-4">
                  <li className="list-group-item list-group-item-action card-background thin-border body-text">
                    <i className="bi bi-git me-3"></i>Git
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border body-text">
                    <i className="bi bi-easel me-3"></i>Figma
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border body-text">
                    <i className="bi bi-camera me-3"></i>Photoshop
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border body-text">
                    <i className="bi bi-filetype-json me-3"></i>Postman
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border body-text">
                    <i className="bi bi-filetype-js me-3"></i>Vercel
                  </li>
                </ul>
              </div>
              <div
                className={`col-12 col-lg-6 ${inViewSkills ? "fade-in-top" : "invisible"}`}
                ref={refSkills}
              >
                {/* Soft Skills */}
                <h2 className="fs-4 heading-text">Soft Skills</h2>
                <ul className="list-group mb-4">
                  <li className="list-group-item list-group-item-action card-background thin-border body-text">
                    <i className="bi bi-alarm me-3"></i>Efficient Time
                    Management
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border body-text">
                    <i className="bi bi-person me-3"></i>Strong Leadership
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border body-text">
                    <i className="bi bi-people me-3"></i>Collaborative Teamwork
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border body-text">
                    <i className="bi bi-gear me-3"></i>Effective Organisation
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border body-text">
                    <i className="bi bi-chat me-3"></i>Consistent Communication
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <h2 className="fs-6 m-0 heading-text">Who am I?</h2>
            <h3 className="fs-1 mb-3 heading-text">
              Web Development Freelancer
            </h3>
            <p className="text-justify body-text">
              I have a passion for creating pleasurable front-end layouts that
              are largely focused on UX and Accessibility. As well as functional
              back-end systems that help you achieve your goals. Some of my
              other hobbies include photography, guitars, music and aviation
              which I like to spend my free time indulging in.
            </p>
            <p className="text-justify body-text">
              In the 3 years after graduating high school I have been working
              towards a full stack certification at North Metropolitan TAFE. The
              qualifications that I have completed during this time include the:
              <ul>
                <li>
                  Certificate IV in Information Technology (Web Development)
                </li>
                <li>
                  Diploma of Information Technology (Front End Web Development)
                </li>
                <li>
                  Diploma of Information Technology (Back End Web Development)
                </li>
              </ul>
            </p>
            <p className="text-justify body-text">
              I can set up a personal blog site for you to document your
              interests. I can create a personal portfolio site just like this
              one, to showcase your skills to the world. I can create a
              fullstack application with authenticated users to help you run a
              business or complete tasks. I always enjoy learning and creating
              new things so feel free to get in touch and i'll do my best to
              fulfill your ideas.
            </p>
            <p className="secondary-text">
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
