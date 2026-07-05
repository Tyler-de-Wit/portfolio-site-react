import SocialMediaLinks from "./SocialMediaLinks";

const currentYear: number = new Date().getFullYear();

const FooterSection = () => {
  return (
    <>
      <div className="container">
        <div className="row gx-5 gy-4">
          <div className="col-12 col-lg-6 mb-4">
            <img
              src="/tdw-logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top mb-2"
              alt="Site Logo"
            />
            <p className="text-light text-justify">
              This site is my personal portfolio where I am showcasing all of my
              previous projects along with my skillset and the services that I
              offer. Feel free to check out some of my current live sites in the{" "}
              <a href="#my-work" className="link-text">
                My Work
              </a>{" "}
              section or contact me in the{" "}
              <a href="#contact" className="link-text">
                Contact
              </a>{" "}
              section. You can also view my{" "}
              <a href="" className="link-text">
                resume
              </a>{" "}
              here.
            </p>
            <SocialMediaLinks />
            <a className="btn button-link button-hover-drop" href="#header">
              Back To Top
            </a>
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <h2 className="fs-5 text-light">Quick Links</h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#about" className="link-text">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#my-work" className="link-text">
                  My Work
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="link-text">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="link-text">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="text-light" />
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-light">
              &copy; {currentYear} Tyler de Wit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
