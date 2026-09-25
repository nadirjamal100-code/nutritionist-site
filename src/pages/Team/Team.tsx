import { useState } from "react";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import sarah from "../../assets/images/team-sarah.jpg";
import emily from "../../assets/images/team-emily.jpg";
import john from "../../assets/images/team-john.jpg";
import rachel from "../../assets/images/team-rachel.jpg";
import nutritionist1 from "../../assets/images/team-hd-nutritionist-1.jpg";
import nutritionist2 from "../../assets/images/team-hd-nutritionist-2-alt.jpg";
import nutritionist3 from "../../assets/images/team-hd-nutritionist-3.jpg";
import nutritionist4 from "../../assets/images/team-hd-nutritionist-4.jpg";
import support1 from "../../assets/images/team-hd-support-1.jpg";
import support2 from "../../assets/images/team-hd-support-2.jpg";
import support3 from "../../assets/images/team-hd-support-3.jpg";
import support4 from "../../assets/images/team-hd-support-4.jpg";
import marketing1 from "../../assets/images/team-hd-marketing-1.jpg";
import marketing2 from "../../assets/images/team-hd-marketing-2.jpg";
import marketing3 from "../../assets/images/team-hd-marketing-3.jpg";
import marketing4 from "../../assets/images/team-hd-marketing-4.jpg";
import tech1 from "../../assets/images/team-hd-tech-1.jpg";
import tech2 from "../../assets/images/team-hd-tech-2-alt.jpg";
import tech3 from "../../assets/images/team-hd-tech-3-alt.jpg";
import tech4 from "../../assets/images/team-hd-tech-4-alt.jpg";
import "./Team.css";

const departments = [
  {
    label: "Management Team",
    members: [
      { name: "Sarah Mitchell", role: "Founder and CEO", image: sarah },
      { name: "Emily Thompson", role: "Chief Operating Officer", image: emily },
      { name: "John Davis", role: "Chief Financial Officer", image: john },
      { name: "Rachel Adams", role: "Chief Marketing Officer", image: rachel },
    ],
  },
  {
    label: "Nutritionists and Dietitians",
    members: [
      { name: "Emily Davis", role: "Registered Dietitian", image: nutritionist1 },
      { name: "Sarah Thompson", role: "Clinical Nutritionist", image: nutritionist2 },
      { name: "Emily Johnson", role: "Nutrition Coach", image: nutritionist3 },
      { name: "Jennifer Anderson", role: "Wellness Dietitian", image: nutritionist4 },
    ],
  },
  {
    label: "Customer Support",
    members: [
      { name: "Robert Johnson", role: "Client Support Specialist", image: support1 },
      { name: "Olivia Bennett", role: "Client Success Manager", image: support2 },
      { name: "Sophia Carter", role: "Member Support Advisor", image: support3 },
      { name: "Ethan Walker", role: "Care Coordinator", image: support4 },
    ],
  },
  {
    label: "Marketing and Communications",
    members: [
      { name: "Mark Wilson", role: "Marketing Manager", image: marketing1 },
      { name: "Lucas Bennett", role: "Communications Specialist", image: marketing2 },
      { name: "Mia Cooper", role: "Content Strategist", image: marketing3 },
      { name: "Ava Reed", role: "Brand Designer", image: marketing4 },
    ],
  },
  {
    label: "Technology and Development",
    members: [
      { name: "James Foster", role: "Product Developer", image: tech1 },
      { name: "Daniel Chen", role: "Software Engineer", image: tech2 },
      { name: "Chloe Adams", role: "UX Designer", image: tech3 },
      { name: "Olivia Parker", role: "Web Developer", image: tech4 },
    ],
  },
];

const Team = () => {
  const [activeDepartment, setActiveDepartment] = useState(0);
  const activeTeam = departments[activeDepartment];

  return (
  <>
    <Header />
    <main className="team-page" id="team">
      <Container className="team-page__container">
        <section className="team-intro" aria-labelledby="team-title">
          <div className="team-intro__content">
            <div className="team-intro__badge" aria-hidden="true">
              <span /><span /><span /><span />
            </div>
            <h1 id="team-title">Meet Our Team of Experts</h1>
            <p>Our team at Nutritionist is composed of highly skilled professionals who are passionate about helping you achieve your health and wellness goals. With a diverse range of expertise in nutrition, coaching, and support, our team is dedicated to providing you with the guidance and personalized care you need. Get to know the experts behind our success and discover how they can make a positive impact on your journey to better health.</p>
          </div>
          <div className="team-departments" role="tablist" aria-label="Team departments">
            {departments.map((department, i) => (
              <button
                id={`team-tab-${i}`}
                type="button"
                role="tab"
                className={i === activeDepartment ? "is-active" : ""}
                aria-selected={i === activeDepartment}
                aria-controls="team-members"
                tabIndex={i === activeDepartment ? 0 : -1}
                key={department.label}
                onClick={() => setActiveDepartment(i)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                    event.preventDefault();
                    const direction = event.key === "ArrowRight" ? 1 : -1;
                    const next = (activeDepartment + direction + departments.length) % departments.length;
                    setActiveDepartment(next);
                    document.getElementById(`team-tab-${next}`)?.focus();
                  }
                }}
              >
                {department.label}
              </button>
            ))}
          </div>
        </section>

        <section className="team-members" id="team-members" role="tabpanel" aria-labelledby={`team-tab-${activeDepartment}`} aria-label={activeTeam.label}>
          {activeTeam.members.map((member) => (
            <article className="team-member" key={member.name}>
              <div className="team-member__portrait">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-member__details">
                <h2>{member.name}</h2>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="team-careers">
          <div className="team-careers__copy">
            <h2>Join Our Team</h2>
            <p>We are always on the lookout for talented individuals who are enthusiastic about making a difference. Explore our career opportunities and join us in our mission to help people achieve their health and wellness goals.</p>
          </div>
          <a className="team-careers__button" href="/#contact">Apply Now</a>
        </section>
      </Container>
    </main>
    <Footer />
  </>
  );
};

export default Team;
