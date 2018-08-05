import { dependentFunc } from "../src/dependent";
import { dependencyFunc } from "../src/dependency";

// mock the dependency
jest.mock("../src/dependency", () => {
  return {
    dependencyFunc: jest.fn()
  };
});

describe("modify mocked dependency", () => {
  it("dependency has been mocked", () => {
    expect(jest.isMockFunction(dependencyFunc)).toBeTruthy;
  });

  it("should use modified mocked dependency", () => {
    dependencyFunc.mockImplementation(() => {
      return "modified mock implementation";
    });

    expect(dependentFunc("mock")).toEqual(
      "dependent for mock - modified mock implementation"
    );
  });
});
