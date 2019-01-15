import React, { Component } from 'react';
import RsvpList from '../components/RsvpList'

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

    return (
      <div className="rsvp-list">
      {(this.state.rsvpListLoaded) ? (<RsvpList rsvpList={this.state.rsvpList}/>)
         : (<p> Loading ... </p>) }
      </div>
    );
  }

}

export default RsvpContainer;
