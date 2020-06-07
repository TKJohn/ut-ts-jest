import { Dependency } from '../../src/by_class/classDependency';

const name = 'some_name';

describe('Dependency', () => {
  const dependency: Dependency = new Dependency(name);
  it('should return string', () => {
    const input = 'some_input';
    expect(dependency.getName(input)).toBe('some_input:some_name');
  })
})
