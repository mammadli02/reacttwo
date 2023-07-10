import Card from 'react-bootstrap/Card';
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {PiNumberZeroBold} from "react-icons/pi"
import PropTypes from 'prop-types';
export class MainCard extends Component {
 
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  artir = () => {
    this.setState({ count: this.state.count + 1 });
  };

  azalt = () => {
    this.setState({ count: this.state.count - 1 });
  };
  sifirla = () => {
    this.setState({ count: this.state.count = 0 });
  };
  render() {
    return (

<>
<Card key={this.props.id} style={{ width: '18rem', height:"400px"}}>
       <Card.Img variant="top" src={this.props.image}/>
       <Card.Body>
         <Card.Title>{this.props.title}</Card.Title>
         <Card.Text>
          {this.props.desc}
         </Card.Text>
         <span style={{fontSize:"30px"}}>{this.state.count}</span>
         <div>
         </div>
         <Button variant="dark"onClick={this.artir}> <AiOutlinePlus/></Button>
         <Button variant="dark"onClick={this.sifirla}> <PiNumberZeroBold/> </Button>
         <Button variant="dark"onClick={this.azalt}> <AiOutlineMinus/> </Button>
            
       </Card.Body>
     </Card>

</>    )
  }
}

 export default MainCard
 MainCard.propTypes={
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image:PropTypes.string.isRequired
}

