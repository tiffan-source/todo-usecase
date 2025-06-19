import type { IRepository } from "common/repositories/repository.js";
import { type ITodo } from "todo-entity";

export interface ICreateTodoRepository
  extends IRepository<CreateTodoRepositoryInput, CreateTodoRepositoryOutput> {
  execute(input: CreateTodoRepositoryInput): CreateTodoRepositoryOutput;
}

export type CreateTodoRepositoryInput = ITodo;
export type CreateTodoRepositoryOutput = ITodo;
