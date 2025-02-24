import { JSX } from "react";
import Hero from "../components/Hero";
import PortfolioSection from "../components/PortfolioSection";

const HomePage = (): JSX.Element => {
  return (
    <div>
      <Hero />
      <PortfolioSection />
      <div></div>
    </div>
  );
};

export default HomePage;
