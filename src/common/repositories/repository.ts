export interface IRepository<I = unknown, O = unknown> {
  execute(input: I): Promise<O>;
}
