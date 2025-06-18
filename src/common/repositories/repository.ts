export interface Repository<I, O> {
  execute(input: I): O;
}
