import React, { useState } from "react";
import FilmsMenu from "./components/FilmsMenu/FilmsMenu";
import SpeciesMenu from "./components/SpeciesMenu/SpeciesMenu";
import PlanetsMenu from "./components/PlanetsMenu/PlanetsMenu";
import { Container, Item } from "../../Grid/Grid";

const initialFilter = {
  filmId: undefined,
  speciesId: undefined,
  planetId: undefined
};

export default () => {
  const [filter, setFilter] = useState(initialFilter);

  const applyFilter = (id, list) =>
    id ? list && list.find(item => item.id === id) : list;

  const changeFilter = (category, id) => {
    setFilter({ ...filter, [category]: id });
  };

  return (
    <Container wrap="wrap">
      <Item sm={1} md={3} px={1} my={1}>
        <FilmsMenu
          filter={filter}
          changeFilter={changeFilter}
          applyFilter={applyFilter}
        />
      </Item>
      <Item sm={1} md={3} px={1} my={1}>
        <SpeciesMenu
          filter={filter}
          changeFilter={changeFilter}
          applyFilter={applyFilter}
        />
      </Item>
      <Item sm={1} md={3} px={1} my={1}>
        <PlanetsMenu
          filter={filter}
          changeFilter={changeFilter}
          applyFilter={applyFilter}
        />
      </Item>
    </Container>
  );
};
