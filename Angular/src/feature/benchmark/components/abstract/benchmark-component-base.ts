export abstract class BenchmarkComponentBase {
  public abstract runTest(): Promise<number>;
  public abstract setupTest(): void;
}