import styled from "styled-components";
import { motion } from "framer-motion";
import { FaMobile, FaLock, FaRocket, FaCloud, FaUsers, FaCog } from "react-icons/fa";

const Section = styled.section`
  padding: 80px 20px;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  color: #2a5298;
  margin-bottom: 20px;
  font-size: 2.5rem;
`;

const Subtitle = styled.p`
  color: #666;
  margin-bottom: 50px;
  font-size: 1.1rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  background: ${props => props.gradient};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  font-size: 1.5rem;
`;

const FeatureTitle = styled.h3`
  color: #333;
  margin-bottom: 15px;
  font-size: 1.3rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const Features = () => {
  const features = [
    {
      icon: <FaMobile />,
      title: "Mobile Friendly",
      description: "Seamlessly access your data across all devices with our responsive design.",
      gradient: "linear-gradient(135deg, #2a5298, #43649e)"
    },
    {
      icon: <FaLock />,
      title: "Secure",
      description: "Enterprise-grade security with end-to-end encryption for your data protection.",
      gradient: "linear-gradient(135deg, #10B981, #059669)"
    },
    {
      icon: <FaRocket />,
      title: "Fast Performance",
      description: "Lightning-fast load times and smooth interactions for optimal user experience.",
      gradient: "linear-gradient(135deg, #F59E0B, #D97706)"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Sync",
      description: "Automatic cloud synchronization keeps your data up-to-date everywhere.",
      gradient: "linear-gradient(135deg, #3B82F6, #2563EB)"
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      description: "Powerful tools for seamless team collaboration and project management.",
      gradient: "linear-gradient(135deg, #EC4899, #DB2777)"
    },
    {
      icon: <FaCog />,
      title: "Customizable",
      description: "Tailor the app to your needs with extensive customization options.",
      gradient: "linear-gradient(135deg, #8B5CF6, #7C3AED)"
    }
  ];

  return (
    <Section id="features-section">
      <Container>
        <Title>Why Choose MyMobileApp?</Title>
        <Subtitle>
          Discover the powerful features that make MyMobileApp the perfect solution for your needs
        </Subtitle>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <IconWrapper gradient={feature.gradient}>
                {feature.icon}
              </IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </Section>
  );
};

export default Features;
