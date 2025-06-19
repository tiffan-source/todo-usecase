import type { IRepository } from "common/repositories/repository.js";
import type { ITodo } from "todo-entity";

export type GetTodoByIdRepositoryInput = string;
export type GetTodoByIdRepositoryOutput = ITodo;

export interface GetTodoByIdRepository
  extends IRepository<GetTodoByIdRepositoryInput, GetTodoByIdRepositoryOutput> {
  execute(input: GetTodoByIdRepositoryInput): GetTodoByIdRepositoryOutput;
}
