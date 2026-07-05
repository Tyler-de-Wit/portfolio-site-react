import { useState } from "react";
import FormSubmissionOverlay from "./FormSubmissionOverlay.tsx";

type apiData = {
  data: {
    access_key: string;
    email: string;
    files: [];
    message: string;
    name: string;
    service: string;
  };
  message: string;
  success: boolean;
};

const ContactSection = () => {
  const [result, setResult] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [formFieldData, setFormFieldData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  // Handle the contact form submission
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    void submitForm(e);
  };

  // Submit the form to the api
  const submitForm = async (event: {
    preventDefault: () => void;
    target: HTMLFormElement | undefined;
  }) => {
    // Set Variables
    const formData = new FormData(event.target);
    formData.append("access_key", "ab0544e8-80dc-4289-b840-ce22836465ac");

    // Send Data
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    // Receive Data
    const data = (await response.json()) as apiData;

    // Set State
    setShowAlert(true);
    setResult(data.success ? true : false);

    // Reset Form Fields
    if (data.success) {
      setFormFieldData({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    }
  };

  // Handle any input form data
  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormFieldData({ ...formFieldData, [name]: value });
  };

  return (
    <>
      <FormSubmissionOverlay
        open={showAlert}
        title="Form Submission"
        result={result}
        onClose={() => {
          setShowAlert(false);
        }}
      />

      <h2 className="heading-text">Contact Me</h2>
      <form className="mt-4" onSubmit={handleSubmit}>
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
            name="name"
            value={formFieldData.name}
            onChange={handleInputChange}
            required
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
            name="email"
            value={formFieldData.email}
            onChange={handleInputChange}
            required
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
            name="service"
            value={formFieldData.service}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select A Service
            </option>
            <option value="portfolio-website">Portfolio Website</option>
            <option value="personal-blog">Personal Blog</option>
            <option value="domain-name-hosting">Domain Name / Hosting</option>
            <option value="website-seo">Website SEO</option>
            <option value="accessibility-audit">Accessibility Audit</option>
            <option value="other">Other</option>
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
            rows={5}
            name="message"
            value={formFieldData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn button-link button-hover-drop">
          Submit
        </button>
        <p>{result}</p>
      </form>
    </>
  );
};

export default ContactSection;
