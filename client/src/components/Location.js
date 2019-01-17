import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

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
        <div className="container">
          <h2>Ray, Tel - Aviv</h2>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
              <li data-target="#myCarousel" data-slide-to="4"></li>
            </ol>

          <div className="carousel-inner">
            <div className="item active">
              <img src='http://raytlv.co.il/wp-content/uploads/2016/06/15037096_659981677496968_3491117520158390605_n.jpg' alt="" />
            </div>

            <div className="item">
              <img src='http://raytlv.co.il/wp-content/uploads/2016/06/ray-130.jpg' alt="" />
            </div>

            <div className="item">
              <img src='http://raytlv.co.il/wp-content/uploads/2016/06/ray-12.jpg' alt="" />
            </div>

            <div className="item">
              <img src='http://raytlv.co.il/wp-content/uploads/2016/06/18527825_1686738568010489_6837615404330720698_n.jpg' alt="" />
            </div>

            <div className="item">
              <img src='http://raytlv.co.il/wp-content/uploads/2016/06/18485536_1686734851344194_6400496544741256077_n.jpg' alt="" />
            </div>
          </div>

          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <br></br>
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
