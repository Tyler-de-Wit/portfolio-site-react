import serviceCards from "../data/serviceCards";

const ServicesSection = () => {
  return (
    <>
      <h2>Services</h2>
      {serviceCards.map((service) => (
        <div
          className="card mt-4 mb-4 card-background thin-border"
          key={service.id}
        >
          <div className="card-body">
            <i className={`${service.icon} heading-text`}></i>
            <h3 className="card-title fs-5 d-inline heading-text">
              {service.title}
            </h3>
            <p className="card-text body-text">{service.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServicesSection;
