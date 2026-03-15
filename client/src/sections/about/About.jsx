import SectionContainer from "../../ui/sectioncontainer/SectionContainer";
import SectionHeading from "../../ui/sectionheading/SectionHeading";
import CapabilityCard from "../../ui/capabilitycard/CapabilityCard";
import aboutCapabilities from "../../assets/constants/aboutCapabilities";
import siteConfig from "../../assets/constants/siteConfig";
import "./about.css";

const About = () => {
  const about = siteConfig.about;

  return (
    <SectionContainer id="about">
      <SectionHeading
        eyebrow={about.eyebrow}
        title={about.heading}
        align="left"
      />

      <div className="about-layout">
        <div className="about-content">
          {about.paragraphs.map((paragraph, index) => (
            <p key={`about-paragraph-${index}`} className="about-paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="about-capabilities">
          {aboutCapabilities.map((capability) => (
            <CapabilityCard
              key={capability.id}
              title={capability.title}
              description={capability.description}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
