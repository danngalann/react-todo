import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import uuid from "uuid";

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Make martian beer',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Do a barrel roll',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Find Atlantis',
        completed: false
      }
    ]
  };

  toogleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed; // Toogle
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title, // In ES6, this is allowed since the key and the value have the same name.
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={props => {
              return (
                <div className="container">
                  <Todos
                    todos={this.state.todos}
                    toogleComplete={this.toogleComplete}
                    delTodo={this.delTodo}
                  />
                  <AddTodo addTodo={this.addTodo} />
                </div>
              );
            }}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
