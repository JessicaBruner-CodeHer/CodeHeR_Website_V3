import SectionContainer from "../../ui/sectioncontainer/SectionContainer";
import Button from "../../ui/button/Button";
import siteConfig from "../../assets/constants/siteConfig";
import "./hero.css";

const Hero = ({ onQuoteClick }) => {
  const hero = siteConfig.hero;

  return (
    <SectionContainer id="hero" className="hero-section">
      <div className="hero-content">

        <div className="hero-eyebrow">
          {hero.eyebrow}
        </div>

        <h1 className="hero-heading">
          {hero.heading}
        </h1>

        <p className="hero-description">
          {hero.description}
        </p>

        <div className="hero-actions">
          <Button
            variant="primary"
            label={hero.primaryCtaLabel}
            onClick={onQuoteClick}
          />

          <Button
            variant="secondary"
            label={hero.secondaryCtaLabel}
            href={hero.secondaryCtaHref}
          />
        </div>

      </div>
    </SectionContainer>
  );
};

export default Hero;
