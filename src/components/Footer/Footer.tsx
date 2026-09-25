import Container from "../Container/Container";
import logo from "../../assets/icons/logo.svg";
import mailIcon from "../../assets/icons/icon-mail.svg";
import phoneIcon from "../../assets/icons/icon-phone.svg";
import pinIcon from "../../assets/icons/icon-pin.svg";
import "./Footer.css";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isActiveLink = (href: string) =>
    href === "/"
      ? currentPath === "/"
      : href === "/blog"
        ? currentPath === href || currentPath.startsWith(`${href}/`)
        : currentPath === href;

  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <a href="/" className="footer__logo">
            <img src={logo} alt="Nutritionist" />
          </a>

          <nav className="footer__nav">
            <ul>
              {FOOTER_LINKS.map((link) => (
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
          </nav>

          <button className="footer__to-top" onClick={scrollToTop}>
            <span>Got To Top</span>
            <span className="footer__to-top-icon" aria-hidden="true">
              ↑
            </span>
          </button>
        </div>

        <div className="footer__bottom">
          <div className="footer__contacts">
            <a href="mailto:hello@example.com" className="footer__contact">
              <img src={mailIcon} alt="" />
              hello@example.com
            </a>
            <a href="tel:+910000000000" className="footer__contact">
              <img src={phoneIcon} alt="" />
              +91 00000 00000
            </a>
            <span className="footer__contact">
              <img src={pinIcon} alt="" />
              Somewhere in the World
            </span>
          </div>

          <div className="footer__legal">
            <span className="footer__copyright">
              © 2026 Nutritionist. All rights reserved.
            </span>
            <span className="footer__credit">
              Website Developed By <strong>NADIR JAMAL</strong>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
