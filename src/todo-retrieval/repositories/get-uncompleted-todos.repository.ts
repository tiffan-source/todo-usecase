import type { IRepository } from "common/repositories/repository.js";
import type { ITodo } from "todo-entity";

export type GetUncompletedTodosRepositoryOutput = Array<ITodo>;

export interface GetUncompletedTodosRepository
  extends IRepository<void, GetUncompletedTodosRepositoryOutput> {
  execute(): GetUncompletedTodosRepositoryOutput;
}
