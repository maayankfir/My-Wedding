import React, { Component } from 'react';
import {GoogleApiWrapper, Marker , Map, InfoWindow} from 'google-maps-react';
import Header from './Header'
const style = {

width: '100%',
height: '80%'
}

class Location extends Component {

  state = {
   showingInfoWindow: false,
   activeMarker: {},
   selectedPlace: {},
 };

 onMarkerClick = (props, marker, e) =>
   this.setState({
     selectedPlace: props,
     activeMarker: marker,
     showingInfoWindow: true
   });

 onMapClicked = (props) => {
   if (this.state.showingInfoWindow) {
     this.setState({
       showingInfoWindow: false,
       activeMarker: null
     })
   }
 };

  render() {

    return (
      <div className="text-center">
      <Header />
      <br></br>
      <a href= "https://www.google.com/flights?hl=en#flt=/m/02_286..2019-02-07*./m/02_286.2019-02-11;c:USD;e:1;ls:1w;sd:0;t:h"> <img src="data:image/jpeg;base64,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" alt="" /></a>
      <br></br>
      <br></br>
      <Map google={this.props.google}
      style={style}
          onClick={this.onMapClicked} initialCenter={
          {lat: 32.051047,
          lng: 34.765015}
          }>
        <Marker onClick={this.onMarkerClick}
                name={<div>
                 <p>Ray</p>
                 <p>14, Shlabim St, Tel Aviv-Yafo, Israel</p>
               </div>} />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDvfRTGygDeEHE4Lo7U-9iDMC0VU2YAp4o")
})(Location)
