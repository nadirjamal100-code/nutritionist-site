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
import { getBlogSlug } from "../../pages/Blog/blogData";
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
  detailTitle: string;
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
    detailTitle: "10 Effective Strategies for Sustainable Weight Loss",
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
    detailTitle: "Understanding Emotional Eating and How to Overcome It",
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
    detailTitle: "Understanding Macronutrients: Carbohydrates, Proteins, and Fats",
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
    detailTitle: "Healthy and Flavorful Lunch Ideas for a Busy Lifestyle",
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
              <a className="blog-card__image" href={`/blog/${getBlogSlug(blog.detailTitle)}`} aria-label={`Read ${blog.title}`}>
                <img src={blog.image} alt={blog.title} />
              </a>
              <div className="blog-card__body">
                <span className="text-small blog-card__category">
                  {blog.category}
                </span>
                <h3><a href={`/blog/${getBlogSlug(blog.detailTitle)}`}>{blog.title}</a></h3>
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
                <a href={`/blog/${getBlogSlug(blog.detailTitle)}`} aria-label={`Read ${blog.title}`}>
                <img
                  src={blog.actions}
                  alt=""
                  className="blog-card__actions"
                />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blogs;
