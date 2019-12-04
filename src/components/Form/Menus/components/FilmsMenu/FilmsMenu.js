import React, { useEffect, useState } from "react";
import DropdownMenu from "../../../../DropdownMenu/DropdownMenu";
import GraphService from "../../../../../services/GraphService/GraphService";
import { useDispatch, useSelector } from "react-redux";
import { addCharacters, setFilmFilter } from "../../../../../actions/actions";

const query = `
  {
  allFilms {
    name: title
    id
    characters {
      name
      films {
        id
      }
      species {
        id
      }
      homeworld {
        id
      }
    }
    species {
      id
    }
    planets {
      id
    }
  }
}
`;

export default ({ applyFilter }) => {
  const [films, setFilms] = useState([]);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    GraphService.fetchGraph(query).then(data => setFilms(data.allFilms));
  }, []);

  const handleSetFilter = id => {
    dispatch(setFilmFilter(id));
    const selectedFilm = films.find(film => film.id === id);
    if (!filter.characters.length)
      dispatch(addCharacters(selectedFilm.characters));
  };

  const filteredFilms = films.filter(
    film =>
      applyFilter(filter.speciesId, film.species) &&
      applyFilter(filter.planetId, film.planets)
  );

  return (
    <DropdownMenu
      options={filteredFilms}
      label="Select film"
      handleSelect={id => handleSetFilter(id)}
    />
  );
};
