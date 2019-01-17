import React, { Component } from 'react';

class Weather extends Component {

  componentDidMount(){
    fetch('api.openweathermap.org/data/2.5/weather?id=293397')
    .then(res => res.json())
    .then(console.log)
  }

  render() {
    return (
      <div></div>
    );
  }

}

export default Weather;
