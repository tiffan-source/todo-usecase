import type { IRepository } from "common/repositories/repository.js";
import type { ITodo } from "todo-entity";

export type DeleteTodoRepositoryInput = ITodo;
export type DeleteTodoRepositoryOutput = boolean;

export interface IDeleteTodoRepository
  extends IRepository<DeleteTodoRepositoryInput, DeleteTodoRepositoryOutput> {
  execute(input: DeleteTodoRepositoryInput): DeleteTodoRepositoryOutput;
}
