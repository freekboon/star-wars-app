const graphUrl = "https://swapi.graph.cool/";

const fetchGraph = async query => {
  try {
    const response = await fetch(graphUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query: query })
    });
    const json = await response.json();
    return await json.data;
  } catch (error) {
    console.error("Une erreur!", error);
  }
};

export default {
  fetchGraph
};
