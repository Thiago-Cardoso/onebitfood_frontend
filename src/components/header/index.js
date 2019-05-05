import React from 'react';
 
import { Navbar, Container } from 'rbx';
import LogoImage from '../../assets/images/logo-v1-horizontal.png';
import SearchBox from '../search_box_component';
 
import "../../styles/header.scss";
 
const Header = () => (
  <div class="top-navbar">
    <Container>
      <Navbar>
          <Navbar.Brand>
            <img src={LogoImage} />
          </Navbar.Brand>
 
          <Navbar.Menu>
            <Navbar.Segment as="div" class="navbar-item navbar-center">
              <SearchBox />
            </Navbar.Segment>
          </Navbar.Menu>
      </Navbar>
    </Container>
  </div>
);
 
export default Header;