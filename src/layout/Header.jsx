import { NavLink } from "react-router"

import Container from "../components/Container"
import Text from "../components/Text"

import brandImage from "../assets/brand-favicon.jpg"
import Box from "../components/Box"
import Cart from "../components/Cart"

function Header() {
  return (
<>
      <div className="navbar__wrapper">
        <header className="navbar__container">
          <Container className="d-flex space-between m-t">
            <NavLink to="/" className="d-flex align-center justify-center">
              <img src={brandImage} alt="" className="logo mr-4" />
              <Text as="h1">Juguetería Cósmica</Text>
            </NavLink>
          </Container>
        </header>

        <nav className="navbar__menu">
          <Container>
            <ul className="navbar__navigation">
              <li><NavLink to="/about-us">Sobre nosotros</NavLink></li>
              <li><NavLink to="/upload">Alta</NavLink></li>
              <li><NavLink to="/contact-us">Contactanos</NavLink></li>
              <li><Cart/></li>
            </ul>
          </Container>
        </nav>
      </div>
 </>
  );
}

export default Header