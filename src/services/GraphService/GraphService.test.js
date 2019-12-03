import GraphService from "./GraphService";

let options = {};

beforeEach(() => {
  const fetchMock = Promise.resolve({
    json: () => Promise.resolve({})
  });
  global.fetch = jest.fn().mockImplementation(() => fetchMock);
  options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };
});

afterEach(() => {
  global.fetch.mockClear();
  delete global.fetch;
});

describe("fetching a query", () => {
  it("should fetch a query", () => {
    const query = "{ some { query } }";
    GraphService.fetchGraph(query);
    expect(global.fetch).toHaveBeenCalledWith("https://swapi.graph.cool/", {
      ...options,
      body: JSON.stringify({ query: query })
    });
  });
});
