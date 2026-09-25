import Container from "../../components/Container/Container";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import icon1 from "../../assets/icons/feature-1.svg";
import icon2 from "../../assets/icons/feature-2.svg";
import icon3 from "../../assets/icons/feature-3.svg";
import icon4 from "../../assets/icons/feature-4.svg";
import icon5 from "../../assets/icons/feature-5.svg";
import icon6 from "../../assets/icons/feature-6.svg";
import "./Features.css";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: icon1,
    title: "Personalized Nutrition Plans",
    description:
      "Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.",
  },
  {
    icon: icon2,
    title: "Guidance from Certified Nutritionists",
    description:
      "Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals.",
  },
  {
    icon: icon3,
    title: "Food Tracking and Analysis",
    description:
      "Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.",
  },
  {
    icon: icon4,
    title: "Meal Planning and Recipes",
    description:
      "Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.",
  },
  {
    icon: icon5,
    title: "Lifestyle and Behavior Coaching",
    description:
      "Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.",
  },
  {
    icon: icon6,
    title: "Nutritional Education and Workshops",
    description:
      "Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success.",
  },
];

const Features = () => {
  return (
    <section className="features">
      <Container>
        <SectionHeading
          title="Features"
          description="Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness."
        />

        <div className="features__grid">
          {FEATURES.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-card__header">
                <img
                  src={feature.icon}
                  alt=""
                  className="feature-card__icon"
                />
                <h3>{feature.title}</h3>
              </div>
              <p className="text-muted">{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
