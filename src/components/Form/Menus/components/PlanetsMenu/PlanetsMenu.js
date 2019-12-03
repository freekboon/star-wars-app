import React, { useEffect, useState } from "react";
import DropdownMenu from "../../../../DropdownMenu/DropdownMenu";
import GraphService from "../../../../../services/GraphService/GraphService";

const query = `
  {
  allPlanets {
    name
    id
    films {
      id
    }
    residents {
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
          id: resident.species.map(species => species)
        };
      })
    };
  });

export default ({ filter, changeFilter, applyFilter }) => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    GraphService.fetchGraph(query)
      .then(data => mapResidentsToSpecies(data.allPlanets))
      .then(data => setPlanets(data));
  }, []);

  const filteredPlanets = planets.filter(
    planet =>
      applyFilter(filter.filmId, planet.films) &&
      applyFilter(filter.speciesId, planet.species)
  );

  return (
    <DropdownMenu
      options={filteredPlanets}
      handleSelect={id => changeFilter("planetId", id)}
    />
  );
};
