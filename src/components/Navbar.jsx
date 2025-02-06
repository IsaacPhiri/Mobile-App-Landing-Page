import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  background: ${({ scrolled }) => (scrolled ? '#ffffff' : 'transparent')};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
  box-shadow: ${({ scrolled }) => (scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none')};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 2;
`;

const Logo = styled.img`
  height: 40px;
  padding: 0 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const LogoText = styled.span`
  color: ${({ scrolled }) => (scrolled ? '#333' : '#fff')};
  font-size: 1.5rem;
  font-weight: bold;
  transition: color 0.3s ease;
`;

const MenuIcon = styled.div`
  display: none;
  color: ${({ scrolled }) => (scrolled ? '#333' : '#fff')};
  cursor: pointer;
  z-index: 2;
  transition: color 0.3s ease;

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
  gap: 10px;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffffff;
    padding-top: 80px;
    transition: all 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  }
`;

const NavItem = styled.a`
  color: ${({ scrolled }) => (scrolled ? '#333' : '#fff')};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: #2a5298;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #2a5298;
    &:after {
      width: 70%;
    }
  }

  @media screen and (max-width: 768px) {
    color: #333;
    padding: 1.5rem 0;
    font-size: 1.2rem;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  z-index: 2;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    justify-content: center;
    margin: 2rem 0;
  }
`;

const NavBtnLink = styled.a`
  border-radius: 50px;
  background: #2a5298;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  font-weight: 500;

  &:hover {
    background: #1a3b7d;
    transform: translateY(-2px);
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <Nav scrolled={scrolled}>
      <LogoContainer>
        <Logo src="/app-icon.png" alt="MyMobileApp Logo" />
        <LogoText scrolled={scrolled}>MyMobileApp</LogoText>
      </LogoContainer>

      <MenuIcon onClick={toggle} scrolled={scrolled}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>

      <NavMenu isOpen={isOpen}>
        <NavItem href="#features-section" onClick={handleNavClick} scrolled={scrolled}>
          Features
        </NavItem>
        <NavItem href="#how-it-works" onClick={handleNavClick} scrolled={scrolled}>
          How It Works
        </NavItem>
        <NavItem href="#testimonials" onClick={handleNavClick} scrolled={scrolled}>
          Testimonials
        </NavItem>
        <NavItem href="#pricing" onClick={handleNavClick} scrolled={scrolled}>
          Pricing
        </NavItem>
        <NavItem href="#contact" onClick={handleNavClick} scrolled={scrolled}>
          Contact
        </NavItem>
      </NavMenu>

      <NavBtn isOpen={isOpen}>
        <NavBtnLink href="https://github.com/IsaacPhiri/Mobile-App-Landing-Page">
          Download Now
        </NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar; 