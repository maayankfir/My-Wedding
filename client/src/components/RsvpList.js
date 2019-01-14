import React, { Component } from 'react';
import ShowAdmin from './ShowAdmin'


const RsvpList = (props) => {

    return (
      <div>
      
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">
                First Name
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Last Name
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                How Many
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                RSVP
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                EMAIL
              </h3>
            </th>
          </tr>
          {props.rsvpList.map( rsvp => {
        return <ShowAdmin key={rsvp.id} rsvp={rsvp}/>
      })}
        </tbody>
      </table>
      </div>
    );
  }



export default RsvpList;
