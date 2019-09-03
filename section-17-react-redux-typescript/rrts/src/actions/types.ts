import { FetchToDoAction, DeleteToDoAction } from "./todos";

export enum ActionTypes {
  fetchTodos,
  deleteTodo
}

export type Action = FetchToDoAction | DeleteToDoAction;
