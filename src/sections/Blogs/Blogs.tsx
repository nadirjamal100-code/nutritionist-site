import Container from "../../components/Container/Container";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import blog1 from "../../assets/images/blog-1.jpg";
import blog2 from "../../assets/images/blog-2.jpg";
import blog3 from "../../assets/images/blog-3.jpg";
import blog4 from "../../assets/images/blog-4.jpg";
import avatarEmily from "../../assets/images/avatar-emily-johnson.png";
import avatarSarah from "../../assets/images/avatar-sarah-thompson.png";
import avatarMark from "../../assets/images/avatar-mark-wilson.png";
import avatarEmily2 from "../../assets/images/avatar-emily-johnson-2.png";
import actions1 from "../../assets/icons/card-actions-1.svg";
import actions2 from "../../assets/icons/card-actions-2.svg";
import actions3 from "../../assets/icons/card-actions-3.svg";
import actions4 from "../../assets/icons/card-actions-4.svg";
import "./Blogs.css";

interface Blog {
  image: string;
  category: string;
  title: string;
  description: string;
  author: string;
  avatar: string;
  date: string;
  actions: string;
}

const BLOGS: Blog[] = [
  {
    image: blog1,
    category: "Weight Loss",
    title: "The Benefits of Hydration for Weight Loss",
    description:
      "Discover how staying hydrated can support your weight loss goals and improve overall health.",
    author: "Emily Johnson",
    avatar: avatarEmily,
    date: "23 May 2026 · 5 min read",
    actions: actions1,
  },
  {
    image: blog2,
    category: "Mindful Eating",
    title: "Cultivating a Healthy Relationship with Food",
    description:
      "Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.",
    author: "Sarah Thompson",
    avatar: avatarSarah,
    date: "23 May 2026 · 5 min read",
    actions: actions2,
  },
  {
    image: blog3,
    category: "Understanding Macronutrients",
    title: "Carbohydrates, Proteins, and Fats",
    description:
      "Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.",
    author: "Mark Wilson",
    avatar: avatarMark,
    date: "23 May 2026 · 5 min read",
    actions: actions3,
  },
  {
    image: blog4,
    category: "Healthy Snacks on the Go",
    title: "Quick and Nutritious Options",
    description:
      "Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.",
    author: "Emily Johnson",
    avatar: avatarEmily2,
    date: "23 May 2026 · 5 min read",
    actions: actions4,
  },
];

const Blogs = () => {
  return (
    <section className="blogs" id="blog">
      <Container>
        <SectionHeading
          title="Our Blogs"
          description="Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog."
        />

        <div className="blogs__grid">
          {BLOGS.map((blog) => (
            <article className="blog-card" key={blog.title}>
              <div className="blog-card__image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-card__body">
                <span className="text-small blog-card__category">
                  {blog.category}
                </span>
                <h3>{blog.title}</h3>
                <p className="text-muted">{blog.description}</p>
              </div>
              <div className="blog-card__footer">
                <div className="blog-card__author">
                  <img src={blog.avatar} alt={blog.author} />
                  <div>
                    <h4>{blog.author}</h4>
                    <p className="text-xs text-muted">{blog.date}</p>
                  </div>
                </div>
                <img
                  src={blog.actions}
                  alt=""
                  className="blog-card__actions"
                />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blogs;
