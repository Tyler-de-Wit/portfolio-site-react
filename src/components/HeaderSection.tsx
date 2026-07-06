import Navigation from "../components/Navigation";
import headerBackground from "../assets/backgrounds/header-background.png";
import { useInView } from "react-intersection-observer";

const HeaderSection = () => {
  const headerBackgroundStyle = {
    backgroundImage: `url(${headerBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "70vh",
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: 200,
  });

  return (
    <>
      <div style={headerBackgroundStyle}>
        <div className="container">
          <Navigation />
        </div>

        <div className="container h-100 d-flex align-items-center">
          <div className="row align-items-center w-100 mb-5">
            <div className="col-12 col-lg-8 mb-5">
              <h1 className="fs-5 m-0">Hi, I'm Tyler</h1>
              <h2
                className={`fs-1 mb-3 text-shadow-small ${inView ? "fade-in-left" : ""}`}
                ref={ref}
              >
                Front and Back-end Web Developer
              </h2>
              <p>
                I am a young and eager web developer who has skills and
                qualifications in both front-end and back-end. I am always
                looking to learn new things and undertake challenges. Check out
                some of my previous projects below or contact me to discuss an
                opportunity.
              </p>
              <a
                href="#my-work"
                className="btn button-link me-2 button-hover-drop"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="btn button-link-2 button-hover-drop"
              >
                Contact Me
              </a>
            </div>
            <div className="col-12 col-lg-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
