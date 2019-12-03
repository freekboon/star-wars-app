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

const mapResidentsToSpecies = allPlanets =>
  allPlanets.map(planet => {
    return {
      ...planet,
      species: planet.residents.map(resident => {
        return {
          ...resident,
          species: resident.species.map(species => species)
        };
      })
    };
  });

export default ({ applyFilter }) => {
  const [planets, setPlanets] = useState([]);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    GraphService.fetchGraph(query)
      .then(data => mapResidentsToSpecies(data.allPlanets))
      .then(data => setPlanets(data));
  }, []);

  const handleSetFilter = id => {
    dispatch(setFilter({ category: "planetId", id }));
    const selectedPlanet = planets.find(planet => planet.id === id);
    dispatch(addPlanetCharacters(selectedPlanet.residents));
  };

  const filteredPlanets = planets.filter(
    planet => applyFilter(filter.filmId, planet.films)
    // &&
    // applyFilter(filter.speciesId, planet.species)
  );

  return (
    <DropdownMenu
      options={filteredPlanets}
      label="Select planet"
      handleSelect={id => handleSetFilter(id)}
    />
  );
};
