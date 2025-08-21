import { type ITodo } from "todo-entity";
import type { IRepository } from "../../common/repositories/repository.js";

export interface ICreateTodoRepository extends IRepository {
  createTodo(
    input: CreateTodoRepositoryInput,
  ): Promise<CreateTodoRepositoryOutput>;
}

export type CreateTodoRepositoryInput = ITodo;
export type CreateTodoRepositoryOutput = ITodo;
