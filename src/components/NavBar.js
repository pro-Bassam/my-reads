import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar style={{ background: "#2e7c31", marginBottom: 10 }}>
      <Container>
        <NavLink
          to="/"
          className="text-decoration-none text-light me-5"
          style={{ fontSize: 25, fontWeight: "bold" }}
        >
          MyReads
        </NavLink>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Nav className="me-auto">
          <NavLink
            to={"/"}
            className="text-decoration-none text-light me-4"
            style={{ fontSize: 18 }}
          >
            Shelfs
          </NavLink>
          <NavLink
            to={"/search"}
            className="text-decoration-none text-light"
            style={{ fontSize: 18 }}
          >
            Browse Books
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
