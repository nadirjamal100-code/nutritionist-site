import { useState } from "react";
import Container from "../Container/Container";
import Button from "../Button/Button";
import logo from "../../assets/icons/logo.svg";
import promoBanner from "../../assets/Container.svg";
import "./Header.css";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isActiveLink = (href: string) =>
    href === "/"
      ? currentPath === "/"
      : href === "/blog"
        ? currentPath === href || currentPath.startsWith(`${href}/`)
        : currentPath === href;

  return (
    <>
      <div className="promo-banner">
        <a
          href="/contact"
          className="promo-banner__link"
          aria-label="Join Our Personalized Nutrition Demo For Free"
        >
          <img src={promoBanner} alt="" className="promo-banner__art" />
        </a>
      </div>

      <header className="header">
        <Container className="header__inner">
          <a href="/" className="header__logo">
            <img src={logo} alt="Nutritionist" />
          </a>

          <nav className={`header__nav ${isMenuOpen ? "is-open" : ""}`}>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={isActiveLink(link.href) ? "is-active" : ""}
                    aria-current={isActiveLink(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button variant="primary" size="md" className="header__nav-cta" onClick={() => { window.location.href = "/contact"; }}>
              Contact Us
            </Button>
          </nav>

          <button
            className={`header__menu-toggle ${isMenuOpen ? "is-open" : ""}`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </Container>
      </header>
    </>
  );
};

export default Header;
