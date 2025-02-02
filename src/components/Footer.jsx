import styled from "styled-components";

const FooterContainer = styled.div`
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #050a13, #43649e);
  color: white;
`;

const Footer = () => {
  return <FooterContainer>© 2025 MyMobileApp. All rights reserved.</FooterContainer>;
};

export default Footer;
