import styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaHeart, FaXTwitter } from "react-icons/fa6";

const FooterSection = styled.footer`
  background: linear-gradient(135deg, #050a13, #2a5298);
  color: white;
  padding: 60px 20px 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #fff;
`;

const Link = styled.a`
  color: #b3c5ef;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    color: #fff;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  color: #b3c5ef;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    transform: translateY(-3px);
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 20px 0;
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #b3c5ef;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <Column>
          <Title>About MyMobileApp</Title>
          <Link href="#">About Us</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Press Kit</Link>
          <Link href="#">Blog</Link>
        </Column>

        <Column>
          <Title>Resources</Title>
          <Link href="#">Documentation</Link>
          <Link href="#">Support Center</Link>
          <Link href="#">Community</Link>
          <Link href="#">Partners</Link>
        </Column>

        <Column>
          <Title>Legal</Title>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Cookie Policy</Link>
          <Link href="#">Security</Link>
        </Column>

        <Column>
          <Title>Connect With Us</Title>
          <SocialLinks>
            <SocialIcon href="#" aria-label="Facebook">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="#" aria-label="X (formerly Twitter)">
              <FaXTwitter />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="#" aria-label="GitHub">
              <FaGithub />
            </SocialIcon>
          </SocialLinks>
        </Column>
      </Container>

      <Divider />

      <BottomBar>
        <Copyright>
          <span>© 2025 MyMobileApp. Made with</span>
          <FaHeart style={{ color: '#ff6b6b' }} />
          <span>by Isaac Phiri</span>
        </Copyright>
        <LegalLinks>
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Cookies</Link>
        </LegalLinks>
      </BottomBar>
    </FooterSection>
  );
};

export default Footer;
