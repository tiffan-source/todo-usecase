import type { Repository } from "common/repositories/repository.js";
import { type ITodo } from "todo-entity";

export interface CreateTodoRepository
  extends Repository<CreateTodoRepositoryInput, CreateTodoRepositoryOutput> {
  execute(input: CreateTodoRepositoryInput): CreateTodoRepositoryOutput;
}

export type CreateTodoRepositoryInput = ITodo;
export type CreateTodoRepositoryOutput = ITodo;
