import fetch from "isomorphic-fetch";

const swapiUrl = "https://swapi.co/api/people/?search=";

const getIdFromUrl = async url => {
  const parts = await url.split("/");
  return parts[parts.length - 2];
};

const getCharacterByName = async name => {
  try {
    const response = await fetch(`${swapiUrl}${name}`);
    const json = await response.json();
    const data = await json.results[0];
    const id = await getIdFromUrl(data.url);
    return {
      ...data,
      imageUrl: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    };
  } catch (error) {
    return error;
  }
};

const getCharacters = async (req, res) => {
  const { names } = req.body;
  try {
    const collectPromises = await names.map(name => getCharacterByName(name));
    const response = await Promise.all(collectPromises);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
};

export default {
  getCharacters
};
