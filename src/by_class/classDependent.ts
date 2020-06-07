import { Dependency } from './classDependency';

export class Dependent {
  private readonly dependency: Dependency;

  constructor(dependency: Dependency) {
    this.dependency = dependency;
  }

  public getResult = (prefix: string): string => {
    return `Dependent: ${this.dependency.getName(prefix)}`;
  }
}