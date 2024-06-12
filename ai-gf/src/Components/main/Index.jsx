import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import CharacterList from './CharacterList';
import Footer from './Footer';

const IndexContainer = styled.main`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

const Index = () => {
  return (
    <div>
      <Header />
      <IndexContainer>
        <CharacterList />
      </IndexContainer>
      <Footer />
    </div>
  );
};

export default Index;
