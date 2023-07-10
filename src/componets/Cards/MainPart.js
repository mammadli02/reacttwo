

import React, { Component,useState } from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { MainCard } from './MainCards';

export default class MainPart extends Component {

  static defaultProps={
    datas:[]
  }
  render() {
    return (
<>
<h1>Card section</h1>
<div className='container' style={{marginTop:"50px"}}>



<Grid container spacing={2}>
{this.props.datas?.map((dat,index)=>(
    
    <Grid item lg={4} md={6}  sm={12} key={"dat" + index}>
<MainCard 

{...dat}/>

</Grid>

))}
        </Grid>
       

</div>

</>   
 )
  }
}


