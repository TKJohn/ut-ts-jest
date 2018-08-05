import { dependencyFunc } from "../src/dependency";
import { dependentFunc } from "../src/dependent";

// mock the dependency
jest.mock("../src/dependency", () => {
  return {
    dependencyFunc: jest.fn()
  };
});

describe("modify mocked dependency", () => {
  it("dependency has been mocked", () =>
    expect(jest.isMockFunction(dependencyFunc)).toBe(true));

  it("should use modified mocked dependency", () => {
    (<jest.Mock>dependencyFunc).mockImplementation(() => {
      return "modified mock implementation";
    });

    expect(dependentFunc("mock")).toEqual(
      "dependent for mock - modified mock implementation"
    );
  });
});
