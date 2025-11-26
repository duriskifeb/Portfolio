import React from 'react';

import {
  AboutAchievements,
  Blogs,
  City,
  Footer,
  GrantsSpeaking,
  Hackathons,
  Header,
  Interests,
  Projects,
  ResumeContact,
  ScrollToTop,
  ExperienceSkills,
  WorldMap,
} from '~/components';
import { hackathons } from '~/components/hackathons';

const Home = () => {
  return (
    <>
      <Header />
      <City />
      <AboutAchievements />
      <Interests />
      <ExperienceSkills />
      <Projects />
      <Hackathons />
      <WorldMap hackathons={hackathons} />
      <GrantsSpeaking />
      <Blogs />
      <ResumeContact />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
