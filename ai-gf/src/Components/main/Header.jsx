import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      Girls Game
    </StyledHeader>
  );
};

export default Header;
