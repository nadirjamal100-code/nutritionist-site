import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import story1 from "../../assets/images/about-story-1.jpg";
import story2 from "../../assets/images/about-story-2.jpg";
import story3 from "../../assets/images/about-story-3.jpg";
import story4 from "../../assets/images/about-story-4.jpg";
import story5 from "../../assets/images/about-story-5.jpg";
import story6 from "../../assets/images/about-story-6.jpg";
import story7 from "../../assets/images/about-story-7.jpg";
import story8 from "../../assets/images/about-story-8.jpg";
import story9 from "../../assets/images/about-story-9.jpg";
import story10 from "../../assets/images/about-story-10.jpg";
import achievement1 from "../../assets/icons/feature-1.svg";
import achievement2 from "../../assets/icons/feature-2.svg";
import achievement3 from "../../assets/icons/feature-3.svg";
import achievement4 from "../../assets/icons/feature-4.svg";
import "./About.css";

const storyItems = [
  { title: "Inspiring Transformations Story", date: "July 1, 2026", image: story1, text: "Nutritionist continues to empower individuals to transform their lives through personalized nutrition coaching. With an expanding client base and a growing team of experts, we remain committed to our goal of helping people lose weight, improve their health, and lead happier, more fulfilling lives. Our journey of inspiring transformations continues, one client at a time." },
  { title: "Recognition and Accolades Story", date: "March 10, 2026", image: story2, text: "Nutritionist received industry recognition for its excellence in personalized nutrition coaching. Our innovative approach and dedication to client success earned us accolades and solidified our position as a leading provider in the field." },
  { title: "Continued Growth Story", date: "November 2, 2026", image: story3, text: "Nutritionist celebrated serving over 5,000 clients, a testament to our commitment to helping individuals achieve their health and weight loss goals. This milestone highlighted the positive impact we have made on the lives of thousands of people." },
  { title: "Collaborating for Success Story", date: "July 15, 2026", image: story4, text: "Nutritionist established partnerships with renowned health professionals, including nutritionists, dietitians, and wellness experts. These collaborations allowed us to incorporate diverse perspectives and expertise, ensuring the highest level of guidance for our clients." },
  { title: "Enhanced Support Story", date: "April 1, 2026", image: story5, text: "In response to the growing demand for personalized nutrition coaching, Nutritionist expanded its team of qualified nutritionists and dietitians. This milestone enabled us to provide even more individualized care and support to our clients." },
  { title: "Innovating for Clients Story", date: "January 20, 2026", image: story6, text: "Nutritionist introduced a mobile app, revolutionizing the way clients engage with their personalized nutrition plans. The app allowed for easy tracking of progress, access to resources, and seamless communication with their dedicated nutrition coaches." },
  { title: "Celebrating Success Stories", date: "September 5, 2026", image: story7, text: "Nutritionist celebrated its 500th client success story. These stories showcased the positive impact of personalized nutrition coaching on individuals' lives, further motivating our team to continue providing exceptional services." },
  { title: "Expanding Reach Story", date: "June 10, 2026", image: story8, text: "Nutritionist expanded its services by launching an online platform, allowing individuals from all over the world to access personalized nutrition plans and expert guidance. This milestone brought convenience and accessibility to our growing client base." },
  { title: "Research and Expertise Story", date: "March 15, 2026", image: story9, text: "After extensive research and collaborating with nutrition experts, Sarah Mitchell and her team developed a comprehensive program rooted in scientific knowledge and evidence-based strategies. This milestone marked the establishment of Nutritionist as a trusted source of personalized nutrition coaching." },
  { title: "The Inception Story", date: "January 1, 2026", image: story10, text: "On this day, Nutritionist was born with the vision of helping individuals achieve their weight loss and health goals through personalized nutrition coaching. The founder, Sarah Mitchell, recognized the need for a sustainable and effective approach to healthy living, and thus began the journey of Nutritionist." },
];

const achievements = [
  ["10,000+ Transformations", "Our personalized nutrition plans have helped thousands of individuals reach their weight loss goals and improve their health."],
  ["Recognition for Excellence", "Nutritionist has been recognized as a leading provider of personalized nutrition coaching solutions."],
  ["Positive Client Reviews", "We have received numerous testimonials from satisfied clients who have experienced significant improvements."],
  ["Collaborate With Top Health Experts", "We have established partnerships with respected nutritionists, dietitians, and health experts."],
];

const About = () => (
  <>
    <Header />
    <main className="about-page" id="about">
      <Container>
        <section className="about-mosaic" aria-label="Nutritionist community">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((tile) => (
            <div className={`about-mosaic__tile about-mosaic__tile--${tile + 1}`} key={tile}>
              <span aria-hidden="true" />
            </div>
          ))}
          <div className="about-mosaic__center" aria-hidden="true"><span /><span /><span /><span /></div>
        </section>

        <section className="about-welcome">
          <h1>Welcome to Nutritionist</h1>
          <p>Your trusted source for personalized nutrition coaching. Our mission is to help you achieve your weight loss and health goals through tailored nutrition plans and expert guidance. We understand that every individual is unique, and that's why we believe in providing personalized solutions that fit your lifestyle and preferences.</p>
          <p>With our team of certified nutritionists and dietitians, we are dedicated to empowering you with the knowledge and tools you need to make lasting changes. Whether you want to shed those extra pounds, improve your overall well-being, or develop a healthier relationship with food, we are here to support you every step of the way.</p>
          <p>At Nutritionist, we believe that healthy eating should be enjoyable and sustainable. We emphasize the importance of balanced nutrition, focusing on whole foods and mindful eating practices. Our approach is rooted in scientific research and evidence-based strategies, ensuring that you receive the most up-to-date and accurate information.</p>
          <p>Join our community of individuals committed to transforming their lives through nutrition. Take control of your health, boost your energy levels, and discover the joy of nourishing your body with wholesome foods. We are here to guide you towards a healthier, happier you.</p>
        </section>

        <section className="about-story">
          <header className="about-section-heading">
            <h2>Our Story</h2>
            <p>Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your health journey.</p>
          </header>
          <div className="about-story__timeline">
            {storyItems.map((item, i) => (
              <article className={`about-story__item ${i % 2 ? "is-reversed" : ""}`} key={item.title}>
                <img className="about-story__image" src={item.image} alt="" />
                <div className="about-story__copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <time>{item.date}</time>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-achievements">
          <header className="about-section-heading">
            <h2>Company Achievements</h2>
            <p>At Nutritionist, we take pride in our accomplishments and the positive impact we've made in the lives of our clients. Here are some of our notable achievements</p>
          </header>
          <div className="about-achievements__grid">
            {achievements.map(([title, text], i) => (
              <article className="about-achievement" key={title}>
                <img className="about-achievement__icon" src={[achievement1, achievement2, achievement3, achievement4][i]} alt="" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-cta">
          <div><h2>We Are Proud of Our Achievements</h2><p>Our dedication shines through in the lives we've transformed, the goals we've helped clients reach, and the trust we've earned. Join Nutritionist today and embark on your own transformative journey toward optimal health and well-being.</p></div>
          <a href="/#pricing">Book a Demo <span aria-hidden="true">&#8594;</span></a>
        </section>
      </Container>
    </main>
    <Footer />
  </>
);

export default About;
