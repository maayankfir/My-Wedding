import React, { Component } from 'react'

class TodoItem extends Component {

  markCompleted =(e) => {
    this.props.onItemCompleted(this.props.id)
  }
  deleteItem = (e) =>{
    this.props.onDeleteItem(this.props.id)
  }

  componentDidMount() {
    if (this._listItem) {
      this._listItem.classList.add("highlight")

      setTimeout((listItem) => {
        listItem.classList.remove("highlight")
      }, 500, this._listItem)
    }
  }
  render() {
    var itemClass = "form-check todoitem " + (this.props.completed ? "done" : "undone")
    return (
      <li className={itemClass} ref={li => this._listItem = li }>
        <label className="form-check-label">
          <input type="checkbox" className="form-check-input" onChange={this.markCompleted} /> {this.props.title}
        </label>
        <button type="button" className="btn btn-danger btn-sm" onClick={this.deleteItem}>x</button>
      </li>
    )
  }
}
export default TodoItem
