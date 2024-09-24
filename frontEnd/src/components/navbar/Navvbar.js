import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "./Navvbar.css";
function Navvbar() {
  const expand = "md";
  return (
    <>
      <div
        className="Navvbar"
        style={{ direction: "rtl", backgroundColor: "pink" }}
      >
        <Navbar key={expand} expand={expand} className=" mb-3">
          <Container>
            <Navbar.Brand href="#" className="lalezar">
              نکست وان کد
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  className="lalezar"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  نکست وان کد
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to={"/"} className="nav-link">
                    خانه
                  </NavLink>
                  <NavLink to={"/addArticle"} className="nav-link">
                    ساخت مقاله
                  </NavLink>
                  <NavLink to={"/articles"} className="nav-link">
                    مقالات
                  </NavLink>
                  <NavLink to={"/courses"} className="nav-link">
                    دوره ها
                  </NavLink>
                  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Navvbar;
