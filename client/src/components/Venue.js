import React, { Component } from 'react';
import Header from './Header'
class Venue extends Component {

  render() {

    return (
      <div>
        <Header />
        <div className="container">
          <h2 className="ceremony" >Wedding Ceremony</h2>
            <h3 className="ceremony"> Thursday, July 4, 2019</h3>
            <h3 className="ceremony"> 7:30 PM</h3>

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
              <img src="https://www.raytlv.co.il/media/source/ray-130.jpg" alt="" />
            </div>

            <div className="item">
              <img src='https://www.raytlv.co.il/media/source/Liad-Kobi-27.7.17-%C2%A9-LUZ-943.jpg' alt="" />
            </div>

            <div className="item">
              <img src='https://www.raytlv.co.il/media/source/A-196-of-237.jpg' alt="" />
            </div>

            <div className="item">
              <img src='https://www.raytlv.co.il/media/source/18485536_1686734851344194_6400496544741256077_n.jpg' alt="" />
            </div>

            <div className="item">
              <img src='https://www.raytlv.co.il/media/source/Liad-_-Kobi-27.7.17-%C2%A9-LUZ-1313.jpg' alt="" />
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

         </div>
    )
  }
}

export default Venue
