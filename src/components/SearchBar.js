import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

const SearchBar = () => (

  <Navbar className="bg-light justify-content-between">
    <Form inline>
       <FormControl type="text" placeholder="Search Character" className=" mr-sm-2" />
            <Button type="submit">Find</Button>
    </Form>
  </Navbar>
);

export default SearchBar;