import { createAction } from "./actionHelpers";

describe("creating an action", () => {
  it("should create an action", () => {
    const someAction = createAction("SOME_ACTION");
    expect(someAction("with-payload").type).toEqual("SOME_ACTION");
    expect(someAction("with-payload").payload).toEqual("with-payload");
  });
});
