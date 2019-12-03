import APIService from "./APIService";

let options = {};

beforeEach(() => {
  const fetchMock = Promise.resolve({
    json: () => Promise.resolve({})
  });
  global.fetch = jest.fn().mockImplementation(() => fetchMock);
  options = {
    body: "{}",
    headers: { "Content-Type": "application/json" },
    method: "POST"
  };
});

afterEach(() => {
  global.fetch.mockClear();
  delete global.fetch;
});

describe("fetching data", () => {
  it("should fetch data", () => {
    APIService.fetchAPI();
    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:3001/characters",
      options
    );
  });
});
