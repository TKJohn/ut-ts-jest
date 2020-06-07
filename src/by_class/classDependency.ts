export class Dependency {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
  };

  public getName(prefix: string): string {
    return `${prefix}:${this.name}`;
  }
}