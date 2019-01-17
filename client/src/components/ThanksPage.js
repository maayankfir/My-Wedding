import React, { Component } from 'react';

class ThanksPage extends Component {

  render() {
    console.log(this.props.firstname);
    return (
      <div>
        <h1> Thank you for your RSVP! </h1>
          <h2> Maayan and Itamar </h2>
      </div>
    );
  }

}

export default ThanksPage;
