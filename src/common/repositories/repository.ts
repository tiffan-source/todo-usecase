export interface IRepository<I, O> {
  execute(input: I): O;
}
