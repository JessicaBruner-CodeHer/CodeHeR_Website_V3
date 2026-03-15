import navLinks from "../../assets/constants/navLinks";
import siteConfig from "../../assets/constants/siteConfig";
import Button from "../../ui/button/Button";
import "./footer.css";

const Footer = ({ onQuoteClick }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="site-container footer-inner">

        <div className="footer-brand">
          <div className="footer-logo">
            {siteConfig.brand.name}
          </div>

          <p className="footer-description">
            {siteConfig.brand.tagline}
          </p>
        </div>

        <div className="footer-navigation">
          <h4 className="footer-heading">
            Navigation
          </h4>

          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} className="footer-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-cta">
          <h4 className="footer-heading">
            Start a Project
          </h4>

          <p className="footer-cta-text">
            Request a quote to begin planning your website project.
          </p>

          <Button
            variant="primary"
            label={siteConfig.navigation.ctaLabel}
            onClick={onQuoteClick}
          />
        </div>

      </div>

      <div className="footer-bottom">
        <div className="site-container footer-bottom-inner">
          <span>
            © {year} {siteConfig.brand.name}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
