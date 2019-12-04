import React, { useEffect, useState } from "react";
import { Container, Item } from "../../Grid/Grid";
import APIService from "../../../services/APIService/APIService";
import { useDispatch, useSelector } from "react-redux";
import CharacterThumb from "./components/CharacterThumb/CharacterThumb";
import WithLoadingScreen from "../../WithLoadingScreen/WithLoadingScreen";

export default () => {
  const { characters } = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const names = characters.map(character => character.name);
    if (names.length) {
      setLoading(true);
      APIService.fetchAPI(names)
        .then(data => setResults(data))
        .then(() => setLoading(false));
    }
  }, [characters, dispatch]);

  return (
    <WithLoadingScreen loading={loading}>
      <Container wrap="wrap">
        {results.map(character => (
          <Item key={character.name} sm={2} md={3} lg={4} xl={5} px={1} my={1}>
            <CharacterThumb character={character} />
          </Item>
        ))}
      </Container>
    </WithLoadingScreen>
  );
};
