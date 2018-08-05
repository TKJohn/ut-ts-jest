import { dependentFunc } from "../src/dependent";

// just mock the dependency
jest.mock("../src/dependency", () => {
  return {
    dependencyFunc: () => "dependency has been mocked"
  };
});

describe("just mock, not spy", () => {
  jest.mock("../src/dependency", () => {
    return {
      dependencyFunc: () => "mock in sub context is not enabled"
    };
  });

  it("should use mocked dependency", () => {
    expect(dependentFunc("mock")).toEqual(
      "dependent for mock - dependency has been mocked"
    );
  });
});
