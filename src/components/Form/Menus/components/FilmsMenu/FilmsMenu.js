import React, { useEffect, useState } from "react";
import DropdownMenu from "../../../../DropdownMenu/DropdownMenu";
import GraphService from "../../../../../services/GraphService/GraphService";
import { useDispatch } from "react-redux";
import { addCharacters } from "../../../../../actions/actions";

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

export default ({ filter, changeFilter, applyFilter }) => {
  const [films, setFilms] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    GraphService.fetchGraph(query)
      .then(data => setFilmNames(data.allFilms))
      .then(data => {
        dispatch(addCharacters(data.characters));
        setFilms(data);
      });
  }, [dispatch]);

  const filteredFilms = films.filter(
    film =>
      applyFilter(filter.speciesId, film.species) &&
      applyFilter(filter.planetId, film.planets)
  );

  return (
    <DropdownMenu
      options={filteredFilms}
      handleSelect={id => changeFilter("filmId", id)}
    />
  );
};
