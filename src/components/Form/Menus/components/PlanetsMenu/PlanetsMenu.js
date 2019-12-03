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
      species:
        planet.residents &&
        planet.residents.map(resident => resident.species.id)
    };
  });

export default () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    GraphService.fetchGraph(query)
      .then(data => mapResidentsToSpecies(data.allPlanets))
      .then(data => setPlanets(data));
  }, []);
  return <DropdownMenu options={planets} />;
};
