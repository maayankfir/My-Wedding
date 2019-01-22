import React, { Component } from 'react';
import RsvpList from '../components/Rsvp/RsvpList'

class RsvpContainer extends Component {

  state = {
    rsvpList: [],
    rsvpListLoaded: false
  }

  componentDidMount() {
    fetch('/rsvps')
    .then(res => res.json())
    // .then(console.log)
    .then(data => {
      this.setState({
        rsvpList: data,
        rsvpListLoaded: true
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    console.log(this.props.userObj);
    return (
      <div className="rsvp-list">
      {(this.state.rsvpListLoaded) ? (<RsvpList rsvpList={this.state.rsvpList}/>)
         : ( <h2> L   O   A   D   I   N   G . . . </h2>)}
      </div>
    );
  }

}

export default RsvpContainer;
