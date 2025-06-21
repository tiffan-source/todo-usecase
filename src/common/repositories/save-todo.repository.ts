import type { ITodo } from "todo-entity";
import type { IRepository } from "./repository.js";

export type SaveTodoRepositoryInput = ITodo;
export type SaveTodoRepositoryOutput = ITodo;

export interface SaveTodoRepository
  extends IRepository<SaveTodoRepositoryInput, SaveTodoRepositoryOutput> {
  execute(input: SaveTodoRepositoryInput): Promise<SaveTodoRepositoryOutput>;
}
