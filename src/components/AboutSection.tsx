import SocialMediaLinks from "./SocialMediaLinks";
import { useInView } from "react-intersection-observer";
import bootstrapIcon from "../assets/icons/bootstrap.svg";
import cssIcon from "../assets/icons/css.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import nextjsIcon from "../assets/icons/nextjs.svg";
import phpIcon from "../assets/icons/php.svg";
import reactIcon from "../assets/icons/react.svg";
import sassIcon from "../assets/icons/sass.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import wordpressIcon from "../assets/icons/wordpress.svg";
import htmlIcon from "../assets/icons/html.svg";
import laravelIcon from "../assets/icons/laravel.svg";
import xmlIcon from "../assets/icons/xml.svg";

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
                    <img
                      src={nextjsIcon}
                      width={25}
                      height={25}
                      className="mb-1 me-3"
                    />
                    Next.js
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border text-react">
                    <img
                      src={reactIcon}
                      width={25}
                      height={25}
                      className="mb-1 me-3"
                    />
                    React
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border text-laravel">
                    <img
                      src={laravelIcon}
                      width={25}
                      height={25}
                      className="mb-1 me-3"
                    />
                    Laravel
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border text-wordpress">
                    <img
                      src={wordpressIcon}
                      width={25}
                      height={25}
                      className="mb-1 me-3"
                    />
                    WordPress
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border text-bootstrap">
                    <img
                      src={bootstrapIcon}
                      width={25}
                      height={25}
                      className="mb-1 me-3"
                    />
                    Bootstsrap
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border text-sass">
                    <img
                      src={sassIcon}
                      width={25}
                      height={25}
                      className="mb-1 me-3"
                    />
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
                    <img
                      src={javascriptIcon}
                      width={25}
                      height={25}
                      className="mb-1 me-3"
                    />
                    JavaScript
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border text-ts">
                    <img
                      src={typescriptIcon}
                      width={25}
                      height={25}
                      className="mb-1 me-3"
                    />
                    TypeScript
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border text-php">
                    <img
                      src={phpIcon}
                      width={25}
                      height={25}
                      className="mb-1 me-3"
                    />
                    PHP
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border text-css">
                    <img
                      src={cssIcon}
                      width={25}
                      height={25}
                      className="mb-1 me-3"
                    />
                    CSS
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border text-html">
                    <img
                      src={htmlIcon}
                      width={25}
                      height={25}
                      className="mb-1 me-3"
                    />
                    HTML
                  </li>
                  <li className="list-group-item list-group-item-action card-background thin-border text-xml">
                    <img
                      src={xmlIcon}
                      width={25}
                      height={25}
                      className="mb-1 me-3"
                    />
                    XML
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
            </p>
            <ul className="body-text">
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
