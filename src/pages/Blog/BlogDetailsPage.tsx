import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import { blogArticles, getBlogArticle, getBlogSlug } from "./blogData";
import "./BlogDetailsPage.css";

const categoryGuides: Record<string, { heading: string; paragraphs: string[] }[]> = {
  "Weight Loss Tips": [
    { heading: "Start with a realistic next step", paragraphs: ["Long-term change is easier to approach when the next step feels clear and manageable. Choose one routine that fits your day, such as planning a meal ahead or setting aside time for a regular check-in with yourself.", "Small, repeatable actions can help you learn what works in your own routine. Give yourself room to adjust as your schedule, preferences, and goals change."] },
    { heading: "Build consistency around your life", paragraphs: ["A useful plan should work on ordinary busy days, not only when everything goes perfectly. Think about the situations that tend to interrupt your plans and prepare a flexible alternative for them.", "Progress looks different for everyone. If you have health concerns or need individual nutrition guidance, discuss your goals with a qualified health professional."] },
  ],
  "Healthy Eating": [
    { heading: "Make room for variety", paragraphs: ["A varied approach gives you more ways to enjoy meals and work with the foods available to you. Consider the flavors, textures, and ingredients you already like, then explore a few new combinations at a time.", "Food preferences, culture, budget, and access all shape what feels practical. A plan that respects those details is easier to make your own."] },
    { heading: "Choose an approach that fits", paragraphs: ["There is no single meal pattern that suits everyone. Use reliable, individualized guidance when you have specific dietary needs, and make changes at a pace that feels manageable.", "A registered dietitian can help you adapt general ideas to your health history and personal requirements."] },
  ],
  "Fitness and Exercise": [
    { heading: "Find movement you can repeat", paragraphs: ["The best routine is one that fits your available space, time, and experience. Start with activities you enjoy and build a schedule that leaves room for rest and everyday responsibilities.", "At home, a clear area and a simple plan can be enough to get started. Adjust the length and difficulty to your comfort rather than trying to do everything at once."] },
    { heading: "Make the routine your own", paragraphs: ["Different kinds of movement can serve different goals, and personal preference matters. Notice how each option fits your energy, access, and schedule, then choose a balanced routine you can maintain.", "If you have an injury, chronic condition, or concerns about starting exercise, ask a qualified health professional for guidance first."] },
  ],
  "Mindset and Motivation": [
    { heading: "Notice the patterns without judgment", paragraphs: ["A difficult day does not define your whole journey. When a plan is hard to follow, take a moment to notice what was happening and what kind of support or change might help next time.", "Try setting goals around actions you can control, and recognize effort and progress in more than one way."] },
    { heading: "Practice a kinder inner voice", paragraphs: ["The way you speak to yourself can shape how supported you feel while making changes. Replace all-or-nothing expectations with language that leaves room to learn, pause, and begin again.", "If worries about food, weight, or body image are affecting your well-being, consider reaching out to a qualified counselor or health professional."] },
  ],
  "Recipes and Meal Planning": [
    { heading: "Keep meal planning practical", paragraphs: ["A little planning can make busy days feel less rushed. Start with a short list of meals you enjoy, ingredients you already have, and a few flexible options for when plans change.", "Preparing a component ahead of time or keeping convenient staples nearby can make it easier to put together a meal that suits your day."] },
    { heading: "Adapt recipes to your preferences", paragraphs: ["Recipes are starting points. Adjust ingredients, seasonings, and serving ideas to suit your tastes, traditions, and dietary needs.", "For allergies, medical nutrition needs, or a specialized eating plan, use advice from a qualified professional who understands your situation."] },
  ],
};

const BlogDetailsPage = ({ slug }: { slug: string }) => {
  const article = getBlogArticle(slug);
  if (!article) return <><Header /><main className="blog-detail blog-detail--missing"><Container><h1>Article not found</h1><p>We couldn’t find that blog article.</p><a href="/blog">Back to all articles</a></Container></main><Footer /></>;

  const sections = categoryGuides[article.category] ?? categoryGuides["Healthy Eating"];
  const relatedArticles = blogArticles.filter((item) => item.category === article.category && item.title !== article.title).slice(0, 3);
  return <>
    <Header />
    <main className="blog-detail">
      <Container>
        <a className="blog-detail__back" href="/blog"><span aria-hidden="true">←</span> Back to all blogs</a>
        <article>
          <header className="blog-detail__hero">
            <div className="blog-detail__eyebrow"><span>{article.category}</span><span className="blog-detail__dot" aria-hidden="true"/>6 min read</div>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <div className="blog-detail__byline"><span className="blog-detail__avatar" aria-hidden="true">N</span><span><strong>Nutritionist Editorial Team</strong><small>Nutrition and wellness</small></span></div>
          </header>

          <img className="blog-detail__cover" src={article.image} alt="" />

          <div className="blog-detail__layout">
            <div className="blog-detail__body">
              <p className="blog-detail__lead">{article.description}</p>
              {sections.map((section) => <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>)}
              <aside className="blog-detail__note"><strong>A note from our team</strong><p>Nutrition and wellness are personal. Use this article as a starting point and seek individualized advice when you need support tailored to your health and circumstances.</p></aside>
              <a className="blog-detail__all-link" href="/blog">Explore more articles <span aria-hidden="true">→</span></a>
            </div>

            <aside className="blog-detail__sidebar">
              <div className="blog-detail__sidebar-card">
                <h2>More in {article.category}</h2>
                {relatedArticles.length ? relatedArticles.map((related) => <a className="blog-detail__related" href={`/blog/${getBlogSlug(related.title)}`} key={related.title}>
                  <img src={related.image} alt=""/><span>{related.title}<small>Read article <span aria-hidden="true">→</span></small></span>
                </a>) : <p>More articles are coming soon.</p>}
              </div>
              <div className="blog-detail__sidebar-cta"><h2>Need a little guidance?</h2><p>Our nutrition team is here to help you find an approach that fits your goals and routine.</p><a href="/#contact">Contact Us</a></div>
            </aside>
          </div>
        </article>
      </Container>
    </main>
    <Footer />
  </>;
};

export default BlogDetailsPage;
