import React from 'react';
import styled from 'styled-components';
import "./foter.css"
import Button from 'react-bootstrap/Button';

const StyledFooter = styled.footer`
  background-color: #; /* Set the background color to yellow */
  color: #000/* Text color */
  padding: 20px;
`;

function Footer() {
  return (
    <div className=''>
    <StyledFooter>
      <div className="contact-info">
        <p>Contact us: example@email.com</p>
        <p>123 Street Name, City, Country</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <div className="linkft">
      
        <Button variant="outline-secondary" className='btdaw'>contact us</Button>{' '}
        <Button variant="outline-secondary" className='btdaw'>a propos</Button>{' '}
        <Button variant="outline-secondary" className='btdaw'>Link</Button>{' '}
          

      </div>
    </StyledFooter>
    </div>
  );
}

export default Footer;
