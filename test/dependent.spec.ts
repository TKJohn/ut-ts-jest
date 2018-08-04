import { dependentFunc } from "../src/dependent";

it("return empty", () => {
  expect(dependentFunc("test1")).toEqual("hello test1");
});
