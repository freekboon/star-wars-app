import React, { useEffect, useState } from "react";
import DropdownMenu from "../../../../DropdownMenu/DropdownMenu";
import GraphService from "../../../../../services/GraphService/GraphService";
import { useDispatch, useSelector } from "react-redux";
import { addPlanetCharacters, setFilter } from "../../../../../actions/actions";

const query = `
  {
  allPlanets {
    name
    id
    films {
      id
    }
    residents {
      name
      species {
        id
      }
    }
  }
}
`;

export default ({ applyFilter }) => {
  const [planets, setPlanets] = useState([]);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    GraphService.fetchGraph(query).then(data => setPlanets(data));
  }, []);

  const handleSetFilter = id => {
    dispatch(setFilter({ category: "planetId", id }));
    const selectedPlanet = planets.find(planet => planet.id === id);
    dispatch(addPlanetCharacters(selectedPlanet.residents));
  };

  const filteredPlanets = planets.filter(planet =>
    applyFilter(filter.filmId, planet.films)
  );

  return (
    <DropdownMenu
      options={filteredPlanets}
      label="Select planet"
      handleSelect={id => handleSetFilter(id)}
    />
  );
};
