import styled from "styled-components";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

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

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const PricingCard = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PlanName = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const Price = styled.div`
  color: #2a5298;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;

  span {
    font-size: 1rem;
    color: #666;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  text-align: left;
`;

const Feature = styled.li`
  color: #666;
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: #2a5298;
  }
`;

const PricingButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #2a5298;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #1a3b7d;
  }
`;

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "Basic Task Management",
        "Limited Storage",
        "Email Support",
        "Single User"
      ]
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "/month",
      features: [
        "Advanced Task Management",
        "Unlimited Storage",
        "Priority Support",
        "Team Collaboration"
      ]
    },
    {
      name: "Enterprise",
      price: "$29.99",
      period: "/month",
      features: [
        "Custom Solutions",
        "Dedicated Support",
        "Advanced Security",
        "API Access"
      ]
    }
  ];

  return (
    <Section id="pricing">
      <Container>
        <Title>Choose Your Plan</Title>
        <PricingGrid>
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <PlanName>{plan.name}</PlanName>
              <Price>
                {plan.price}
                {plan.period && <span>{plan.period}</span>}
              </Price>
              <FeatureList>
                {plan.features.map((feature, featureIndex) => (
                  <Feature key={featureIndex}>
                    <FaCheck /> {feature}
                  </Feature>
                ))}
              </FeatureList>
              <PricingButton>Get Started</PricingButton>
            </PricingCard>
          ))}
        </PricingGrid>
      </Container>
    </Section>
  );
};

export default Pricing; 