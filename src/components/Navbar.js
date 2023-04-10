import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-right: 1rem;
`;

const NavLinkStyled = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  &.active {
    font-weight: bold;
  }
`;


function Navbar() {
  return (
 
    <Nav>
      <NavLinkStyled to="/">
        <FaHome /> Home
      </NavLinkStyled>
      <NavMenu>
        <NavItem>
          <NavLinkStyled to="/about">
            <FaUser /> About
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/projects">
            <FaProjectDiagram /> Projects
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/contact">
            <FaEnvelope /> Contact
          </NavLinkStyled>
        </NavItem>
      </NavMenu>
    </Nav>
    
  );
}

export default Navbar;

