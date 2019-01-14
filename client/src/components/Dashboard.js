import React, { Component } from 'react';
import background_image from '../images/background_image.jpg'
import { Link } from 'react-router-dom'

class Dashboard extends Component {

  render() {

  return (
    <div>

    <img src={background_image} alt="" style={{
        alignSelf: 'center',
        height: 650,
        width: 480,
      }}/>
      
    </div>
    )
  }

}

export default Dashboard;
