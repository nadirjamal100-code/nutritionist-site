import { FormEvent, useState } from "react";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import mailIcon from "../../assets/icons/icon-mail.svg";
import phoneIcon from "../../assets/icons/icon-phone.svg";
import pinIcon from "../../assets/icons/icon-pin.svg";
import "./ContactPage.css";

const ContactPage = () => {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const body = `${String(form.get("message") ?? "")}\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}`;
    const subject = `Contact request from ${name}`;
    window.location.href = `mailto:hello@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <Header />
      <main className="contact-page">
        <Container className="contact-page__container">
          <section className="contact-overview" aria-labelledby="contact-title">
            <div className="contact-overview__intro">
              <div className="contact-overview__pattern" aria-hidden="true" />
              <div className="contact-overview__badge" aria-hidden="true"><span /><span /><span /><span /></div>
              <h1 id="contact-title">Contact Us</h1>
              <p>We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please don't hesitate to reach out to us using any of the following contact methods</p>
            </div>
            <div className="contact-methods">
              <a className="contact-method" href="mailto:hello@example.com"><img src={mailIcon} alt="" /><span>hello@example.com</span></a>
              <a className="contact-method" href="tel:+910000000000"><img src={phoneIcon} alt="" /><span>+91 00000 00000</span></a>
              <div className="contact-method"><img src={pinIcon} alt="" /><span>Some Where in the World</span></div>
            </div>
          </section>

          <section className="contact-form-card" aria-label="Send us a message">
            {sent ? (
              <div className="contact-form__thank-you" role="status" aria-live="polite">
                <h2>Thank You!</h2>
                <p>Thank you for reaching out. Your email app should open with your message ready to send.</p>
              </div>
            ) : <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <label>Full Name<input name="name" type="text" placeholder="Enter your Name" required /></label>
                <label>Email<input name="email" type="email" placeholder="Enter your Email" required /></label>
              </div>
              <label>Phone Number<input name="phone" type="tel" placeholder="Enter your Number" /></label>
              <label>Message<textarea name="message" placeholder="Enter your Message" maxLength={250} value={message} onChange={(event) => setMessage(event.target.value)} required /></label>
              <div className="contact-form__count" aria-live="polite">{message.length}/250 characters</div>
              <button className="contact-form__submit" type="submit">Send Message</button>
            </form>}

            <div className="contact-map-column">
              <div className="contact-map" role="img" aria-label="Map showing our location">
                <svg className="contact-map__roads" viewBox="0 0 560 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                  <g fill="none" stroke="#21473b" strokeWidth="5" opacity=".9">
                    <path d="M-20 112 60 140l48-20 75 34 42-9 47 46 66 20 80-30 58 34 90-20"/><path d="M-10 315 86 260l68 14 59-47 83 28 50-44 93 18 130-84"/><path d="M44-12 80 78l-16 67 48 92-20 79 58 117M210-20l-38 106 53 69-15 79 59 62 18 103M420-20l-28 105 42 68-30 68 59 90-8 109"/>
                    <path d="m-8 188 120-23 56 44 54-23 42 49 76-33 48 45 86-49 94 18M15 375l108-47 52-39 89 20 41-32 74 44 73-6 124-61" strokeWidth="2.5"/><path d="m-20 58 80 54 74-12 54 50 66-26 70 45 52-18 71 49 112-38M100-20l38 83-28 50 39 61-11 82 70 46 33 84" strokeWidth="2.5"/><path d="m280-10 42 58-31 50 65 43-12 60 78 41-32 74 73 53 14 79" strokeWidth="2.5"/>
                  </g>
                  <g fill="none" stroke="#2b5d4b" strokeWidth="2"><path d="m0 240 80-18 32 30-38 37 45 53 58-30 35 45 72-4 33-39 63 9 49-46 45 9 50-43"/><path d="m60 0 46 45-20 36 52 20 16 54-30 47 45 31m-4-190 34 40-10 55 45 34 18 57m160-153-40 47 34 37-24 55 49 24m-49 15-21 47 35 30-23 75m-180-53 35-40-20-48 52-29"/></g>
                </svg>
                <span className="contact-map__route" aria-hidden="true" />
                <span className="contact-map__pin" aria-hidden="true"><img src={pinIcon} alt="" /></span>
                <span className="contact-map__dot" aria-hidden="true" />
              </div>
              <div className="contact-socials" aria-label="Social media links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4z" /></svg></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 5.9a8 8 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.3 8.3 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.8 11.9 11.9 0 0 1-8.6-4.4 4.2 4.2 0 0 0 1.3 5.6 4.1 4.1 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2.5 19a11.8 11.8 0 0 0 6.4 1.9c7.7 0 12-6.4 12-12v-.5A8.5 8.5 0 0 0 23 6.2a8 8 0 0 1-2.3.6L22 5.9z" /></svg></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zM3.6 8.5h3.2v11H3.6v-11zm5.2 0h3.1V10h.1a3.4 3.4 0 0 1 3.1-1.7c3.3 0 3.9 2.1 3.9 4.8v6.4h-3.2v-5.7c0-1.4 0-3.1-1.9-3.1s-2.1 1.5-2.1 3v5.8H8.8v-11z" /></svg></a>
              </div>
            </div>
          </section>

          <section className="contact-cta">
            <div className="contact-cta__copy">
              <h2>Are you ready to embark on a transformative journey towards better health and wellness?</h2>
              <p>Join us at Nutritionist and let us guide you on the path to a healthier and happier you.</p>
            </div>
            <a className="contact-cta__button" href="/pricing">Join Us Now</a>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
