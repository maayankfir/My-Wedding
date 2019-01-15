import React, { Component } from 'react';
// import ShowAdmin from './ShowAdmin'

import 'react-table/react-table.css'
import ReactTable from 'react-table'
import matchSorter from 'match-sorter'


class RsvpList extends Component {
  //filter by rsvp
  //count guest
  state = {
    filterdList: this.props.rsvpList
  }



  // handleChange = (e) => {
  //   let newArry;
  //     // newArry = [...this.state.filterdList].filter( rsvp => {
  //     if (e.target.value === "true"){
  //       newArry = [...this.state.filterdList].filter( rsvp => {
  //       return rsvp.rsvp })
  //     } else if (e.target.value === "false") {
  //       newArry = [...this.state.filterdList].filter( rsvp => {
  //       return rsvp.rsvp === false})
  //     } else {
  //
  //     return newArry
  //   }
  //   this.setState({
  //     filterdList: newArry
  //   })
  // }

render(){

  // console.log(this.state.filterdList);
    return (
      <div>
        <ReactTable
          data={this.state.filterdList}
          columns={[
            {
              Header: " First Name",
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
                  accessor: "firstname"
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
            // {
    //   Header: "RSVP",
    //   columns: [
    //     {
    //       Header: "SORT",
    //       accessor: "rsvp",
    //       id: "rsvp",
    //       Cell: ({ value }) => (value === true ? "Accepted" : "Declined"),
    //       filterMethod: (filter, row) => {
    //         if (filter.value === "all") {
    //           return true;
    //         }
    //         if (filter.value === "true") {
    //           return row[filter.id] = true;
    //         }
    //         return row[filter.id] = false;
    //       },
    //       Filter: ({ filter, onChange }) =>
    //         <select
    //           onChange={event => onChange(event.target.value)}
    //           style={{ width: "100%" }}
    //           value={filter ? filter.value : "all"}
    //         >
    //           <option value="all">Show All</option>
    //           <option value="true">Accepted</option>
    //           <option value="false">Declined</option>
    //         </select>
    //     }
    //   ]
    // },
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
            height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
          }}
          className="-striped -highlight"
        />
        <br />

      </div>
      // <div>
      // <select onChange={this.handleChange}>
      //   <option value="all">All</option>
      //   <option value="true">Accepted</option>
      //   <option selected value="false">Declined</option>
      // </select>
      //
      //
      // <table className="ui celled striped padded table">
      //   <tbody>
      //     <tr>
      //       <th>
      //         <h3 className="ui center aligned header">
      //           First Name
      //         </h3>
      //       </th>
      //       <th>
      //         <h3 className="ui center aligned header">
      //           Last Name
      //         </h3>
      //       </th>
      //       <th>
      //         <h3 className="ui center aligned header">
      //           How Many
      //         </h3>
      //       </th>
      //       <th>
      //         <h3 className="ui center aligned header">
      //           RSVP
      //         </h3>
      //       </th>
      //       <th>
      //         <h3 className="ui center aligned header">
      //           EMAIL
      //         </h3>
      //       </th>
      //     </tr>
      //     {this.state.filterdList.map( rsvp => {
      //   return <ShowAdmin key={rsvp.id} rsvp={rsvp}/>
      // })}
      //   </tbody>
      // </table>
      // </div>
    );
  }
}


export default RsvpList;
