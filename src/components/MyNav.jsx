import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

function MyNav() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="text-danger">
      <Container
        fluid
        className="d-flex justify-content-between align-items-center text-danger"
      >
        <div className="d-flex align-items-center text-danger ">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border border-danger"
          />
          <Navbar.Collapse id="basic-navbar-nav text-danger">
            <Nav className="ms-3">
              <Nav.Link href="#home" className="text-danger">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="text-danger">
                Link
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>

        <Navbar.Brand className="mx-auto  d-lg-block">
          <img
            src="/assets/logos/music.svg"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        <div>
          <Nav>
            <Nav.Link href="#login" className="text-danger">
              Accedi
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  )
}

export default MyNav
