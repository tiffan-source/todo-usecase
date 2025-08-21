import type { ITodo } from "todo-entity";
import type { IRepository } from "../../common/repositories/repository.js";

export type GetTodoByIdRepositoryInput = string;
export type GetTodoByIdRepositoryOutput = ITodo | null;

export interface IGetTodoByIdRepository extends IRepository {
  getTodoById(
    input: GetTodoByIdRepositoryInput,
  ): Promise<GetTodoByIdRepositoryOutput>;
}
