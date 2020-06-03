import React from 'react';
import BBLogo from '../assets/BBLogo.png';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
/* import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; */

const HeaderNav = () => {


  return(
      <>
          <div className="nav-bar-container">

              <Navbar  expand="lg" variant="light" bg="light">
              
              
                  <Navbar.Brand href="/">
                    <img className="nav-bar-logo" src={BBLogo} alt="Logo"/> 
                  </Navbar.Brand>
                
            
                  <div className="nav-bar-form-container">
                    <Form inline>
                      <FormControl type="text" placeholder="Search Character" className=" mr-sm-2" />
                      <Button type="submit">Find</Button>
                    </Form>
                  </div>
               
          
              </Navbar>
           
          </div>
        
      </>
  );
};

export default HeaderNav;