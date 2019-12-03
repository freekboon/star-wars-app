const apiUrl = "http://localhost:3001/characters";

const fetchAPI = async names => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ names: names })
    });
    const json = await response.json();
    return json;
  } catch (e) {
    console.error(e);
  }
};

export default {
  fetchAPI
};
