export const getName = jest.fn();
export const Dependency = jest.fn().mockImplementation(() => {
  return { getName: getName };
});
