import React from "react";
import AboutRow from "../components/home/aboutRow/AboutRow";
import Hero from "../components/home/Hero";
import { useOutletContext } from "react-router-dom";
import ResumeRow from "../components/home/resumeRow/ResumeRow";
import FreeLancer from "../components/home/freelancer/FreeLancer";
import Portfolio from "../components/home/aboutRow/Portfolio/PortfolioRow";

function Home(props) {
  const { navbar } = useOutletContext();

  return (
    <div>
      <Hero
        image="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
        title="Roshan Thummar"
        subtitle="Full-Stack Developer"
      />
      {navbar}
      <AboutRow />
      <ResumeRow />
      <FreeLancer />
      <Portfolio />
    </div>
  );
}

export default Home;
