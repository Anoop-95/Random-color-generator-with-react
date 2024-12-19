import React, { Component } from 'react'
import loading from '/src/loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading..."/>
        <h3>Loading your news</h3>
      </div>
    )
  }
}

export default Spinner
