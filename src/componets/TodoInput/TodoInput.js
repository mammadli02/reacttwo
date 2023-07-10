import React, { Component } from "react";
import PropTypes from 'prop-types';
export class TodoInput extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
    this.handleChangeText = this.handleChangeText.bind(this);
   
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeText(e) {
    const text = e.target.value;
    this.setState({ text  });
  }
  handleSubmit() {
    this.props.addTodo(this.state.text);
     this.setState({ text: "" });
  
  }
  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.handleChangeText} />
        <button onClick={this.handleSubmit}>Send</button>
      </div>
    );
  }
}
export default TodoInput;
TodoInput.propTypes={
  text: PropTypes.string.isRequired,
 
}