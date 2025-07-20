export type EditTodoInput = {
  todoId: string;
  newData: {
    title?: string;
    description?: string;
    dueDate?: Date;
    labelIds?: string[];
    newLabelTitles?: string[];
  };
};

export type EditTodoOutput = {
  todoId: string;
  title: string;
  description?: string;
  dueDate?: Date;
  doneDate?: Date;
  labels?: Array<{ id: string; name: string; color: string | null }>;
};
