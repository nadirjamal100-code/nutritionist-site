import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import avatarJennifer from "../../assets/images/avatar-jennifer-anderson.png";
import avatarRobert from "../../assets/images/avatar-robert-johnson.png";
import avatarEmilyDavis from "../../assets/images/avatar-emily-davis.png";
import "./Testimonials.css";

interface Testimonial {
  quote: string;
  name: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
    name: "Jennifer Anderson",
    avatar: avatarJennifer,
  },
  {
    quote:
      "Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",
    name: "Robert Johnson",
    avatar: avatarRobert,
  },
  {
    quote:
      "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
    name: "Emily Davis",
    avatar: avatarEmilyDavis,
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <Container>
        <SectionHeading
          title="Our Testimonials"
          description="Our satisfied clients share their success stories and experiences on their journey to better health and well-being."
        />

        <div className="testimonials__slider" aria-live="polite">
          {TESTIMONIALS.map((_, i) => {
            const t = TESTIMONIALS[(i + active) % TESTIMONIALS.length];
            return (
            <article className="testimonial-card" key={t.name}>
              <div className="testimonial-card__content">
              <span className="testimonial-card__quote-mark" aria-hidden="true">
                “
              </span>
              <p className="testimonial-card__quote">{t.quote}</p>
              </div>
              <div className="testimonial-card__person">
                <img src={t.avatar} alt="" />
                <h4>{t.name}</h4>
              </div>
            </article>
          );
          })}
        </div>

        <div className="testimonials__controls">
          <button
            aria-label="Previous testimonial"
            onClick={() => setActive((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1))}
          >
            ‹
          </button>
          <div className="testimonials__dots">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                className={i === active ? "is-active" : ""}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === active ? "true" : undefined}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            onClick={() => setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1))}
          >
            ›
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
