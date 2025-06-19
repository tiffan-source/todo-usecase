export type RemoveLabelsFromTodoInput = {
  labelIds: string[];
  todoId: string;
};

export type RemoveLabelsFromTodoOutput = {
  todoId: string;
  title: string;
  description?: string;
  dueDate?: Date;
  doneDate?: Date;
  labels?: Array<{ id: string; name: string; color: string | null }>;
};
