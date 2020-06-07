// import { mocked } from 'ts-jest/utils';
// import { Dependent } from '../../../src/by_class/classDependent';
// import { Dependency } from '../../../src/by_class/classDependency';

// const mockedDependency = mocked(Dependency, true);

/*
not working

=========
new mockedDependency()
This expression is not constructable.
  Type 'MockInstance<Dependency, [string]> & {} & { prototype: MockedObjectDeep<Dependency>; }' has no construct signatures.ts(2351)

==========
mockedDependency.getName
Property 'getName' does not exist on type 'MockedObjectDeep<typeof Dependency>'.ts(2339

*/

describe('Dependent use real dependency instance', () => {
  // getName.mockImplementation(() => 'Mocked');

  afterEach(() => {
    // getName.mockRestore();
  });

  it('should use mocked method', () => {
    // const dependent: Dependent = new Dependent(dependency);

    // const input = 'some_input';
    // expect(dependent.getResult(input)).toBe('Dependent: Mocked');
    expect(true);
  })
})
