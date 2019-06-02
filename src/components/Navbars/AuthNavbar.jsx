import React from "react";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

// reactstrap components
import { Collapse, Navbar, NavItem, Nav, Container } from "reactstrap";

class AuthNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor);
  }
  // this function opens and closes the collapse on small devices
  // it also adds navbar-transparent class to the navbar when closed
  // ad bg-white when opened
  toggleCollapse = () => {
    let newState = {
      collapseOpen: !this.state.collapseOpen
    };
    if (!this.state.collapseOpen) {
      newState["color"] = "bg-white";
    } else {
      newState["color"] = "navbar-transparent";
    }
    this.setState(newState);
  };
  render() {
    return (
      <Navbar
        className={classnames("navbar-absolute fixed-top", this.state.color)}
        expand="lg"
      >
        <Container fluid>
          {/* <div className="navbar-wrapper">
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              {this.props.brandText}
            </NavbarBrand>
          </div> */}
          <button
            aria-controls="navigation-index"
            aria-expanded={false}
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-toggle="collapse"
            type="button"
            onClick={this.toggleCollapse}
          >
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </button>
          <Collapse isOpen={this.state.collapseOpen} navbar>
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink to="/" className="nav-link">
                  <i className="tim-icons icon-minimal-left" /> Site
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/auth/login" className="nav-link">
                  <i className="tim-icons icon-single-02" /> Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/auth/register" className="nav-link">
                  <i className="tim-icons icon-laptop" /> Cadastro
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/auth/sobre" className="nav-link">
                  <i className="tim-icons icon-align-center" /> Sobre
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default AuthNavbar;
