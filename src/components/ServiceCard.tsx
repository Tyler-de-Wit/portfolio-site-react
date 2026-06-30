import { useInView } from "react-intersection-observer";

interface ServiceCardProps {
  service: {
    id: number;
    icon: string;
    title: string;
    text: string;
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: 200,
  });

  return (
    <div
      className={`card mt-4 mb-4 card-background thin-border ${
        inView ? "fade-in-left" : "invisible"
      }`}
      ref={ref}
    >
      <div className="card-body">
        <i className={`${service.icon} heading-text`}></i>
        <h3 className="card-title fs-5 d-inline heading-text">
          {service.title}
        </h3>
        <p className="card-text body-text">{service.text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
