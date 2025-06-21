export interface IRepository<I, O> {
  execute(input: I): Promise<O>;
}
