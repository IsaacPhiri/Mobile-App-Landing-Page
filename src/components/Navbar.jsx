import { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  background: #a1e2df;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  z-index: 10;
  position: sticky;
  top: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  height: 50px;  // Adjust height as needed
  padding: 0 1rem;
  cursor: pointer;
`;

const LogoText = styled.span`
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: 0;
    background-color: #ffffff;
    padding-top: 2rem;
  }
`;

const NavItem = styled.a`
  color: #333;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  scroll-behavior: smooth;

  &:hover {
    color: #007bff;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    justify-content: center;
    margin: 2rem 0;
  }
`;

const NavBtnLink = styled.a`
  border-radius: 4px;
  background: #007bff;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #0056b3;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <LogoContainer>
        <Logo src="/app-icon.png" alt="MyMobileApp Logo"/>
        <LogoText>MyMobileApp</LogoText>
      </LogoContainer>
      
      <MenuIcon onClick={toggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>

      <NavMenu isOpen={isOpen}>
        <NavItem href="#features-section" onClick={handleNavClick}>Features</NavItem>
        <NavItem href="#how-it-works">How It Works</NavItem>
        <NavItem href="#testimonials">Testimonials</NavItem>
        <NavItem href="#pricing">Pricing</NavItem>
      </NavMenu>

      <NavBtn isOpen={isOpen}>
        <NavBtnLink href="https://github.com/IsaacPhiri/Mobile-App-Landing-Page">Download Now</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar; 