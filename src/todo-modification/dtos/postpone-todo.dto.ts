export type PostponeTodoInput = {
  todoId: string;
  newDueDate: Date;
};

export type PostponeTodoOutput = {
  todoId: string;
  title: string;
  description?: string;
  dueDate?: Date;
  doneDate?: Date;
  labels?: Array<{ id: string; name: string; color: string | null }>;
};
