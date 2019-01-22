import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {

  render() {
    return (
    <div>

        {this.props.items.map(item => (
          <TodoItem key={item.id} id={item.id} title={item.title} body={item.body}
           owner={item.owner} duedate={item.duedate}
            onDeleteItem={this.props.onDeleteItem} />
        ))}
    
    </div>
    );
  }
}
export default TodoList
