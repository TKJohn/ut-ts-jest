import { dependentFunc } from "../src/dependent";
import { dependencyFunc } from "../src/dependency";

// mock the dependency, even if it has been imported.
jest.mock("../src/dependency", () => {
  return {
    dependencyFunc: jest.fn(() => "dependency has been mocked")
  };
});

describe("mock and spy", () => {
  it("should use mocked dependency", () => {
    expect(dependentFunc("mock")).toEqual(
      "dependent for mock - dependency has been mocked"
    );

    // check the jest.fn can work.
    expect(jest.isMockFunction(dependencyFunc)).toBe(true);
    expect(dependencyFunc).toHaveBeenCalledTimes(1);
    expect(dependencyFunc).toHaveBeenCalledWith("mock");
  });
});
