import styled from "styled-components";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 50px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #2a5298;
`;

const ContactText = styled.p`
  color: #666;
  line-height: 1.6;
`;

const Form = styled(motion.form)`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #2a5298;
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #2a5298;
  }
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
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

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted');
  };

  return (
    <Section id="contact">
      <Container>
        <Title>Get in Touch</Title>
        <ContactGrid>
          <ContactInfo>
            <IconWrapper>
              <FaEnvelope />
            </IconWrapper>
            <ContactText>support@mymobileapp.com</ContactText>
          </ContactInfo>
          <ContactInfo>
            <IconWrapper>
              <FaPhone />
            </IconWrapper>
            <ContactText>+1 (555) 123-4567</ContactText>
          </ContactInfo>
          <ContactInfo>
            <IconWrapper>
              <FaMapMarkerAlt />
            </IconWrapper>
            <ContactText>123 App Street, Silicon Valley, CA</ContactText>
          </ContactInfo>
        </ContactGrid>

        <Form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Input type="text" placeholder="Subject" required />
          <TextArea placeholder="Your Message" required />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      </Container>
    </Section>
  );
};

export default Contact; 