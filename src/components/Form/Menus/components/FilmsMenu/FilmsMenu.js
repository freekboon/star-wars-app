import React, { useEffect, useState } from "react";
import DropdownMenu from "../../../../DropdownMenu/DropdownMenu";
import GraphService from "../../../../../services/GraphService/GraphService";

const query = `
  {
  allFilms {
    title
    id
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

  useEffect(() => {
    GraphService.fetchGraph(query)
      .then(data => setFilmNames(data.allFilms))
      .then(data => setFilms(data));
  }, []);

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
