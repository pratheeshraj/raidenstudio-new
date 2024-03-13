import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Demo from "./pages/Demo";
import HomeOne from "./pages/HomeOne";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import Error from "./pages/Error";
import About from "./pages/About";
import BlogDetails from "./pages/BlogDetails";
import BlogGridSidebar from "./pages/BlogGridSidebar";
import BlogGrid from "./pages/BlogGrid";
import BlogList from "./pages/BlogList";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Pricing from "./pages/Pricing";
import ProjectDetails from "./pages/ProjectDetails";
import Project from "./pages/Project";
import Review from "./pages/Review";
import ServicesDetails from "./pages/ServicesDetails";
import Service from "./pages/Service";
import Team from "./pages/Team";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
      duration: 1200,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Demo />} />
        <Route exact path="/index" element={<HomeOne />} />
        <Route exact path="/index-2" element={<HomeTwo />} />
        <Route exact path="/index-3" element={<HomeThree />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/blog-list" element={<BlogList />} />
        <Route exact path="/blog-grid" element={<BlogGrid />} />
        <Route exact path="/blog-grid-sidebar" element={<BlogGridSidebar />} />
        <Route exact path="/blog-details" element={<BlogDetails />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/project-details" element={<ProjectDetails />} />
        <Route exact path="/review" element={<Review />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/service-details" element={<ServicesDetails />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
      <RouteScrollToTop />
      <ScrollToTop smooth color="#fff" />
    </BrowserRouter>
  );
}

export default App;
