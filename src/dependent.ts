import { dependencyFunc } from "./dependency";

export const dependentFunc = (input: string): string => {
  return `dependent for ${input} - ${dependencyFunc(input)}`;
};
