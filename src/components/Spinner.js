import React, { Component } from 'react'
import loading from '../loading.gif'

export class spinner extends Component {
  render() {
    return (
        <div className='text-center'>
            <img src={loading} alt="loading" style={{height: '5rem', width: '5rem'}}/>
        </div>
    )
  }
}

export default spinner