import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../sections/Hero/Hero";
import Features from "../../sections/Features/Features";
import Blogs from "../../sections/Blogs/Blogs";
import Testimonials from "../../sections/Testimonials/Testimonials";
import Pricing from "../../sections/Pricing/Pricing";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Blogs />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </>
  );
};

export default Home;
