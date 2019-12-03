import React, { useEffect, useState } from "react";
import DropdownMenu from "../../../../DropdownMenu/DropdownMenu";
import GraphService from "../../../../../services/GraphService/GraphService";
import { useDispatch, useSelector } from "react-redux";
import { addFilmCharacters, setFilter } from "../../../../../actions/actions";

const query = `
  {
  allFilms {
    title
    id
    characters {
      name
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

const setFilmNames = films =>
  films.map(film => {
    return {
      ...film,
      name: film.title
    };
  });

export default ({ applyFilter }) => {
  const [films, setFilms] = useState([]);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    GraphService.fetchGraph(query)
      .then(data => setFilmNames(data.allFilms))
      .then(data => setFilms(data));
  }, []);

  const handleSetFilter = id => {
    dispatch(setFilter({ category: "filmId", id }));
    const selectedFilm = films.find(film => film.id === id);
    dispatch(addFilmCharacters(selectedFilm.characters));
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
