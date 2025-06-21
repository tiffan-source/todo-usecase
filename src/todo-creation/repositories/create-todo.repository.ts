import { type ITodo } from "todo-entity";
import type { IRepository } from "../../common/repositories/repository.js";

export interface ICreateTodoRepository
  extends IRepository<CreateTodoRepositoryInput, CreateTodoRepositoryOutput> {
  execute(
    input: CreateTodoRepositoryInput,
  ): Promise<CreateTodoRepositoryOutput>;
}

export type CreateTodoRepositoryInput = ITodo;
export type CreateTodoRepositoryOutput = ITodo;
