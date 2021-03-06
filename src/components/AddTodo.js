import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {

  state = {
    title: ''
  }

  handleInputChange = (e) => this.setState({ title: e.target.value });

  submitTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.submitTodo}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add Todo"
          value={this.state.title}
          onChange={this.handleInputChange}
        ></input>
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        ></input>
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
