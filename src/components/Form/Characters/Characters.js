import React, { useEffect } from "react";
import { Container, Item } from "../../Grid/Grid";
import APIService from "../../../services/APIService/APIService";
import { useDispatch, useSelector } from "react-redux";
import { addCharacters } from "../../../actions/actions";

export default ({ characterIds }) => {
  const characters = useSelector(state => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    APIService.fetchAPI().then(data => dispatch(addCharacters(data.results)));
  }, [dispatch]);
  return (
    <Container wrap="wrap">
      {characters.map(character => (
        <Item key={character.name} sm={2} md={3} lg={4} xl={5} px={1} my={1}>
          {character.name}
        </Item>
      ))}
    </Container>
  );
};
