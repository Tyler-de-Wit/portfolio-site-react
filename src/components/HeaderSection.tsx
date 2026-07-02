import { useInView } from "react-intersection-observer";

const HeaderSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: 200,
  });

  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-8 mb-4">
            <h1 className="fs-5 m-0">Hi , I'm Tyler</h1>
            <h2 className="fs-1 mb-3">Front and Back-end Web Developer</h2>
            <p>
              I am a young web developer who has skills in both front-end and
              back-end. I am always looking to learn new things whether that be
              a framework, language, skill or project.
            </p>
            <a
              href="#my-work"
              className="btn button-link me-2 button-hover-drop"
            >
              View My Work
            </a>
            <a href="#contact" className="btn button-link-2 button-hover-drop">
              Contact Me
            </a>
          </div>
          <div
            className={`col-12 col-lg-4 mb-4 ${inView ? "fade-in-right" : "invisible"}`}
            ref={ref}
          >
            <img
              src="https://placehold.co/400x500"
              width="400"
              height="500"
              alt="Face card"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
