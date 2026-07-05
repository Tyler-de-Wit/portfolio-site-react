type FormSubmissionOverlayProps = {
  open: boolean;
  title: string;
  result: boolean;
  onClose: () => void;
};

const FormSubmissionOverlay = ({
  open,
  title,
  result,
  onClose,
}: FormSubmissionOverlayProps) => {
  if (!open) return null;

  return (
    <div
      className="form-submission-overlay position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      onClick={onClose}
    >
      <div
        className={`${result ? "bg-success-subtle" : "bg-danger-subtle"} rounded-4 shadow-lg p-5`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>{title}</h2>

        <p>
          {result
            ? "Your message has been sent successfully!"
            : "There was an error sending your message, please try again."}
        </p>

        <div className="text-center">
          <button
            onClick={onClose}
            className="btn button-link mt-2 button-hover-drop"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormSubmissionOverlay;
