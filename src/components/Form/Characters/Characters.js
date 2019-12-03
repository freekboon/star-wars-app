import React, { useEffect, useState } from "react";
import { Container, Item } from "../../Grid/Grid";
import APIService from "../../../services/APIService/APIService";
import { useDispatch, useSelector } from "react-redux";

export default () => {
  const { allCharacters } = useSelector(state => state.characters);
  const dispatch = useDispatch();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const names = allCharacters.map(character => character.name);
    APIService.fetchAPI(names).then(data => setResults(data));
  }, [allCharacters, dispatch]);
  return (
    allCharacters && (
      <Container wrap="wrap">
        {results.map(character => (
          <Item key={character.name} sm={2} md={3} lg={4} xl={5} px={1} my={1}>
            {character.name}
          </Item>
        ))}
      </Container>
    )
  );
};
