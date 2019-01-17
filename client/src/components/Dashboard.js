import React, { PropTypes, Component } from 'react';
import background_image from '../images/background_image.jpg'
import { Link } from 'react-router-dom'
import CountDown from './CountDown'

class Dashboard extends Component {

  state ={
    deadline: 'July, 4, 2019'
  }
  render() {

  return (
    <div>
      <CountDown deadline={ this.state.deadline }/>
      <img src={background_image} alt="" style={{

      height: 650,
      width: 480,
      }}/>

    </div>
    )
  }

}


export default Dashboard;
