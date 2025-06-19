import type { IRepository } from "common/repositories/repository.js";
import type { ILabel, ITodo } from "todo-entity";

export type GetTodoByLabelRepositoryInput = ILabel;
export type GetTodoByLabelRepositoryOutput = ITodo;

export interface GetTodoByLabelRepository
  extends IRepository<
    GetTodoByLabelRepositoryInput,
    GetTodoByLabelRepositoryOutput
  > {
  execute(input: GetTodoByLabelRepositoryInput): GetTodoByLabelRepositoryOutput;
}
