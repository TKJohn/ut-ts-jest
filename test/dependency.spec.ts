import { dependencyFunc } from "../src/dependency";

it("dependency return", () => {
  expect(dependencyFunc("input")).toEqual("dependency for input");
});
