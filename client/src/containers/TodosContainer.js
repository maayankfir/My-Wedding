import React, { Component } from 'react'
import TodoList from '../components/Todo/TodoList'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';

class TodosContainer extends Component {

  state = {
    items: [],
    item: {
    title: '',
    body: '',
    owner: '',
    duedate: '',
    formIsOpen: false
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
        duedate: "",
        formIsOpen: false
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

  openForm = () => {
    if (this.state.formIsOpen === true) {
      return (
        <div>
        <Form className="App">
         <FormGroup>
         <Label for="title">Note Title</Label>
         <Input
         className="input"
         type="title"
         name="title"
         id="title"
         placeholder="Write your note title here.."
         onChange={this.handleChange} value={this.state.title} />
         </FormGroup>
         <FormGroup>
         <Label for="body"> Description</Label>
         <Input
         className="input"
         type="body"
         name="body"
         id="body"
         placeholder="Write your note here.."
         onChange={this.handleChange} value={this.state.body}/>
         </FormGroup>
         <FormGroup>
         <Label for="owner">Who is in charge? </Label>
         <Input
           className="input"
           type="select"
           name="owner"
           id="owner"
           onChange={this.handleChange}
           value={this.state.owner}>
           <option>Please choose one</option>
           <option>Maayan</option>
           <option>Itamar</option>
         </Input>
         </FormGroup>
         <FormGroup>
          <Label for="duedate">To do Date </Label>
          <Input
           className="input"
           type="date"
           name="duedate"
           id="duedate"
           placeholder="To do Date"
           onChange={this.handleChange} value={this.state.date}
           />
          </FormGroup>
          </Form>

       <Button className="input" onClick={this.handleAddItem} disabled={!this.state.title}>{"Add #" + (this.state.items.length + 1)}</Button>
       </div>
      )
    } else {
      return (
        <div>
        <br></br>
        <Button className="input" onClick={this.handleClick}>Add New Task</Button>
        </div>
      )
    }
  }

  handleClick = () => {
    this.setState({
      formIsOpen: !this.state.formIsOpen
    })
  }

  render() {

    return (
      <div className="notes" >
      <h1>Maayan & Itamar's To Do List </h1>
      <br></br>
        {this.openForm()}
        
          <TodoList items={this.state.items}
           onDeleteItem={this.handleDeleteItem} />
        </div>
      )
    }
  }
export default TodosContainer
