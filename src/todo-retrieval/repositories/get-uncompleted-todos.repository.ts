import type { Repository } from "common/repositories/repository.js";
import type { ITodo } from "todo-entity";

export type GetUncompletedTodosRepositoryOutput = Array<ITodo>;

export interface GetUncompletedTodosRepository
  extends Repository<void, GetUncompletedTodosRepositoryOutput> {
  execute(): GetUncompletedTodosRepositoryOutput;
}
