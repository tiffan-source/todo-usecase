import type { Repository } from "common/repositories/repository.js";
import type { ITodo } from "todo-entity";

export type GetTodoByIdRepositoryInput = string;
export type GetTodoByIdRepositoryOutput = ITodo;

export interface GetTodoByIdRepository
  extends Repository<GetTodoByIdRepositoryInput, GetTodoByIdRepositoryOutput> {
  execute(input: GetTodoByIdRepositoryInput): GetTodoByIdRepositoryOutput;
}
