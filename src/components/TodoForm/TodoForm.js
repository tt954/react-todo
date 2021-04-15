import React from "react";

class TodoForm extends React.Component {
  state = {
    inputText: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  update = (e) => this.setState({ inputText: e.target.value });

  render() {
    return (
      <form className="todoform" onSubmit={this.handleSubmit}>
        <input
          placeholder="What needs to be done?"
          value={this.state.inputText}
          onChange={this.update}
        ></input>
        <button type="submit">+</button>
      </form>
    );
  }
}

export default TodoForm;
