import styled from "styled-components";
import { motion } from "framer-motion";
import graphIcon from '../assets/graph-icon.jpeg';

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 0 auto;
  background: linear-gradient(135deg, #050a13, #43649e);
  color: white;
  padding: 20px;
`;

// Using motion.create() instead of motion()
const AnimatedHero = motion.create(HeroSection);

const DownloadButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
`;

const Hero = () => {
  return (
    <AnimatedHero
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <h1>Welcome to MyApp</h1>
      <p>The best mobile app for productivity and success.</p>
      <DownloadButton 
        aria-label="Download MyApp"
        onClick={() => window.open('https://github.com/IsaacPhiri/Mobile-App-Landing-Page', '_blank')}
      >
        Download Now
      </DownloadButton>
      <motion.img
        src={graphIcon}
        alt="App preview"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }}
      />
    </AnimatedHero>
  );
};

export default Hero;