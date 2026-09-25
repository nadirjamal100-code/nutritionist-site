import { useState } from "react";
import Container from "../../components/Container/Container";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Button from "../../components/Button/Button";
import "./Pricing.css";

interface Plan {
  name: string;
  subtitle: string;
  description: string;
  price: number;
}

const PLANS: Plan[] = [
  {
    name: "Basic Plan",
    subtitle: "Up to 50% off on Yearly Plan",
    description:
      "Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.",
    price: 49,
  },
  {
    name: "Premium Plan",
    subtitle: "Up to 50% off on Yearly Plan",
    description:
      "Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.",
    price: 79,
  },
  {
    name: "Ultimate Plan",
    subtitle: "Up to 50% off on Yearly Plan",
    description:
      "Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.",
    price: 99,
  },
];

const Pricing = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="pricing" id="pricing">
      <Container>
        <SectionHeading
          title="Our Pricing"
          description="We outline our flexible and affordable options to support you on your journey to optimal health and nutrition. We believe that everyone deserves access to personalized nutrition guidance and resources"
        />

        <div className="pricing__toggle-wrap">
          <div className="pricing__toggle">
            <button
              className={billing === "monthly" ? "is-active" : ""}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              className={billing === "yearly" ? "is-active" : ""}
              onClick={() => setBilling("yearly")}
            >
              Yearly
            </button>
          </div>
          <p className="text-small pricing__save">Save 50% on Yearly</p>
        </div>

        <div className="pricing__grid">
          {PLANS.map((plan) => {
            const price =
              billing === "yearly" ? Math.round(plan.price / 2) : plan.price;
            return (
              <article className="pricing-card" key={plan.name}>
                <h3>{plan.name}</h3>
                <p className="text-small pricing-card__subtitle">
                  {plan.subtitle}
                </p>
                <p className="text-muted pricing-card__description">
                  {plan.description}
                </p>
                <p className="pricing-card__price">
                  <span>${price}</span>/month
                </p>
                <Button variant="primary" size="lg" className="pricing-card__cta">
                  Choose Plan
                </Button>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
