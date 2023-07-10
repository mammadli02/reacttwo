import React, { Component } from 'react'
import { BsFillLightbulbFill,BsFillLightbulbOffFill } from 'react-icons/bs';
import Alert from '../../ui/Alert/Alert';
export class Light extends React.Component {
    constructor (){
        super()
        this.state={
isShow:false
        }
        this.toogleShow=this.toogleShow.bind(this)
    }
toogleShow(){
    this.setState({isShow:!this.state.isShow})
}
  render() {
    console.log(this.state.isShow);
    const ShowIcon=this.state.isShow? BsFillLightbulbFill : BsFillLightbulbOffFill
    return (

       <>
    
       <h1>Light and Alert section</h1>
 <div className={`${this.state.isShow ? "bg-warning" : ""}`}>
        <button onClick={this.toogleShow}><ShowIcon/> </button>

 </div>
 {this.state.isShow && (<Alert title="My Alert Message" variant="danger" />)}
 </>

    )
  }
}

export default Light