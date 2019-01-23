import React, { Component } from 'react'
import itamar from './itamar.jpeg'
import maayan from './maayan.jpeg'
import { Card, CardDeck, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row } from 'reactstrap';

class TodoItem extends Component {

  deleteItem = (e) =>{
    this.props.onDeleteItem(this.props.id)
  }

  render() {
    return (
      <CardDeck>
      <Row>
      <Card className="card">
      <CardSubtitle>{this.props.owner}</CardSubtitle>
       <CardImg className="card-img" top width="10%" src={(this.props.owner === "Itamar") ? (itamar) : (maayan)} alt="" />
       <CardBody>
         <CardTitle>Title: {this.props.title}</CardTitle>
         <CardText>Description: {this.props.body}</CardText>
         <CardText>Due to: {this.props.duedate}</CardText>
         <Button onClick={this.deleteItem}><span className="glyphicon glyphicon-trash"></span></Button>
       </CardBody>
       </Card>
       </Row>
     </CardDeck>


    )
  }
}
export default TodoItem
