import type { ITodo } from "todo-entity";
import type { IRepository } from "./repository.js";

export type GetTodoByIdRepositoryInput = string;
export type GetTodoByIdRepositoryOutput = ITodo;

export interface IGetTodoByIdRepository
  extends IRepository<GetTodoByIdRepositoryInput, GetTodoByIdRepositoryOutput> {
  execute(
    input: GetTodoByIdRepositoryInput,
  ): Promise<GetTodoByIdRepositoryOutput>;
}
