import serviceCards from "../data/serviceCards";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <>
      <h2
        className="text-shadow-small
      "
      >
        Services
      </h2>

      {serviceCards.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </>
  );
};

export default ServicesSection;
