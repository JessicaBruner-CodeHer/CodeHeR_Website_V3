import { useState } from "react";
import navLinks from "@/assets/constants/navLinks";
import siteConfig from "@/assets/constants/siteConfig";
import Button from "@/ui/button/Button";
import "./footer.css";


const Navbar = ({ onQuoteClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="site-container navbar-inner">
        <div className="navbar-brand">
          {siteConfig.brand.name}
        </div>

        <nav className={`navbar-links ${menuOpen ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="navbar-link"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <Button
            variant="quote"
            label={siteConfig.navigation.ctaLabel}
            onClick={onQuoteClick}
          />

          <button
            className="navbar-toggle"
            onClick={handleToggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggle-bar"></span>
            <span className="navbar-toggle-bar"></span>
            <span className="navbar-toggle-bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
