import type { Repository } from "common/repositories/repository.js";
import type { ITodo } from "todo-entity";

export type DeleteTodoRepositoryInput = ITodo;
export type DeleteTodoRepositoryOutput = boolean;

export interface DeleteTodoRepository
  extends Repository<DeleteTodoRepositoryInput, DeleteTodoRepositoryOutput> {
  execute(input: DeleteTodoRepositoryInput): DeleteTodoRepositoryOutput;
}
