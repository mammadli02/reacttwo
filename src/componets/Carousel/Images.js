import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
 class Images extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <>
     
      <Carousel style={{marginTop:"50px"}} >
      <Carousel.Item key={this.props.id}>
        <img
          className="d-block w-100"
          src={this.props.image}
         
        />
        <Carousel.Caption>
          <h3>{this.props.title}</h3>
          <p>{this.props.desc}</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={this.props.image}
         
        />

        <Carousel.Caption>
          <h3>{this.props.title}</h3>
          <p>{this.props.desc}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={this.props.image}
         
        />

        <Carousel.Caption>
          <h3>{this.props.title}</h3>
          <p>
            {this.props.desc}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
    )
  }
}
export default Images

