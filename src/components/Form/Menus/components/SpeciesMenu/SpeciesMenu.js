import React, { useEffect, useState } from "react";
import DropdownMenu from "../../../../DropdownMenu/DropdownMenu";
import GraphService from "../../../../../services/GraphService/GraphService";
import { useDispatch, useSelector } from "react-redux";
import {
  addSpeciesCharacters,
  setFilter
} from "../../../../../actions/actions";

const query = `
 {
  allSpecies {
    name
    id
    films {
      id
    }
    people {
      name
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
      planets: species.people.map(
        person => person.homeworld && person.homeworld
      )
    };
  });

export default ({ applyFilter }) => {
  const [allSpecies, setAllSpecies] = useState([]);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    GraphService.fetchGraph(query)
      .then(data => mapHomeworldsToPlanets(data.allSpecies))
      .then(data => setAllSpecies(data));
  }, []);

  const handleSetFilter = id => {
    dispatch(setFilter({ category: "speciesId", id }));
    const selectedPlanet = allSpecies.find(species => species.id === id);
    dispatch(addSpeciesCharacters(selectedPlanet.people));
  };

  const filteredSpecies = allSpecies.filter(
    species => applyFilter(filter.filmId, species.films)
    // &&
    // applyFilter(filter.planetId, species.planets)
  );

  return (
    <DropdownMenu
      options={filteredSpecies}
      label="Select species"
      handleSelect={id => handleSetFilter(id)}
    />
  );
};
