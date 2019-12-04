import React from "react";
import FilmsMenu from "./components/FilmsMenu/FilmsMenu";
import SpeciesMenu from "./components/SpeciesMenu/SpeciesMenu";
import PlanetsMenu from "./components/PlanetsMenu/PlanetsMenu";
import { Container, Item } from "../../Grid/Grid";

export default () => {
  const applyFilter = (id, list) =>
    id ? !!list.find(item => item.id === id) : list;

  return (
    <Container wrap="wrap">
      <Item sm={1} md={3} px={1} my={1}>
        <FilmsMenu applyFilter={applyFilter} />
      </Item>
      <Item sm={1} md={3} px={1} my={1}>
        <SpeciesMenu applyFilter={applyFilter} />
      </Item>
      <Item sm={1} md={3} px={1} my={1}>
        <PlanetsMenu applyFilter={applyFilter} />
      </Item>
    </Container>
  );
};
