import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import "./App.css";
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
import toast, { Toaster } from 'react-hot-toast';
import NewsletterPopup from "./components/NewsletterPopup";
import BlogByCategory from "./pages/BlogByCategory";
import BlogByTag from "./pages/BlogByTag";
import Career from "./pages/Career";
import CareerDetails from "./pages/CareerDetails";
import GameProductDetails from "./pages/GameProductDetails";
import RaidenSimx from "./pages/RaidenSimx";
import SocialIcons from './components/SocialIcons';
import NftDevlopment from "./pages/NftDevlopment";
import MetaveseDevelopment from "./pages/MetaveseDevelopment";
import RaidenArcviz from "./pages/RaidenArcviz";
import RaidenCogni from "./pages/RaidenCogni";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MetaverseCasino from './pages/MetaverseCasino';
import VRdevelopment from "./pages/VRdevelopment";
import MetaverseRoyal from "./pages/MetaverseRoyal";

import ARdevelopment from "./pages/ARdevelopment";
import MobileGame from "./pages/MobileGame";
import Blockchain from "./pages/Blockchain";
import UnityGamePage from "./pages/UnityGamePage";
import UnrealGamePage from "./pages/UnrealGamePage";
import MmorpgGamePage from "./pages/MmorpgGamePage";
import Defi from "./pages/Defi";
import P2eGamePage from "./pages/P2eGamePage";
import Web3GamePage from "./pages/Web3GamePage";
import BlockchainGame from "./pages/BlockchainGame";
import Web3 from "./pages/Web3";
import AllCaseStudy from "./pages/AllCaseStudy";
import AiasService from "./pages/AiasService";
import CaseStudyDetails from "./pages/CaseStudyDetails";
import NavBottom from "./components/NavBottom";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { getMetaDataCreate } from "./action/MetaDataAction";
import PrivacyPolicy from "./pages/PrivacyPolicy";



function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
      duration: 1200,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    dispatch(getMetaDataCreate);
  }, []);
  return (
    <BrowserRouter>
      <NavBottom />
      <SocialIcons />
      <Toaster />
      <Routes>


        {/* <Route exact path="/" element={<Demo />} /> */}
        {/* <Route exact path="/index" element={<HomeOne />} /> */}
        {/* <Route exact path="/index-2" element={<HomeTwo />} /> */}
        <Route exact path="/" element={<HomeThree />} />
        <Route exact path="/about-us" element={<About />} />
        <Route exact path="/contact-us" element={<Contact />} />
        <Route exact path="/blog-list" element={<BlogList />} />
        <Route exact path="/blog-grid" element={<BlogGrid />} />
        <Route exact path="/blog" element={<BlogGridSidebar />} />
        <Route exact path="/blog/category/:id" element={<BlogByCategory />} />
        <Route exact path="/blog/tag/:id" element={<BlogByTag />} />
        <Route exact path="/blogdetails/:id" element={<BlogDetails />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/raiden-verse" element={<ProjectDetails />} />
        <Route exact path="/review" element={<Review />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/carrer" element={<Career />} />
        <Route exact path="/nft-development-company" element={<NftDevlopment />} />
        <Route exact path="/career-details/:id" element={<CareerDetails />} />
        <Route exact path="/clash-of-empires" element={<GameProductDetails />} />
        <Route exact path="/raiden-simx" element={<RaidenSimx />} />
        <Route exact path="/generative-ai-development-company" element={<ServicesDetails />} />
        <Route exact path="/metaverse-development-company" element={<MetaveseDevelopment />} />
        <Route exact path="/raiden-arcviz" element={<RaidenArcviz />} />
        <Route exact path="/raiden-cogni" element={<RaidenCogni />} />
        <Route exact path="/virtual-vegas" element={<MetaverseCasino />} />
        <Route exact path="/virtual-reality-vr-development-company" element={<VRdevelopment />} />
        <Route exact path="/metaverse-royale" element={<MetaverseRoyal />} />
        <Route exact path="/augmented-reality-ar-development-company" element={<ARdevelopment />} />
        <Route exact path="/mobile-game-development" element={<MobileGame />} />
        <Route exact path="/blockchain-development-company" element={<Blockchain />} />
        <Route exact path="/unity-development" element={<UnityGamePage />} />
        <Route exact path="/unreal-development" element={<UnrealGamePage />} />
        <Route exact path="/mmorpg-game-development" element={<MmorpgGamePage />} />
        <Route exact path="/defi-development-company" element={<Defi />} />
        <Route exact path="/mobile-game-development" element={<MobileGame />} />
        <Route exact path="/p2e-game-develpment" element={<P2eGamePage />} />
        <Route exact path="/web3-game-develpment" element={<Web3GamePage />} />
        <Route exact path="/blockchain-game-development-company" element={<BlockchainGame />} />
        <Route exact path="/web3-development-company" element={<Web3 />} />
        <Route exact path="/AI-as-a-Service(AIaaS)-Artificial-Intelligence" element={<AiasService />} />
        <Route exact path="/case-studies" element={<AllCaseStudy />} />
        <Route exact path="/case-study-detail/:id" element={<CaseStudyDetails />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
      <RouteScrollToTop />
      <ScrollToTop smooth color="#fff" />
    </BrowserRouter>
  );
}

export default App;
