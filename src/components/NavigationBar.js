import { Navbar, Container, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">IQBAL FILMS</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">TRENDING</Nav.Link>
            <Nav.Link href="#action">ACTION</Nav.Link>
            <Nav.Link>CARTOON</Nav.Link>
            <Nav.Link>HORROR</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
