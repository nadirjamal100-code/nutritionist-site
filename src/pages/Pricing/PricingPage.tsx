import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import processMark from "../../assets/icons/process-mark.svg";
import "./PricingPage.css";

const plans = [
  {
    name: "Basic Plan",
    price: 49,
    opening: "Personalized nutrition plans tailored to your goals and dietary preferences.",
    features: [
      "Access to our mobile app for convenient meal tracking and progress monitoring.",
      "Email support to address your questions and concerns.",
      "Regular check-ins with a dedicated nutritionist to review your progress and provide guidance.",
    ],
  },
  {
    name: "Premium Plan",
    price: 79,
    opening: "All the features included in the Basic Plan.",
    features: [
      "One-on-one video consultations with your dedicated nutritionist for more personalized guidance and support.",
      "Recipe recommendations and meal planning assistance.",
      "Priority email support for quicker responses to your inquiries.",
      "Educational resources and guides to deepen your understanding of nutrition and healthy habits.",
    ],
  },
  {
    name: "Ultimate Plan",
    price: 99,
    opening: "All the features included in the Plus Plan.",
    features: [
      "Unlimited access to video consultations with your dedicated nutritionist for ongoing support and accountability.",
      "Advanced progress tracking tools to monitor your weight, body measurements, and fitness goals.",
      "Customized meal plans and recipe suggestions based on your preferences and nutritional needs.",
      "Priority email and phone support for immediate assistance.",
    ],
    note: "The Premium Plan is designed for individuals who are committed to achieving significant results and require the highest level of support and personalization.",
  },
];

const comparison = [
  ["Personalized Nutrition Plan", true, true, true],
  ["Mobile App Access", true, true, true],
  ["Email Support", true, true, true],
  ["One-on-One Video Consultations", false, true, true],
  ["Recipe Recommendations and Meal Planning", false, true, true],
  ["Priority Support", false, true, true],
  ["Educational Resources and Guides", false, true, true],
  ["Advanced Progress Tracking Tools", false, false, true],
  ["Customized Meal Plans and Recipe Suggestions", false, false, true],
  ["Phone Support", false, false, true],
] as const;

const faqs = [
  { question: "What is personalized nutrition coaching?", answer: "Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness." },
  { question: "How can nutrition coaching help me lose weight?", answer: "Your nutritionist will help you build a practical eating plan around your needs, then support you with regular check-ins and adjustments as your habits and goals change." },
  { question: "Can I still enjoy my favorite foods while on a nutrition plan?", answer: "Yes. Your plan is tailored to your preferences and lifestyle, and your nutritionist will help you make balanced choices while still enjoying the foods you love." },
  { question: "How often will I have contact with my nutritionist?", answer: "Your plan includes regular check-ins. Premium and Ultimate members also receive one-on-one video consultations and additional support." },
  { question: "How long will it take to see results?", answer: "Everyone's journey is different. Your nutritionist will help you set realistic goals, track your progress, and make adjustments that support lasting change." },
  { question: "Are the meal plans and recipes provided suitable for vegetarians or vegans?", answer: "Absolutely. Share your dietary preferences and requirements during your consultation so your nutrition plan and recipes can be tailored to you." },
];

const PricingPage = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState(0);
  return <>
    <Header />
    <main className="pricing-page">
      <Container>
        <section className="pricing-page__intro">
          <div className="pricing-page__mark" aria-hidden="true"><span/><span/><span/><span/></div>
          <h1>Our Pricing</h1>
          <p>At Nutritionist, we offer flexible pricing options to accommodate your unique requirements and budget. Our goal is to provide you with exceptional personalized nutrition coaching that is accessible and tailored to your needs. Choose from our three plans below and take the first step towards a healthier lifestyle.</p>
        </section>

        <section className="pricing-page__plans" aria-label="Choose a pricing plan">
          <div className="pricing-page__billing" role="group" aria-label="Billing frequency">
            <div className="pricing-page__billing-toggle">
              <button type="button" aria-pressed={billing === "monthly"} className={billing === "monthly" ? "is-active" : ""} onClick={() => setBilling("monthly")}>Monthly</button>
              <button type="button" aria-pressed={billing === "yearly"} className={billing === "yearly" ? "is-active" : ""} onClick={() => setBilling("yearly")}>Yearly</button>
            </div>
            <p>Save 50% on Yearly</p>
          </div>
          <div className="pricing-page__plan-grid">
            {plans.map((plan) => <article className="pricing-plan" key={plan.name}>
              <h2>{plan.name}</h2>
              <p className="pricing-plan__subtitle">Up to 50% off on Yearly Plan</p>
              <div className="pricing-plan__features">
                <p>{plan.opening}</p>
                {plan.features.map((feature) => <p key={feature}>{feature}</p>)}
              </div>
              {plan.note && <p className="pricing-plan__note">{plan.note}</p>}
              <p className="pricing-plan__price"><span>${billing === "yearly" ? Math.round(plan.price / 2) : plan.price}</span><small>/month</small></p>
              <Button variant="primary" size="md" className="pricing-plan__button">Choose Plan</Button>
            </article>)}
          </div>
        </section>

        <section className="pricing-comparison" aria-label="Plan feature comparison">
          <div className="pricing-comparison__scroll">
            <table>
              <thead><tr><th scope="col"><span>Features</span></th><th scope="col"><span>Free Plan</span></th><th scope="col"><span>Free Plan</span></th><th scope="col"><span>Free Plan</span></th></tr></thead>
              <tbody>{comparison.map(([feature, basic, premium, ultimate]) => <tr key={feature}>
                <th scope="row">{feature}</th>
                {[basic, premium, ultimate].map((included, i) => <td key={`${feature}-${i}`}><span className={`pricing-comparison__status ${included ? "is-included" : "is-excluded"}`} aria-label={included ? "Included" : "Not included"}>{included ? "✓" : "×"}</span></td>)}
              </tr>)}</tbody>
            </table>
          </div>
        </section>

        <section className="pricing-faq" id="faq">
          <header className="pricing-faq__heading"><h2>FAQ</h2><p>We address commonly asked questions and provide comprehensive answers to help you navigate your way through your nutrition and wellness journey.</p></header>
          <div className="pricing-faq__layout">
            <div className="pricing-faq__list">{faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return <article className={`pricing-faq__item ${isOpen ? "is-open" : ""}`} key={faq.question}>
                <button className="pricing-faq__question" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : i)}>
                  <span>{faq.question}</span><span className="pricing-faq__toggle" aria-hidden="true">{isOpen ? "×" : "+"}</span>
                </button>
                {isOpen && <p className="pricing-faq__answer">{faq.answer}</p>}
              </article>;
            })}</div>
            <aside className="pricing-faq__aside">
              <img src={processMark} alt="" />
              <h3>Ask your question</h3>
              <p>Feel Free to Ask questions on anytime</p>
              <a href="/#contact">Ask A Question</a>
            </aside>
          </div>
        </section>
      </Container>
    </main>
    <Footer />
  </>;
};

export default PricingPage;
