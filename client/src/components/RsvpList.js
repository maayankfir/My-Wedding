import React, { Component } from 'react';

class RsvpList extends Component {
  constructor(){
    super()
    this.state = {
      rsvpList: null,
      rsvpListLoaded: false
    }
  }

  ComponentDidMount() {
    fetch('http://localhost:3001/rsvps')
    .then(res => res.json())
    .then(res => {
      this.setState({
        rsvpList: res,
        rsvpListLoaded: true
      })
    }).catch(err => console.log(err))
  }

  renderRsvps(){
      return this.state.rsvpList.map( rsvp => {
        return (
          <div className="rsvp" key={rsvp.id}>
            <p> {rsvp.firstname} </p>
            <p> {rsvp.lastname} </p>
          </div>
        )
      })
  }

  render() {
    console.log(this.state);
    return (
      <div className="rsvp-list">
      {(this.state.rsvpListLoaded) ? this.renderRsvps()
         : <p> Loading ... </p> }
      </div>
    );
  }

}

export default RsvpList;
