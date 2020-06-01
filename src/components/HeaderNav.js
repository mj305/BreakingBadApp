import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const HeaderNav = () => {

  return(
      <>
        <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand href="/"> Breadking Bad </Navbar.Brand>
          <Form inline>
            <FormControl type="text" placeholder="Search Character" className=" mr-sm-2" />
            <Button type="submit">Find</Button>
          </Form>
        </Navbar>
      </>
  );
};

export default HeaderNav;