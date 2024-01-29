import { FC } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Roadmap from "./Roadmap";
import FeaturedArt from "./FeaturedArt";
import HotCollection from "./HotCollection";
import Collection from "./Collection";
import Blog from "./Blog";
import Footer from "./Footer";
import Strip from "./Strip";

const LandingPage: FC = () => {
  return (
    <div className="flex max-w-[1440px] flex-col bg-cream-background mx-auto overflow-x-hidden min-w-[340px]">
      <Navbar />
      <Hero />
      <Services />
      <Strip />
      <Roadmap />
      <Strip bg="yellow" />
      <FeaturedArt />
      <Collection />
      <HotCollection />
      <Strip />
      <Blog />
      <Strip bg="yellow" />
      <Footer />
    </div>
  );
};

export default LandingPage;
