import Button from "../../components/Button/Button";
import heroImage from "../../assets/images/hero.png";
import avatar1 from "../../assets/images/avatar-hero-1.png";
import avatar2 from "../../assets/images/avatar-hero-2.png";
import avatar3 from "../../assets/images/avatar-hero-3.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <div className="hero__visual">
          <img src={heroImage} alt="Smiling nutrition coach in a green tank top" />
        </div>

        <div className="hero__content">
          <p className="hero__eyebrow">
            Transform Your <span aria-hidden="true">❤️</span> Health with
          </p>
          <h1>
            Personalized Nutrition
            <br />
            Coaching
          </h1>
          <p className="text-lg hero__description">
            Welcome to Nutritionist, your partner in achieving optimal health
            through personalized nutrition coaching. Our certified
            nutritionists are here to guide you on your weight loss journey,
            providing customized plans and ongoing support. Start your
            transformation today and experience the power of personalized
            nutrition coaching.
          </p>
          <div className="hero__actions">
            <Button variant="primary" size="lg">
              Get Starter Today
            </Button>
            <Button variant="secondary" size="lg">
              Book a Demo
            </Button>
          </div>

          <div className="hero__social-proof">
            <div className="hero__avatars">
              <img src={avatar1} alt="" />
              <img src={avatar2} alt="" />
              <img src={avatar3} alt="" />
            </div>
            <p>
              <strong>430+</strong> Happy Customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
