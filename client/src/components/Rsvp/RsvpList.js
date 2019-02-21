import React, { Component } from 'react';
import 'react-table/react-table.css'
import ReactTable from 'react-table'

class RsvpList extends Component {
  //filter by rsvp
  //count guest
  state = {
    filterdList: this.props.rsvpList,
    userObj: this.props.userObj,
    usersList: []
  }

render(){
  let usersAccept = [...this.state.filterdList].filter(rsvp => rsvp.rsvp === true).length
  let usersDecline = [...this.state.filterdList].filter(rsvp => rsvp.rsvp === false).length
  let total = [...this.state.filterdList].map(rsvp => rsvp.attendees)
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  let totalGuestsComing = total.reduce(reducer)
  // console.log(totalGuestsComing);

    return (

      <div className="input">
      <br></br>
      <br></br>
        <p> Guests Replay: {this.state.filterdList.length}</p>
        <p> Guests Accepted: {usersAccept}</p>
        <p> Guests Declined: {usersDecline}</p>

        <p>Total Guest Coming: {totalGuestsComing}</p>
        <div>
        <ReactTable
          data={this.state.filterdList}
          columns={[
            {
              Header: "First Name",
              columns: [
                {
                  Header: "sort",
                  accessor: "firstname"
                }
              ]
            },
            {
              Header: "Last Name",
              columns: [
                {
                  Header: "sort",
                  accessor: "lastname"
                }
              ]
            },
            {
              Header: "RSVP",
              columns: [
                {
                  Header: "sort",
                  accessor: "rsvp",
                  Cell: row => (
                    <span>
                      {
                      row.value === true ? 'Accepted'
                      : row.value === false ? `Declined`
                      : 'Did not respond'
                    }
                    </span>

                  )
                }
              ]
            },
            {
              Header: "HOW MANY",
              columns: [
                {
                  Header: "sort",
                  accessor: "attendees"
                }
              ]
            },
            {
              Header: 'comment',
              columns: [
                {
                  Header: "",
                  accessor: "comment"
                }
              ]
            }
          ]}
          defaultPageSize={20}
          style={{
            height: "400px"
          }}
          className="-striped -highlight"
        />
        <br />
        </div>
      </div>

    )
  }
}


export default RsvpList;
