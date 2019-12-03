import fetch from "isomorphic-fetch";

const swapiUrl = "https://swapi.co/api/people/?search=";

const getCharacterByName = async name => {
  try {
    const response = await fetch(`${swapiUrl}${name}`);
    const json = await response.json();
    return json.results[0];
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
