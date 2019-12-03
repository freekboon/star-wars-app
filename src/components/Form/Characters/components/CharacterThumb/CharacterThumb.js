import React from "react";
import styled from "styled-components";

const Thumb = styled.div`
  width: 100%;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.normal};
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
`;

const Name = styled.div`
  text-align: center;
  padding: 1rem;
`;

export default ({ character }) => (
  <Thumb>
    <Image src={character.imageUrl} alt={character.name} />
    <Name>{character.name}</Name>
  </Thumb>
);
