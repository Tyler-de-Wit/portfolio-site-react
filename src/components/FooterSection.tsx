import SocialMediaLinks from "./SocialMediaLinks";

const currentYear: number = new Date().getFullYear();

const FooterSection = () => {
  return (
    <>
      <div className="container">
        <div className="row gx-5 gy-4">
          <div className="col-12 col-lg-6 mb-4">
            <img
              src="https://placehold.co/30x30"
              width="30"
              height="30"
              className="d-inline-block align-top mb-2"
              alt="Site Logo"
            />
            <p className="text-light">
              I have a passion for creating pleasurable front-end layouts that
              are largely focused on UX and Accessibility. As well as functional
              back-end systems that help you achieve your goals. I also enjoy
              photography as a hobby and taking professional photos for your
              website.
            </p>
            <SocialMediaLinks />
            <a className="button-link" href="#header">
              Back To Top
            </a>
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <h2 className="fs-5 text-light">Quick Links</h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#about">About</a>
              </li>
              <li className="mb-2">
                <a href="#my-work">My Work</a>
              </li>
              <li className="mb-2">
                <a href="#services">Services</a>
              </li>
              <li className="mb-2">
                <a href="#contact">Contact</a>
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
