import type { Repository } from "common/repositories/repository.js";
import type { ITodo } from "todo-entity";

export type GetAllTodoRepositoryOutput = Array<ITodo>;

export interface GetAllTodoRepository
  extends Repository<void, GetAllTodoRepositoryOutput> {
  execute(): GetAllTodoRepositoryOutput;
}
