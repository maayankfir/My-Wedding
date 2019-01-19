import React, { Component } from 'react';
// import './App.css';
class CountDown extends Component {
    state = {
     days: 0,
     hours: 0,
     minutes: 0,
     seconds: 0,
     }
     componentWillMount() {
          this.getTimeUntil(this.props.weddingDate);
     }
     componentDidMount() {
          setInterval(() => this.getTimeUntil(this.props.weddingDate), 1000);
     }
     leading0(num) {
          return num < 10 ? '0' + num : num;
     }
     getTimeUntil(weddingDate) {
          const time = Date.parse(weddingDate) - Date.parse(new Date());
          if(time < 0) {
               this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

          } else {
               const seconds = Math.floor((time/1000)%60);
               const minutes = Math.floor((time/1000/60)%60);
               const hours = Math.floor((time/(1000*60*60))%24);
               const days = Math.floor(time/(1000*60*60*24));
               this.setState({ days, hours, minutes, seconds });
          }
     }
     render() {
          return(
               <div className="text-center">
                    <h2 className="CountDown-days">
                         {this.leading0(this.state.days)} Days
                    </h2>
                    <h3 className="CountDown-hours"> {this.leading0(this.state.hours)} Hours || {this.leading0(this.state.minutes)} Minutes || {this.leading0(this.state.seconds)} Seconds</h3>
               </div>
          );
     }
}
export default CountDown;
