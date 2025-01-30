import styled from "styled-components";
import { FaMobile, FaLock, FaRocket } from "react-icons/fa";

const FeaturesContainer = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

const Feature = styled.article`
  margin: 20px 0;
`;

const IconWrapper = styled.span`
  display: inline-block;
  margin-bottom: 10px;
`;

const Features = () => {
  return (
    <FeaturesContainer>
      <h2>Why Choose MyApp?</h2>
      <Feature>
        <IconWrapper>
          <FaMobile size={40} color="#2a5298" aria-hidden="true" />
        </IconWrapper>
        <h3>Mobile Friendly</h3>
        <p>Designed for smooth mobile experience.</p>
      </Feature>
      <Feature>
        <IconWrapper>
          <FaLock size={40} color="#2a5298" aria-hidden="true" />
        </IconWrapper>
        <h3>Secure</h3>
        <p>End-to-end encryption for data protection.</p>
      </Feature>
      <Feature>
        <IconWrapper>
          <FaRocket size={40} color="#2a5298" aria-hidden="true" />
        </IconWrapper>
        <h3>Fast Performance</h3>
        <p>Optimized for high-speed usage.</p>
      </Feature>
    </FeaturesContainer>
  );
};

export default Features;
