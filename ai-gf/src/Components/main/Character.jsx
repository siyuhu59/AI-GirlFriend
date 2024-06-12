import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const CharacterCard = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  text-align: center;
  padding: 1rem;

  text-decoration: none;
  color: black;
`;

const Image = styled.img`
  max-width: 100%;
  margin-bottom: 1rem;
`;

const Character = ({ image, title, data }) => {
    return (
      <Link to={`/character/${title}`}>
        <CharacterCard>
          <Image src={image} alt={title} />
          <h3>{title}</h3>
          <p>{data}</p>
        </CharacterCard>
      </Link>
  );
};

export default Character;
