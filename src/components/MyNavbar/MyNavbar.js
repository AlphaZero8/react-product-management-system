import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import Routes from '../Routes';
import '../ProductEntry/ProductEntry.css';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import LoginModal from '../Modal/LoginModal';
import './MyNavbar.css';

const MyNavbar = (props) => {
  const [modalShow, setModalShow] = useState(false);
  console.log(props.isLoggedIn);

  return (
    <div>
      <Router>
        <Navbar bg="light" expand="lg" sticky="top">
          <Navbar.Brand>
            <LinkContainer to="/">
              <Nav.Link>Inventory</Nav.Link>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {props.isLoggedIn ? (
                <LinkContainer to="/add-product">
                  <Nav.Link>Add Product</Nav.Link>
                </LinkContainer>
              ) : (
                <div>
                  <Nav.Link onClick={() => setModalShow(true)}>
                    Add Product
                  </Nav.Link>
                  <LoginModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    redirectpath="/add-product"
                  />
                </div>
              )}
              <LinkContainer to="/top-viewed">
                <Nav.Link>Top Viewed</Nav.Link>
              </LinkContainer>
              {!props.isLoggedIn ? (
                <div>
                  <LinkContainer to="/sign-up">
                    <Button
                      variant="outline-primary"
                      className="main-nav__item"
                    >
                      Sign up
                    </Button>
                  </LinkContainer>{' '}
                  <LinkContainer to="/log-in">
                    <Button
                      variant="outline-success"
                      className="main-nav__item"
                    >
                      Log In
                    </Button>
                  </LinkContainer>
                </div>
              ) : null}
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search Product Name"
                className="mr-sm-2"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="icon main-nav__item"
              />
              <FontAwesomeIcon
                icon={faUserCircle}
                className="icon main-nav__item"
                title="View Profile"
              />
              {/* <Button variant="outline-success" disabled={disabled}>Search</Button> */}
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

export default connect(mapStateToProps)(withRouter(MyNavbar));
