import React, { Component } from 'react';

class ThanksPage extends Component {

  render() {
    console.log("thanks page", this.props);
    return (
      <div className="text-center">
        <h1>{this.props.username}</h1>
        <h1> Thank you for your RSVP! </h1>
          <h2> Maayan and Itamar </h2>
      </div>
    );
  }

}

export default ThanksPage;
