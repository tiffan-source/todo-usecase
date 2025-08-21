import type { ITodo } from "todo-entity";
import type { IRepository } from "./repository.js";

export type SaveTodoRepositoryInput = ITodo;
export type SaveTodoRepositoryOutput = ITodo;

export interface ISaveTodoRepository extends IRepository {
  saveTodo(input: SaveTodoRepositoryInput): Promise<SaveTodoRepositoryOutput>;
}
