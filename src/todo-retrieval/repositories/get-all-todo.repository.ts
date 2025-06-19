import type { IRepository } from "common/repositories/repository.js";
import type { ITodo } from "todo-entity";

export type GetAllTodoRepositoryOutput = Array<ITodo>;

export interface GetAllTodoRepository
  extends IRepository<void, GetAllTodoRepositoryOutput> {
  execute(): GetAllTodoRepositoryOutput;
}
