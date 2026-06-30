const ContactSection = () => {
  return (
    <>
      <h2 className="heading-text">Contact Me</h2>
      <form className="mt-4">
        {/* Name */}
        <div className="mb-3">
          <label
            htmlFor="contactName"
            className="form-label fw-semibold body-text"
          >
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="contactName"
            aria-describedby="nameHelp"
            placeholder="Enter your name"
          />
          <div id="nameHelp" className="form-text secondary-text">
            Only your first name is required.
          </div>
        </div>
        {/* Email */}
        <div className="mb-3">
          <label
            htmlFor="contactEmail"
            className="form-label fw-semibold body-text"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="contactEmail"
            aria-describedby="emailHelp"
            placeholder="Enter your email address"
          />
          <div id="emailHelp" className="form-text secondary-text">
            This is only used to contact you about your enquiry.
          </div>
        </div>
        {/* Service */}
        <div className="mb-3">
          <label
            htmlFor="contactService"
            className="form-label fw-semibold body-text"
          >
            Service
          </label>
          <select
            className="form-select"
            aria-label="Select A Service"
            id="contactService"
          >
            <option selected disabled>
              Select A Service
            </option>
            <option value="1">Service 1</option>
            <option value="2">Service 2</option>
            <option value="3">Service 3</option>
          </select>
        </div>
        {/* Message */}
        <div className="mb-3">
          <label
            htmlFor="contactMessage"
            className="form-label fw-semibold body-text"
          >
            Message
          </label>
          <textarea
            className="form-control"
            aria-label="Write A Message"
          ></textarea>
        </div>
        {/* reCAPTCHA */}
        <div className="mb-3">reCAPTCHA</div>
        <button type="submit" className="button-link">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactSection;
