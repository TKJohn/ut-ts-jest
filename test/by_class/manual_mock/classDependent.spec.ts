import { Dependent } from '../../../src/by_class/classDependent';
import { Dependency, getName } from './__mocks__/classDependency';

describe('Dependent use real dependency instance', () => {
  const dependency = new Dependency();
  getName.mockImplementation(() => 'Mocked');

  afterEach(() => {
    getName.mockRestore();
  });

  it('should use mocked method', () => {
    const dependent: Dependent = new Dependent(dependency);

    const input = 'some_input';
    expect(dependent.getResult(input)).toBe('Dependent: Mocked');
  })
})
