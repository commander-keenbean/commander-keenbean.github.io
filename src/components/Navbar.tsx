import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import { Properties } from 'csstype';

const navBarStyle : Properties<string | number, string & {}> = {
    marginTop: '10px',
    marginBottom: '40px',
    paddingLeft: '20px',
};

const navBarBrandStyle : Properties<string | number, string & {}> = {
    color: 'white', 
    borderRight: 'solid',
    borderColor: 'red',
    paddingRight: '20px',
};

const navBarLinkStyle : string = JSON.stringify({
    color: 'white', 
});

const NavigationBar = () => {
  return (
    <Navbar style={navBarStyle} bg="dark" expand="lg">
      <Navbar.Brand style={ navBarBrandStyle } href="#home">Commander Keenbean</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/" style={navBarLinkStyle} >
            <Nav.Link >Home</Nav.Link>
          </LinkContainer> 
          <LinkContainer to="/about" style={navBarLinkStyle} >
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact" style={navBarLinkStyle} >
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
