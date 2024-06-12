import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #f0f0f0;
  color: #333;
  text-align: center;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <StyledFooter>
      About | Contact | Privacy Policy
    </StyledFooter>
  );
};

export default Footer;
