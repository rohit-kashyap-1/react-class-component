import React, { Component } from 'react'

export default class Zoom extends Component {
  
  calc(p1,p2){
    return p1+p2
  }

//   render html
  render() {
    return (
      <div className='container'>
        <h1>Zoom component</h1>
        <h1>{this.calc(2,2)}</h1>
      </div>
    )
  }
}
