import "./capabilitycard.css";

const CapabilityCard = ({ title, description }) => {
  return (
    <article className="capability-card">
      <h3 className="capability-card-title">
        {title}
      </h3>

      <p className="capability-card-description">
        {description}
      </p>
    </article>
  );
};

export default CapabilityCard;
