import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css"
import { NavLink } from 'react-router-dom';
import logo from "../../img/logonav.png"

export default function NavbarMenu() {

  const navlink = [
    {
      id: 1,
      label: 'Bosh sahifa',
      url: '/',
    },
    {
      id: 2,
      label: 'Biz haqimizda',
      url: '/about',
    },
    {
      id: 3,
      label: "BABMA hayoti",
      url: "/life",
    },
    {
      id: 4,
      label: "Matbuot hizmati",
      url: "/press",
    },
    {
      id: 5,
      label: "Aloqa",
      url: "/contact",
    }
  ]
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="navbar-brand-image" width={200} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
          <Nav>
            {
              navlink.map(item => (
                <Nav.Link className='d-flex align-items-center' key={item.id} as={NavLink} to={item.url} activeClassName="active">
                  {item.label}
                </Nav.Link>
              ))
            }
            <div class="dropdown classs">
              <button class="dropbtn"><i className="sl-flag flag-uz"></i> O'zbekcha</button>
              <div class="dropdown-content">
                <a href="/"><i className="sl-flag flag-uz text-decoration-none"><div id="english"></div></i> O'zbekcha</a>
                <a href="/"><i className="sl-flag flag-usa text-decoration-none"><div id="english"></div></i> English</a>
                <a href="/ru"><i className="sl-flag flag-ru text-decoration-none"><div id="english"></div></i> Russian</a>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
