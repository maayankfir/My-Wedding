import React, { Component } from 'react';
import RsvpContainer from './RsvpContainer'
import TodosContainer from './TodosContainer'
import { Redirect, Route} from 'react-router-dom';

class AdminContainer extends Component {

  render() {
    console.log(this.props.userObj);
    return (
      <div className="admin">
       
      </div>
    );
  }

}

export default AdminContainer;
