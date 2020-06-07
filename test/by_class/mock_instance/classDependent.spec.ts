import { Dependent } from '../../../src/by_class/classDependent';
import { Dependency } from '../../../src/by_class/classDependency';

const getName = jest.fn() as ((input: string) => string) & jest.Mock;
const dependency = {
  getName: getName
} as unknown as Dependency

describe('Dependent use real dependency instance', () => {
  afterEach(() => {
    getName.mockRestore();
  });

  it('should use mocked method', () => {
    getName.mockImplementation(() => 'Mocked');
    const dependent: Dependent = new Dependent(dependency);

    const input = 'some_input';
    expect(dependent.getResult(input)).toBe('Dependent: Mocked');
  })
})
