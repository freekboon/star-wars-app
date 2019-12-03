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

export default () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    GraphService.fetchGraph(query)
      .then(data => setFilmNames(data.allFilms))
      .then(data => setFilms(data));
  }, []);
  return <DropdownMenu options={films} />;
};
