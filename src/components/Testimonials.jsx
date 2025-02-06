import styled from "styled-components";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const Section = styled.section`
  padding: 80px 20px;
  background: white;
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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const TestimonialCard = styled(motion.div)`
  background: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const QuoteIcon = styled.div`
  color: #2a5298;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Quote = styled.p`
  color: #333;
  font-style: italic;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const Author = styled.div`
  color: #666;
  font-weight: bold;
`;

const Testimonials = () => {
  const testimonials = [
    {
      quote: "MyMobileApp has completely transformed how I manage my daily tasks. It's intuitive and powerful!",
      author: "Sarah Johnson, Entrepreneur"
    },
    {
      quote: "The best productivity app I've ever used. The interface is clean and the features are exactly what I need.",
      author: "Michael Chen, Developer"
    },
    {
      quote: "I've tried many apps, but this one stands out. It's helped me increase my productivity by 50%!",
      author: "Emma Davis, Project Manager"
    }
  ];

  return (
    <Section id="testimonials">
      <Container>
        <Title>What Our Users Say</Title>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <QuoteIcon>
                <FaQuoteLeft />
              </QuoteIcon>
              <Quote>{testimonial.quote}</Quote>
              <Author>{testimonial.author}</Author>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </Section>
  );
};

export default Testimonials; 