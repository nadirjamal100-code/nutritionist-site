import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Team from "./pages/Team/Team";
import Process from "./pages/Process/Process";
import PricingPage from "./pages/Pricing/PricingPage";
import BlogPage from "./pages/Blog/BlogPage";
import BlogDetailsPage from "./pages/Blog/BlogDetailsPage";
import ContactPage from "./pages/Contact/ContactPage";

function App() {
  const path = window.location.pathname.replace(/\/$/, "");
  if (path === "/about") return <About />;
  if (path === "/team") return <Team />;
  if (path === "/process") return <Process />;
  if (path === "/pricing") return <PricingPage />;
  if (path === "/contact") return <ContactPage />;
  if (path === "/blog") return <BlogPage />;
  if (path.startsWith("/blog/")) return <BlogDetailsPage slug={decodeURIComponent(path.slice("/blog/".length))} />;
  return <Home />;
}

export default App;
