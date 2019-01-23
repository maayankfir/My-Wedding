import React, { PropTypes, Component } from 'react';
import two from '../images/two.JPG'
import { Link } from 'react-router-dom'
import CountDown from './CountDown'

class Dashboard extends Component {

  state ={
    weddingDate: 'July, 4, 2019'
  }

  render() {

  return (
    <div className="text-center">
      <br></br><br></br>
      <CountDown weddingDate={this.state.weddingDate}/>
      <img className="background" src={two} alt="" />
    </div>
    )
  }

}


export default Dashboard;
