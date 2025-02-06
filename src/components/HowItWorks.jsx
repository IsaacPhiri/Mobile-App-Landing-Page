import styled from "styled-components";
import { motion } from "framer-motion";
import { FaRegLightbulb, FaRegEdit, FaRegCheckCircle } from "react-icons/fa";

const Section = styled.section`
  padding: 80px 20px;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  color: #2a5298;
  margin-bottom: 50px;
  font-size: 2.5rem;
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const Step = styled(motion.div)`
  padding: 30px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StepIcon = styled.div`
  font-size: 2.5rem;
  color: #2a5298;
  margin-bottom: 20px;
`;

const StepTitle = styled.h3`
  color: #333;
  margin-bottom: 15px;
`;

const StepDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const HowItWorks = () => {
  return (
    <Section id="how-it-works">
      <Container>
        <Title>How It Works</Title>
        <StepsContainer>
          <Step
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <StepIcon>
              <FaRegLightbulb />
            </StepIcon>
            <StepTitle>1. Download</StepTitle>
            <StepDescription>
              Get started by downloading MyMobileApp from your preferred app store.
            </StepDescription>
          </Step>

          <Step
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <StepIcon>
              <FaRegEdit />
            </StepIcon>
            <StepTitle>2. Setup</StepTitle>
            <StepDescription>
              Create your account and customize your preferences in minutes.
            </StepDescription>
          </Step>

          <Step
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <StepIcon>
              <FaRegCheckCircle />
            </StepIcon>
            <StepTitle>3. Enjoy</StepTitle>
            <StepDescription>
              Start using all the amazing features and boost your productivity.
            </StepDescription>
          </Step>
        </StepsContainer>
      </Container>
    </Section>
  );
};

export default HowItWorks; 