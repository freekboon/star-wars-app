import React, { useEffect, useState } from "react";
import DropdownMenu from "../../../../DropdownMenu/DropdownMenu";
import GraphService from "../../../../../services/GraphService/GraphService";
import { useDispatch, useSelector } from "react-redux";
import { addCharacters, setPlanetFilter } from "../../../../../actions/actions";

const query = `
  {
  allPlanets {
    name
    id
    films {
      id
    }
    characters: residents {
      name
      films {
        id
      }
      species {
        id
      }
      planets: homeworld {
        id
      }
    }
  }
}
`;

export default ({ applyFilter }) => {
  const [planets, setPlanets] = useState([]);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    GraphService.fetchGraph(query).then(data => setPlanets(data.allPlanets));
  }, []);

  const handleSetFilter = id => {
    dispatch(setPlanetFilter(id));
    const selectedPlanet = planets.find(planet => planet.id === id);
    if (!filter.characters.length)
      dispatch(addCharacters(selectedPlanet.characters));
  };

  const filteredPlanets = planets.filter(planet =>
    applyFilter(filter.filmId, planet.films)
  );

  return (
    <DropdownMenu
      options={filteredPlanets}
      label="Select planet"
      handleSelect={id => handleSetFilter(id)}
    />
  );
};
