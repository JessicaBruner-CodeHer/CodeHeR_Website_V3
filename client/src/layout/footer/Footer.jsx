import navLinks from "@/assets/constants/navLinks";
import siteConfig from "@/assets/constants/siteConfig";
import "./footer.css";

const Footer = () => {
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

        <div className="footer-meta">
          <h4 className="footer-heading">
            Contact
          </h4>

          <p className="footer-meta-text">
            {siteConfig.business.email}
          </p>

          <p className="footer-meta-text">
            {siteConfig.business.location}
          </p>
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