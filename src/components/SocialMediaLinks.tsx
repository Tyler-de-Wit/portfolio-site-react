const SocialMediaLinks = () => {
  return (
    <div className="mb-4">
      {/* Email */}
      <a href="mailto:tylerdewitdev@gmail.com">
        <i className="bi bi-envelope fs-4 me-3"></i>
      </a>
      {/* Resume */}
      <a href="" target="_blank">
        <i className="bi bi-file-person fs-4 me-3"></i>
      </a>
      {/* Linkedin */}
      <a
        href="https://www.linkedin.com/in/tyler-de-wit-998976390/"
        target="_blank"
      >
        <i className="bi bi-linkedin fs-4 me-3"></i>
      </a>
      {/* Github */}
      <a href="https://github.com/Tyler-de-Wit" target="_blank">
        <i className="bi bi-github fs-4 me-3"></i>
      </a>
    </div>
  );
};

export default SocialMediaLinks;
