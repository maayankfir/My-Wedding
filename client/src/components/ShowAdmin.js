import React from 'react'

const ShowAdmin = (props) => {
  return (
    <tr>
      <td>{props.rsvp.firstname}</td>
      <td>{props.rsvp.lastname}</td>
      <td>{props.rsvp.attendees}</td>
      <td>{(props.rsvp.rsvp) ? "Accepts" : "Declines"}</td>
    </tr>
  )
}

export default ShowAdmin
