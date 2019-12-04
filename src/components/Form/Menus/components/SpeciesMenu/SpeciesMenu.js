import React, { useEffect, useState } from "react";
import DropdownMenu from "../../../../DropdownMenu/DropdownMenu";
import GraphService from "../../../../../services/GraphService/GraphService";
import { useDispatch, useSelector } from "react-redux";
import {
  addCharacters,
  setSpeciesFilter
} from "../../../../../actions/actions";

const query = `
 {
  allSpecies {
    name
    id
    films {
      id
    }
    characters: people {
      name
      films {
        id
      }
      planets: homeworld {
        id
      }
      species {
        id
      }
    }
  }
}
`;

export default ({ applyFilter }) => {
  const [allSpecies, setAllSpecies] = useState([]);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    GraphService.fetchGraph(query).then(data => setAllSpecies(data.allSpecies));
  }, []);

  const handleSetFilter = id => {
    dispatch(setSpeciesFilter(id));
    const selectedSpecies = allSpecies.find(species => species.id === id);
    if (!filter.characters.length)
      dispatch(addCharacters(selectedSpecies.characters));
  };

  const filteredSpecies = allSpecies.filter(species =>
    applyFilter(filter.filmId, species.films)
  );

  return (
    <DropdownMenu
      options={filteredSpecies}
      label="Select species"
      handleSelect={id => handleSetFilter(id)}
    />
  );
};
