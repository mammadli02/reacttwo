import React, { Component } from "react";
// import styles from "./Todo.module.css";
import { TodoInput } from "../TodoInput"
import { TodoList } from "../TodoList";

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      text: "",
     
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(title) {
   

    const todo = {
      id: Date.now(),
      title,
      created: new Date(),
    };

    const newList = [todo, ...this.state.list];

    this.setState({ list: newList });
  }

  render() {
    console.log("this content", this.state.list);
    return (
      <div >
        <h1>To Do section</h1>
        <h1>Todo app</h1>
        <TodoInput addTodo={this.addTodo} />
        <TodoList list={this.state.list} />
      </div>
    );
  }
}

export default Todo;