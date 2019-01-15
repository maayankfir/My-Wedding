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
          this.getTimeUntil(this.props.deadline);
     }
     componentDidMount() {
          setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
     }
     leading0(num) {
          return num < 10 ? '0' + num : num;
     }
     getTimeUntil(deadline) {
          const time = Date.parse(deadline) - Date.parse(new Date());
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

                    <h1 className="CountDown-days">
                         {this.leading0(this.state.days)} Days
                    </h1>
                    <h3 className="CountDown-hours">
                         {this.leading0(this.state.hours)} Hours
                    </h3>
                    <h3 className="CountDown-minutes">
                         {this.leading0(this.state.minutes)} Minutes
                    </h3>
                    <h3 className="CountDown-seconds">
                         {this.leading0(this.state.seconds)} Seconds
                    </h3>
               </div>
          );
     }
}
export default CountDown;
