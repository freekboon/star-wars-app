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
      planets:
        species.people && species.people.map(person => person.homeworld.id)
    };
  });

export default () => {
  const [allSpecies, setAllSpecies] = useState([]);

  useEffect(() => {
    GraphService.fetchGraph(query)
      .then(data => mapHomeworldsToPlanets(data.allSpecies))
      .then(data => setAllSpecies(data));
  }, []);
  return <DropdownMenu options={allSpecies} />;
};
