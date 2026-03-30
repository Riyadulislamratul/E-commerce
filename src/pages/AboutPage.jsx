import React from "react";
import { Link } from "react-router";
import OurStory from "../components/AboutPage/OurStory";
import Stat from "../components/AboutPage/Stat";
import Team from "../components/AboutPage/Team";

const AboutPage = () => {
  return (
    <div>
        {/* <OurStory /> */}
        <Stat />
        <Team />
    </div>
  );
};

export default AboutPage;
