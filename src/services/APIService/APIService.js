const apiUrl = "https://swapi.co/api/people/";

const fetchAPI = async () => {
  try {
    const response = await fetch(apiUrl);
    const json = await response.json();
    return json;
  } catch (e) {
    console.error(e);
  }
};

export default {
  fetchAPI
};
