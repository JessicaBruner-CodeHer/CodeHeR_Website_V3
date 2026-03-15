import SectionContainer from "../../ui/sectioncontainer/SectionContainer";
import siteConfig from "../../assets/constants/siteConfig";
import "./truststrip.css";

const TrustStrip = () => {
  const trust = siteConfig.truststrip;

  return (
    <SectionContainer className="trust-strip section-shell--compact">
      <div className="trust-strip-inner">

        <div className="trust-strip-text">
          <h3 className="trust-strip-heading">
            {trust.heading}
          </h3>

          <p className="trust-strip-description">
            {trust.description}
          </p>
        </div>

        <div className="trust-strip-items">
          {trust.items.map((item, index) => (
            <div key={index} className="trust-pill">
              {item}
            </div>
          ))}
        </div>

      </div>
    </SectionContainer>
  );
};

export default TrustStrip;
