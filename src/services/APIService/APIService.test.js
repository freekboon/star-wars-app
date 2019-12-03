import APIService from "./APIService";

beforeEach(() => {
  const fetchMock = Promise.resolve({
    json: () => Promise.resolve({})
  });
  global.fetch = jest.fn().mockImplementation(() => fetchMock);
});

afterEach(() => {
  global.fetch.mockClear();
  delete global.fetch;
});

describe("fetching data", () => {
  it("should fetch data", () => {
    APIService.fetchAPI();
    expect(global.fetch).toHaveBeenCalledWith("https://swapi.co/api/people/");
  });
});
