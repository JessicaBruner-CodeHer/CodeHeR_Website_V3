import SectionContainer from "@/ui/sectioncontainer/SectionContainer";
import SectionHeading from "@/ui/sectionheading/SectionHeading";

import FlipCard from "@/ui/flipcard/FlipCard";

import servicesData from "@/assets/constants/serviceData";
import siteConfig from "@/assets/constants/siteConfig";
import "./services.css";


const Services = () => {
  const servicesSection = siteConfig.services;

  return (
    <SectionContainer id="services">

      <SectionHeading
        eyebrow={servicesSection.eyebrow}
        title={servicesSection.heading}
        description={servicesSection.description}
      />

      <div className="services-grid">
        {servicesData.map((service) => (
          <FlipCard
            key={service.id}
            title={service.title}
            summary={service.summary}
            description={service.description}
            price={service.price}
          />
        ))}
      </div>

    </SectionContainer>
  );
};

export default Services;
