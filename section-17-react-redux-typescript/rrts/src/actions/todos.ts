import axios from "axios";
import { Dispatch } from "redux";

import { ActionTypes } from "./types";

const url = "https://jsonplaceholder.typicode.com/todos";

export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchToDoAction {
  type: ActionTypes.fetchTodos;
  payload: ToDo[];
}

export interface DeleteToDoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<ToDo[]>(url);

    dispatch<FetchToDoAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data
    });
  };
};

export const deleteTodo = (id: number): DeleteToDoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id
  };
};
