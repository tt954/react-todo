import React from "react";
import store from '../../store/store';


class TodoForm extends React.Component {
  state = {
    inputText: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ inputText: '' });
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
