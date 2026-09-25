import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import { blogArticles, categories, getBlogSlug } from "./blogData";
import "./BlogPage.css";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const visibleArticles = activeCategory === "All" ? blogArticles : blogArticles.filter((article) => article.category === activeCategory);

  return <>
    <Header />
    <main className="blog-page">
      <Container>
        <section className="blog-page__intro">
          <div className="blog-page__mark" aria-hidden="true"><span/><span/><span/><span/></div>
          <h1>Our Blogs</h1>
          <p>Welcome to the Blog section of Nutritionist, your trusted source for insightful articles, tips, and expert advice on nutrition and wellness. Here, we strive to provide you with engaging and informative content that will inspire and empower you to make informed decisions about your health. Explore our blog to discover a wealth of resources that cover a wide range of topics related to nutrition, fitness, and overall well-being.</p>
        </section>

        <nav className="blog-page__categories" aria-label="Blog categories">
          {categories.map((category) => <button key={category} type="button" className={activeCategory === category ? "is-active" : ""} aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>{category}</button>)}
        </nav>

        <section className="blog-page__grid" aria-label={`${activeCategory} articles`}>
          {visibleArticles.map((article) => <article className="blog-article" key={article.title}>
            <header className="blog-article__header"><h2>{article.category}</h2></header>
            <img className="blog-article__image" src={article.image} alt="" />
            <div className="blog-article__content">
              <div><h3>{article.title}</h3><p>{article.description}</p></div>
              <a href={`/blog/${getBlogSlug(article.title)}`}>Read More</a>
            </div>
          </article>)}
        </section>
      </Container>
    </main>
    <Footer />
  </>;
};

export default BlogPage;
