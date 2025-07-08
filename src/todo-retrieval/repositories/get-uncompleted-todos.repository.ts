import type { ITodo } from "todo-entity";
import type { IRepository } from "../../common/repositories/repository.js";

export type GetUncompletedTodosRepositoryOutput = Array<ITodo>;

export interface IGetUncompletedTodosRepository
  extends IRepository<void, GetUncompletedTodosRepositoryOutput> {
  execute(): Promise<GetUncompletedTodosRepositoryOutput>;
}
