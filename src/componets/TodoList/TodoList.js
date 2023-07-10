import React, { Component } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
export class TodoList extends Component {
  render() {
    const { list } = this.props;
    const content = list?.map((todo, index) => (
      <div key={todo.id} >
      <Card sx={{ maxWidth: 205 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {todo.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {new Date(todo.created).getFullYear()} 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
      </div>
    ));
    return <div>{content}</div>;
  }
}
export default TodoList;