import React, { Component } from 'react'
import TodoList from '../components/Todo/TodoList'
class TodosContainer extends Component {

  state = {
    items: [],
    title: ''
  }

  componentDidMount(){
     fetch('/todos')
     .then(res => res.json())
     .then(res => {
       this.setState({
         items: res
       })
     })
   }

  handleTitleChange =(e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleAddItem = (e) => {
    e.preventDefault()
    var newItem = {
        id: Date.now(),
        title: this.state.title,
        done: false,
        user_id: 1
      }
    fetch('/todos', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      Accepts: "application/json"
          },
      body: JSON.stringify({ todo: newItem  })
    }).then(res => res.json())
      .then(this.setState((prevState) => ({
        items: prevState.items.concat(newItem), //concat = merge two or more arrays.
        title: ""
      })))
    }

    markItemCompleted =(itemId) => {
      var newItem = {
          id: itemId,
          title: this.state.title,
          done: true,
          user_id: 1
        }
      var updatedItems = this.state.items.map(item => {
        if (itemId === item.id)
          item.done = !item.done;
        return item
      })
      fetch(`/todos/${itemId}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        Accepts: "application/json"
            },
        body: JSON.stringify({ todo: newItem  })
        }).then(res => res.json())
        .then(this.setState({
          todo: newItem
        }))
    }

  handleDeleteItem =(itemId) => {
    var updatedItems = this.state.items.filter(item => {
      return item.id !== itemId;
    })
    fetch(`/todos/${itemId}`, {
      method: 'DELETE',
      })
    this.setState({
      items: [].concat(updatedItems)
    })
  }

  render() {
    return (
      <div>
        <h3 className="apptitle">Maayan & Itamar's To Do List </h3>
        <div className="row">
        <div className="col-md-3">
          <TodoList items={this.state.items} onItemCompleted={this.markItemCompleted} onDeleteItem={this.handleDeleteItem} />
        </div>
      </div>
      <form className="row">
        <div className="col-md-3">
          <input type="title" className="form-control" onChange={this.handleTitleChange} value={this.state.title} />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" onClick={this.handleAddItem} disabled={!this.state.title}>{"Add #" + (this.state.items.length + 1)}</button>
        </div>
      </form>
    </div>
      )
    }
  }
export default TodosContainer
