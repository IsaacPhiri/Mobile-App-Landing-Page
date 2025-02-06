import styled from "styled-components";
import { motion } from "framer-motion";
import grapghIcon from '../assets/app-banner.jpg';

const HeroSection = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 20px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(5, 10, 19, 0.9), rgba(42, 82, 152, 0.8));
    z-index: 1;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${grapghIcon});
  background-size: cover;
  background-position: center;
`;

const ContentWrapper = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`;

const DownloadButton = styled.button`
  padding: 15px 30px;
  margin-top: 20px;
  background: #2a5298;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #1a3b7d;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <BackgroundImage />
      <ContentWrapper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to MyMobileApp</h1>
        <p>The best mobile App for productivity and success.</p>
        <DownloadButton
          aria-label="Download MyMobileApp"
          onClick={() => window.open('https://github.com/IsaacPhiri/Mobile-App-Landing-Page', '_blank')}
        >
          Download Now
        </DownloadButton>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero;