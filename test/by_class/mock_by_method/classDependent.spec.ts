import { Dependent } from '../../../src/by_class/classDependent';
import { Dependency } from '../../../src/by_class/classDependency';

describe('Dependent use real dependency instance', () => {
  const dependency: Dependency = new Dependency('what_ever');
  const spy = jest.spyOn(dependency, 'getName').mockImplementation(() => 'Mocked');

  afterEach(() => {
    spy.mockRestore();
  });

  it('should use mocked method', () => {
    const dependent: Dependent = new Dependent(dependency);

    const input = 'some_input';
    expect(dependent.getResult(input)).toBe('Dependent: Mocked');
  })
})
