import Button from "@/ui/button/Button";
import siteConfig from "@/assets/constants/siteConfig";
import "./projectcta.css";

const ProjectCta = ({ onQuoteClick }) => {
  return (
    <section className="project-cta">
      <div className="site-container">
        <div className="project-cta-card">
          <div className="project-cta-content">
            <span className="project-cta-eyebrow">
              Start Your Project
            </span>

            <h2 className="project-cta-title">
              Ready to build, rebuild, or improve your website?
            </h2>

            <p className="project-cta-text">
              Request a quote to start planning a website solution that fits your business goals and long-term growth.
            </p>
          </div>

          <div className="project-cta-action">
            <Button
              variant="primary"
              label={siteConfig.navigation.ctaLabel}
              onClick={onQuoteClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCta;