import React, { Component } from 'react'
import TodoList from '../components/Todo/TodoList'
import { Table } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class TodosContainer extends Component {

  state = {
    items: [],
    item: {
    title: '',
    body: '',
    owner: '',
    duedate: ''
  }
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

  handleChange =(e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAddItem = (e) => {
    e.preventDefault()
    var newItem = {
        title: this.state.title,
        body: this.state.body,
        owner: this.state.owner,
        duedate: this.state.duedate,
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
        title: "",
        body: "",
        owner: "",
        duedate: ""
      })))
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
    // console.log(this.state);
    return (

      <div className="text-center">
        <h3 className="apptitle">Maayan & Itamar's To Do List </h3>

           <Form>
            <FormGroup>
            <Label for="title">Note Title</Label>
            <Input type="title"
            name="title"
            id="title"
            placeholder="Write your note title here.."
            onChange={this.handleChange} value={this.state.title} />
            </FormGroup>
            <FormGroup>
            <Label for="body"> Description</Label>
            <Input type="body"
            name="body"
            id="body"
            placeholder="Write your note here.."
            onChange={this.handleChange} value={this.state.body}/>
            </FormGroup>
            <FormGroup>
            <Label for="owner">Who is in charge? </Label>
            <Input type="select" name="owner" id="owner" onChange={this.handleChange} value={this.state.owner}>
              <option>Maayan</option>
              <option>Itamar</option>
            </Input>
            </FormGroup>
            <FormGroup>
             <Label for="duedate">To do Date </Label>
             <Input
               type="date"
               name="duedate"
               id="duedate"
               placeholder="To do Date"
               onChange={this.handleChange} value={this.state.date}
             />
         </FormGroup>
        </Form>
          <button className="btn btn-primary" onClick={this.handleAddItem} disabled={!this.state.title}>{"Add #" + (this.state.items.length + 1)}</button>
          <br></br>
          <br></br>
          <br></br>
          <TodoList items={this.state.items}
           onDeleteItem={this.handleDeleteItem} />
        </div>
      )
    }
  }
export default TodosContainer
