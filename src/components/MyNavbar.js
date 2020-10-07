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

import Routes from './Routes';
import './ProductEntry/ProductEntry.css';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

const MyNavbar = (props) => {
  let [disabled, setDisabled] = useState(false);
  const { location } = props;
  if (
    location.pathname.match('/add-product') ||
    location.pathname.match('/edit-product')
  ) {
    setDisabled(true);
  }

  return (
    <div>
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <LinkContainer to="/">
              <Nav.Link>Inventory</Nav.Link>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/add-product">
                <Nav.Link>Add Product</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/top-viewed">
                <Nav.Link>Top Viewed</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/sign-up" style={{marginLeft: '200px'}}>
                <Button variant="outline-primary">Sign up</Button>
              </LinkContainer>{' '}
              <LinkContainer to="/log-in" style={{marginLeft: '20px'}}>
                <Button variant="outline-success">Log In</Button>
              </LinkContainer>
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
                disabled={disabled}
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="icon"
                style={{ marginLeft: '15px' }}
              />
              <FontAwesomeIcon
                icon={faUserCircle}
                className="icon"
                style={{ marginLeft: '15px' }}
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

export default withRouter(MyNavbar);
