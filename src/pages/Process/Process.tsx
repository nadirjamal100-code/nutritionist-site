import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import abstractLeft from "../../assets/icons/abstract-left.svg";
import processMark from "../../assets/icons/process-mark.svg";
import consultationIcon from "../../assets/icons/process/process-step-01-consult.svg";
import assessmentIcon from "../../assets/icons/process/process-step-02-assessment.svg";
import planIcon from "../../assets/icons/process/process-step-03-plan.svg";
import mealsIcon from "../../assets/icons/process/process-step-04-meals.svg";
import supportIcon from "../../assets/icons/process/process-step-05-support.svg";
import progressIcon from "../../assets/icons/process/process-step-06-progress.svg";
import checkinsIcon from "../../assets/icons/process/process-step-07-checkins.svg";
import educationIcon from "../../assets/icons/process/process-step-08-education.svg";
import adjustmentsIcon from "../../assets/icons/process/process-step-09-adjustments.svg";
import habitsIcon from "../../assets/icons/process/process-step-10-habits.svg";
import "./Process.css";

const steps = [
  { title: "Initial Consultation", icon: consultationIcon, text: "We start by scheduling an initial consultation, either in person or through a convenient online meeting. During this session, we will discuss your health, lifestyle, goals, and any specific dietary requirements." },
  { title: "Assessing Your Needs", icon: assessmentIcon, text: "Our team of experienced nutritionists and dietitians will conduct a thorough assessment of your nutritional needs and create a personalized plan tailored to your unique requirements." },
  { title: "Personalized Nutrition Plan", icon: planIcon, text: "Based on the information gathered, we will develop a personalized nutrition plan that takes into account your dietary preferences, lifestyle, and health goals. This plan will provide you with clear guidelines on what to eat, portion sizes, and meal timing." },
  { title: "Meal Planning and Recipes", icon: mealsIcon, text: "To make your journey easier, we will provide you with a variety of delicious and nutritious meal options, along with recipes that align with your personalized nutrition plan." },
  { title: "Ongoing Support", icon: supportIcon, text: "Throughout your journey, our team of nutrition experts will be there to provide ongoing support, answer your questions, and offer guidance. We believe in the power of continuous encouragement to help you stay motivated and achieve long-term success." },
  { title: "Progress Tracking", icon: progressIcon, text: "We encourage you to track your progress using our user-friendly mobile app or website tools. You can log your meals, monitor your weight, and track your physical activity, allowing you to have a clear picture of your progress and make any necessary adjustments." },
  { title: "Regular Check-ins", icon: checkinsIcon, text: "We will schedule regular check-ins to review your progress, address any concerns, and make any necessary adjustments to your nutrition plan. Our goal is to ensure that you are consistently moving towards your desired outcomes." },
  { title: "Education and Resources", icon: educationIcon, text: "Along the way, we will provide you with educational resources, such as articles, guides, and videos, to enhance your understanding of nutrition and empower you to make informed choices for a healthier lifestyle." },
  { title: "Fine-Tuning and Adjustments", icon: adjustmentsIcon, text: "As your journey progresses and your goals evolve, we will fine-tune and make adjustments to your nutrition plan to ensure that it continues to align with your changing needs." },
  { title: "Sustainable Lifestyle Habits", icon: habitsIcon, text: "Our ultimate goal is to help you develop sustainable lifestyle habits that will support your long-term health and wellness. We will equip you with the knowledge and skills to maintain your progress even after you've completed the program." },
];

const Process = () => <>
  <Header />
  <main className="process-page">
    <Container>
      <section className="process-intro">
        <div className="process-intro__mark" aria-hidden="true"><span/><span/><span/><span/></div>
        <h1>Your Journey to Health and Wellness</h1>
        <p>At Nutritionist, we believe in providing a personalized and comprehensive approach to help you achieve your health and wellness goals. Our "How It Works" process is designed to guide you through each step of your journey, ensuring that you receive the support, knowledge, and tools you need to succeed. Here's a detailed breakdown of our process:</p>
      </section>

      <section className="process-steps" aria-labelledby="process-heading">
        <header className="process-section-heading">
          <h2 id="process-heading">How It Works</h2>
          <p>We provide a step-by-step guide on how to get started on your journey towards better health and nutrition. We are here to simplify the process and make it easy for you to navigate our platform and access the resources you need to achieve your goals. Here's how it works</p>
        </header>
        <div className="process-grid">
          {steps.map((step, index) => <article className="process-card" key={step.title}>
            <span className="process-card__number">{String(index + 1).padStart(2, "0")}</span>
            <div className="process-card__content">
              <div className="process-card__title"><span className="process-card__icon"><img src={step.icon} alt="" /></span><h3>{step.title}</h3></div>
              <p>{step.text}</p>
            </div>
          </article>)}
        </div>
      </section>

      <section className="process-cta">
        <img className="process-cta__decoration process-cta__decoration--lines" src={abstractLeft} alt="" />
        <div><h2>Are you ready to embark on a transformative journey towards better health and wellness?</h2><p>Join us at Nutritionist and let us guide you on the path to a healthier and happier you.</p></div>
        <Button variant="primary" size="md">Join Us Now</Button>
        <img className="process-cta__decoration process-cta__decoration--mark" src={processMark} alt="" />
      </section>
    </Container>
  </main>
  <Footer />
</>;

export default Process;
