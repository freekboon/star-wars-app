import React, { useEffect, useState } from "react";
import DropdownMenu from "../../../../DropdownMenu/DropdownMenu";
import GraphService from "../../../../../services/GraphService/GraphService";

const query = `
 {
  allSpecies {
    name
    id
    films {
      id
    }
    people(filter: { homeworld: { id_not: null } }) {
      homeworld {
        id
      }
    }
  }
}
`;

const mapHomeworldsToPlanets = allSpecies =>
  allSpecies.map(species => {
    return {
      ...species,
      planets: species.people.map(person => person.homeworld)
    };
  });

export default ({ filter, changeFilter, applyFilter }) => {
  const [allSpecies, setAllSpecies] = useState([]);

  useEffect(() => {
    GraphService.fetchGraph(query)
      .then(data => mapHomeworldsToPlanets(data.allSpecies))
      .then(data => {
        setAllSpecies(data);
      });
  }, []);

  const filteredSpecies = allSpecies.filter(
    species =>
      applyFilter(filter.filmId, species.films) &&
      applyFilter(filter.planetId, species.planets)
  );

  return (
    <DropdownMenu
      options={filteredSpecies}
      handleSelect={id => changeFilter("speciesId", id)}
    />
  );
};
