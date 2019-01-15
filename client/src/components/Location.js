import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Location extends Component {
  static defaultProps = {
    center: {
      lat: 32.051047,
      lng: 34.765015
    },
    zoom: 11
  };

  render() {
    return (
      <div>
      <h1 className="text-center">Ray, Tel-Aviv, Israel </h1>
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDvfRTGygDeEHE4Lo7U-9iDMC0VU2YAp4o" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

        </GoogleMapReact>
      </div>
      </div>
    );
  }
}

export default Location;
