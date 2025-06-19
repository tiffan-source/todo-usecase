import type { ITodo } from "todo-entity";
import type { Repository } from "./repository.js";

export type SaveTodoRepositoryInput = ITodo;
export type SaveTodoRepositoryOutput = ITodo;

export interface SaveTodoRepository
  extends Repository<SaveTodoRepositoryInput, SaveTodoRepositoryOutput> {
  execute(input: SaveTodoRepositoryInput): SaveTodoRepositoryOutput;
}
