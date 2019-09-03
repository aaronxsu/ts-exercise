import React from "react";
import { connect } from "react-redux";

import { ToDo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: ToDo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

export class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onButtonClick = (): void => {
    const { fetchTodos } = this.props;
    fetchTodos();
    this.setState({ fetching: true });
  };

  onToDoClick = (id: number): void => {
    const { deleteTodo } = this.props;
    deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: ToDo) => {
      return (
        <div key={todo.id} onClick={() => this.onToDoClick(todo.id)}>
          {todo.title}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching ? "LOADING" : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: ToDo[] } => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = { fetchTodos, deleteTodo };

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(_App);
