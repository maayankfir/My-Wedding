import React, { Component } from 'react';
import RsvpContainer from './RsvpContainer'
import TodosContainer from './TodosContainer'
import CountDown from '../components/CountDown'
import { Redirect, Route, Link} from 'react-router-dom';

class AdminContainer extends Component {
  state ={
    weddingDate: 'July, 4, 2019'
  }

  render() {
    console.log(this.props.userObj);
    return (
      <div className="admin">
      <h1> Hey Maayan & Itamar!</h1>
      <h2> Your Wedding is in : </h2>
      <CountDown weddingDate={this.state.weddingDate}/>
      <Link to="/guests">
        <button type="button">
          Guests
        </button>
      </Link>
      <Link to="/todo">
        <button type="button">
          To Do
        </button>
      </Link>

      </div>
    );
  }

}

export default AdminContainer;
