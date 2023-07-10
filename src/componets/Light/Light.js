import React, { Component } from 'react'
import { BsFillLightbulbFill,BsFillLightbulbOffFill } from 'react-icons/bs';
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
    
       <h1>Light section</h1>
 <div className={`${this.state.isShow ? "bg-warning" : ""}`}>
        <button onClick={this.toogleShow}><ShowIcon/> </button>

 </div>
 </>

    )
  }
}

export default Light